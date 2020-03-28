import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import CardInput from './component';

const stripeApiV3Url = 'https://js.stripe.com/v3';

/**
 * Stripe Card Input component are used for freeform data entry.
 * @category Form
 */
const StripeCardInput = props => {
    const { ...rest } = props;

    const Component = useCallback(scriptLoader(stripeApiV3Url)(CardInput), []);

    return <Component {...rest} />;
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
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The Calendar locale. Defaults to browser's language. */
    locale: PropTypes.oneOf([
        'ar',
        'da',
        'de',
        'en',
        'es',
        'fi',
        'fr',
        'he',
        'it',
        'ja',
        'lt',
        'lv',
        'ms',
        'nb',
        'nl',
        'pl',
        'pt',
        'pt-BR',
        'ru',
        'sv',
        'zh',
    ]),
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
    label: undefined,
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    disabled: false,
    required: false,
    tabIndex: undefined,
    locale: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default StripeCardInput;
