import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocale } from '../../libs/hooks';
import CardInput from './cardInput';

/**
 * Stripe Card Input component are used for freeform data entry.
 * @category Form
 */
const StripeCardInput = props => {
    const { apiKey, ...rest } = props;
    const locale = useLocale();
    const elementOptions = useMemo(() => ({ locale }), [locale]);
    const stripePromise = useMemo(() => loadStripe(apiKey), [apiKey]);

    return (
        <Elements stripe={stripePromise} options={elementOptions}>
            <CardInput {...rest} />
        </Elements>
    );
};

StripeCardInput.propTypes = {
    /** The application's API key. To use Stripe,
     * you must get an API Key. See https://dashboard.stripe.com/account/apikeys
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** Text label for the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when some value of the component changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

StripeCardInput.defaultProps = {
    label: 'Card Details',
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    disabled: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default StripeCardInput;
