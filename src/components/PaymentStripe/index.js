import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
    useElements,
    useStripe,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { ThemeContext } from 'styled-components';
import defaultTheme from '../../styles/defaultTheme';
import Input from '../Input';
import Button from '../Button';
import GoogleAddressLookup from '../GoogleAddressLookup';
import RequiredAsterisk from '../RequiredAsterisk';
import RenderIf from '../RenderIf';
import Spinner from '../Spinner';
import Container from './styled/container';
import FlexContainer from './styled/flexContainer';
import FlexItem from './styled/flexItem';
import ButtonContainer from './styled/buttonContainer';
import LabelText from './styled/labelText';
import ErrorText from '../Input/styled/errorText';
import IconContainer from './styled/iconContainer';
import CalendarIcon from './icons/calendarIcon';
import UserIcon from './icons/userIcon';
import CardIcon from './icons/cardIcon';
import LockIcon from './icons/lockIcon';

const loadingStyle = { visibility: 'collapse' };
const rememberMeStyle = { marginTop: '10px' };
const searchOptions = { types: ['address'] };
const initialBillingDetail = {
    name: '',
    email: '',
    phone: '',
    address: null,
    zipCode: '',
};

const PaymentStripe = props => {
    const {
        apiKeyGMap,
        buttonLabel,
        buttonAlign,
        inline,
        hasName,
        hasEmail,
        hasPhone,
        hasAddress,
        hasRememberMe,
        onChange,
        onProcessed,
        onError,
        getPaymentIntent,
        className,
        style,
    } = props;
    const stripe = useStripe();
    const elements = useElements();
    const themeContext = useContext(ThemeContext);
    const theme = themeContext ? themeContext.rainbow : defaultTheme;
    const [loading, setLoading] = useState(false);
    const [billingDetails, setBillingDetails] = useState(initialBillingDetail);
    const [cardDetails, setCardDetails] = useState({});
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState();
    const cardElementOptions = {
        style: {
            base: {
                iconColor: theme.palette.text.main,
                fontFamily: '"Lato", Arial, sans-serif',
                backgroundColor: theme.palette.background.main,
                color: theme.palette.text.main,
                fontSize: '1.1rem',
                '::placeholder': {
                    color: theme.palette.text.header,
                    fontVariant: 300,
                },
            },
        },
    };
    const handleInputChange = newDetail => {
        const newbillingDetails = {
            ...billingDetails,
            ...newDetail,
        };
        setBillingDetails(newbillingDetails);
        onChange({ billingDetails: newbillingDetails, cardDetails });
    };
    const handleAddressChange = newDetail => {
        const cardElement = inline ? elements.getElement(CardElement) : null;
        const addressComponents = newDetail.address ? newDetail.address.address_components : null;
        const lastAddressComponent = addressComponents
            ? addressComponents[addressComponents.length - 1]
            : null;
        const type = lastAddressComponent ? lastAddressComponent.types[0] : null;
        if (type === 'postal_code') {
            const newbillingDetails = {
                ...billingDetails,
                ...newDetail,
                zipCode: lastAddressComponent.long_name,
            };
            if (cardElement) {
                cardElement.update({
                    value: { postalCode: lastAddressComponent.long_name },
                });
            }
            handleInputChange({ ...newbillingDetails });
            return;
        }
        if (cardElement) {
            cardElement.update({
                value: { postalCode: '' },
            });
        }
        handleInputChange({
            ...newDetail,
            zipCode: '',
        });
    };
    const handleCardElementChange = event => {
        setError('');
        const newbillingDetails = {
            ...billingDetails,
            address: {
                ...billingDetails.address,
                postal_code: event.value ? event.value.postalCode : '',
            },
            zipCode: inline && event.value ? event.value.postalCode : billingDetails.zipCode,
        };
        setBillingDetails(newbillingDetails);
        setCardDetails({ ...event });
        if (event.error) {
            setError(event.error.message);
        }
        onChange({ billingDetails: newbillingDetails, cardDetails: event });
    };
    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements || !getPaymentIntent || !onProcessed) {
            return;
        }
        try {
            setLoading(true);
            // TODO: validate fields and normalize address
            const response = await getPaymentIntent();
            const cardElement = inline
                ? elements.getElement(CardElement)
                : elements.getElement(CardNumberElement);
            const result = await stripe.confirmCardPayment(response.client_secret, {
                payment_method: {
                    card: cardElement,
                    billing_details: billingDetails,
                    setup_future_usage: rememberMe ? 'off_session' : false,
                },
            });
            setLoading(false);
            if (result.error) {
                onError(result.error);
            } else {
                onProcessed(result);
            }
        } catch (e) {
            setLoading(false);
            e.type = e.name;
            onError(e);
        }
    };

    return (
        <Container inline={inline}>
            <RenderIf isTrue={loading}>
                <Spinner size="large" />
            </RenderIf>
            <form onSubmit={handleSubmit} className={className} style={style}>
                <div style={loading ? loadingStyle : null}>
                    <RenderIf isTrue={hasName}>
                        <Input
                            label="Name on Card"
                            placeholder="Name on Card"
                            icon={<UserIcon />}
                            value={billingDetails.name}
                            onChange={event =>
                                handleInputChange({ name: event.currentTarget.value })
                            }
                            required
                        />
                    </RenderIf>
                    <FlexContainer>
                        <RenderIf isTrue={hasEmail}>
                            <FlexItem grow={2}>
                                <Input
                                    label="Email"
                                    placeholder="janedeo@gmail.com"
                                    type="email"
                                    value={billingDetails.email}
                                    onChange={event =>
                                        handleInputChange({ email: event.currentTarget.value })
                                    }
                                    required
                                />
                            </FlexItem>
                        </RenderIf>
                        <RenderIf isTrue={hasPhone}>
                            <FlexItem grow={1}>
                                <Input
                                    label="Phone"
                                    placeholder="+1 941 550123"
                                    type="tel"
                                    value={billingDetails.phone}
                                    onChange={event =>
                                        handleInputChange({ phone: event.currentTarget.value })
                                    }
                                    required
                                />
                            </FlexItem>
                        </RenderIf>
                    </FlexContainer>
                    <RenderIf isTrue={hasAddress}>
                        <GoogleAddressLookup
                            label="Address"
                            onChange={value => handleAddressChange({ address: value })}
                            value={billingDetails.address}
                            placeholder="Enter location"
                            apiKey={apiKeyGMap}
                            searchOptions={searchOptions}
                            required
                        />
                    </RenderIf>
                    <RenderIf isTrue={inline}>
                        <div>
                            <LabelText htmlFor="cardNumber">
                                <RequiredAsterisk required /> Card Number
                            </LabelText>
                            <CardElement
                                id="cardNumber"
                                options={cardElementOptions}
                                onChange={handleCardElementChange}
                                onReady={() => setLoading(false)}
                            />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={!inline}>
                        <FlexContainer>
                            <FlexItem grow={2}>
                                <LabelText htmlFor="cardNumberElement">
                                    <RequiredAsterisk required /> Card Number
                                </LabelText>
                                <IconContainer>
                                    <CardIcon />
                                </IconContainer>
                                <CardNumberElement
                                    id="cardNumberElement"
                                    options={cardElementOptions}
                                    onChange={handleCardElementChange}
                                    onReady={() => setLoading(false)}
                                    value={{ postalCode: billingDetails.zipCode }}
                                />
                            </FlexItem>
                            <FlexItem grow={1}>
                                <LabelText htmlFor="cardExpiryElement">
                                    <RequiredAsterisk required /> Exp. Date
                                </LabelText>
                                <IconContainer>
                                    <CalendarIcon />
                                </IconContainer>
                                <CardExpiryElement
                                    id="cardExpiryElement"
                                    options={cardElementOptions}
                                    onChange={handleCardElementChange}
                                />
                            </FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem grow={1}>
                                <LabelText htmlFor="cardCvcElement">
                                    <RequiredAsterisk required /> CVC
                                </LabelText>
                                <IconContainer>
                                    <LockIcon />
                                </IconContainer>
                                <CardCvcElement
                                    id="cardCvcElement"
                                    options={cardElementOptions}
                                    onChange={handleCardElementChange}
                                />
                            </FlexItem>
                            <FlexItem grow={2}>
                                <Input
                                    label="Zip Code"
                                    placeholder="94107"
                                    value={billingDetails.zipCode}
                                    onChange={event =>
                                        handleInputChange({ zipCode: event.currentTarget.value })
                                    }
                                    required
                                />
                            </FlexItem>
                        </FlexContainer>
                    </RenderIf>
                    <RenderIf isTrue={hasRememberMe}>
                        <Input
                            type="checkbox"
                            label="Save Card for the next time"
                            checked={rememberMe}
                            onChange={event => setRememberMe(event.currentTarget.value)}
                            style={rememberMeStyle}
                        />
                    </RenderIf>
                    <ButtonContainer textAlign={buttonAlign}>
                        <Button
                            label={buttonLabel}
                            disabled={!stripe}
                            variant="brand"
                            type="submit"
                        />
                    </ButtonContainer>
                    <ErrorText>{error}</ErrorText>
                </div>
            </form>
        </Container>
    );
};

