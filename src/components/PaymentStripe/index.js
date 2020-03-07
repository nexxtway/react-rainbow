import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { ThemeContext } from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import GoogleAddressLookup from '../GoogleAddressLookup';
import RequiredAsterisk from '../RequiredAsterisk';
import RenderIf from '../RenderIf';
import LabelText from './styled/labelText';
import ButtonContainer from './styled/buttonContainer';
import defaultTheme from '../../styles/defaultTheme';
import UserIcon from './icons/userIcon';
import StyleStripeElement from './styleStripeElement';

const PaymentStripe = props => {
    const {
        apiKeyGMap,
        buttonLabel,
        buttonAlign,
        hasAddress,
        hasRememberMe,
        onProcessed,
        onError,
        getPaymentIntent,
        className,
        style,
    } = props;
    const stripe = useStripe();
    const elements = useElements();
    const themeContext = useContext(ThemeContext);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const theme = themeContext ? themeContext.rainbow : defaultTheme;
    const cardElementOptions = {
        style: {
            base: {
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
    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements || !getPaymentIntent || !onProcessed) {
            return;
        }
        try {
            // TODO: validate fields and normalize address
            const response = await getPaymentIntent();
            const result = await stripe.confirmCardPayment(response.client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name,
                        address,
                    },
                    setup_future_usage: rememberMe ? 'off_session' : false,
                },
            });

            if (result.error) {
                onError(result.error);
            } else {
                onProcessed(result);
            }
        } catch (e) {
            onError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className} style={style}>
            <StyleStripeElement theme={theme} />
            <Input
                label="Name on Card"
                placeholder="Name on Card"
                icon={<UserIcon />}
                value={name}
                onChange={event => setName(event.currentTarget.value)}
                required
            />
            <LabelText>
                <RequiredAsterisk required />
                Card Number
                <CardElement options={cardElementOptions} />
            </LabelText>
            <RenderIf isTrue={hasAddress}>
                <GoogleAddressLookup
                    label="Address"
                    onChange={value => setAddress(value)}
                    value={address}
                    placeholder="Enter location"
                    apiKey={apiKeyGMap}
                    required
                />
            </RenderIf>
            <RenderIf isTrue={hasRememberMe}>
                <Input
                    type="checkbox"
                    label="Save Card for the next time"
                    checked={rememberMe}
                    onChange={event => setRememberMe(event.currentTarget.checked)}
                />
            </RenderIf>
            <ButtonContainer textAlign={buttonAlign}>
                <Button label={buttonLabel} disabled={!stripe} variant="brand" type="submit" />
            </ButtonContainer>
        </form>
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
    /** Specifies that the component has address field. This value defaults to false. */
    hasAddress: PropTypes.bool,
    /** Specifies that the component has remember card field. This value defaults to false. */
    hasRememberMe: PropTypes.bool,
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
    hasAddress: false,
    hasRememberMe: false,
    onProcessed: undefined,
    onError: () => {},
    getPaymentIntent: undefined,
    className: undefined,
    style: undefined,
};

export default PaymentStripe;
