import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocale } from '../../libs/hooks';
import CheckoutForm from './checkoutForm';

/**
 * Payment Stripe component are used for freeform data entry.
 * @category Form
 */
const PaymentStripe = props => {
    const { apiKeyStripe, className, style, ...rest } = props;
    const locale = useLocale();
    const elementOptions = { locale };
    const stripePromise = useMemo(() => loadStripe(apiKeyStripe), [apiKeyStripe]);

    return (
        <Elements
            stripe={stripePromise}
            options={elementOptions}
            className={className}
            style={style}
        >
            <CheckoutForm {...rest} />
        </Elements>
    );
};

PaymentStripe.propTypes = {
    apiKeyStripe: PropTypes.string.isRequired,
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
    apiKeyStripe: null,
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