PaymentStripe.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKeyGMap: PropTypes.string.isRequired,
    /** Button label for the component. */
    buttonLabel: PropTypes.string,
    /** Button align for the component. */
    buttonAlign: PropTypes.oneOf(['right', 'left', 'center']),
    /** Specifies that the component has an inline input or varios input for get card information . */
    inline: PropTypes.bool,
    /** Specifies that the component has name field. This value defaults to false. */
    hasName: PropTypes.bool,
    /** Specifies that the component has email field. This value defaults to false. */
    hasEmail: PropTypes.bool,
    /** Specifies that the component has phone field. This value defaults to false. */
    hasPhone: PropTypes.bool,
    /** Specifies that the component has address field. This value defaults to false. */
    hasAddress: PropTypes.bool,
    /** Specifies that the component has remember card field. This value defaults to false. */
    hasRememberMe: PropTypes.bool,
    /** The action triggered when some value of the component changes. */
    onChange: PropTypes.func,
    /** The action triggered when stripe proccesing of Payment Intent. */
    onProcessed: PropTypes.func.isRequired,
    /** The action triggered when the component has some error. */
    onError: PropTypes.func,
    /** Function to create [PaymentIntent](https://stripe.com/docs/api/payment_intents/create?lang=node). */
    getPaymentIntent: PropTypes.func.isRequired,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

PaymentStripe.defaultProps = {
    apiKeyGMap: null,
    buttonLabel: 'Pay',
    buttonAlign: 'right',
    inline: false,
    hasName: false,
    hasEmail: false,
    hasPhone: false,
    hasAddress: false,
    hasRememberMe: false,
    onChange: () => {},
    onProcessed: undefined,
    onError: () => {},
    getPaymentIntent: undefined,
    className: undefined,
    style: undefined,
};

export default PaymentStripe;
