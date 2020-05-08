import React, { useMemo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { useTheme, useUniqueIdentifier, useLocale } from '../../libs/hooks';
import { getError, getCardElementOptions, getElementsOptions } from './helpers';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledContainer from './styled/container';
import StyledCardInput from './styled/cardInput';

/**
 * Stripe Card Input component are used for freeform data entry.
 * @category Form
 */
const StripeCardInput = React.forwardRef((props, ref) => {
    const {
        apiKey,
        label,
        hideLabel,
        bottomHelpText,
        error,
        disabled,
        required,
        locale,
        onChange,
        onFocus,
        onBlur,
        className,
        style,
        isScriptLoaded,
        isScriptLoadSucceed,
    } = props;
    const [stripe, setStripe] = useState(null);
    const cardRef = useRef();
    const stripeCardInputId = useUniqueIdentifier('stripe-card-input');
    const errorMessageId = useUniqueIdentifier('error-message');
    const theme = useTheme().rainbow;
    const cardElementOptions = useMemo(() => getCardElementOptions(theme, disabled), [
        disabled,
        theme,
    ]);
    const localeStripe = useLocale(locale);
    const elementsOptions = useMemo(() => getElementsOptions(localeStripe), [localeStripe]);

    useEffect(() => {
        if (isScriptLoaded && isScriptLoadSucceed && window.Stripe && apiKey) {
            setStripe(window.Stripe(apiKey));
        }
    }, [apiKey, isScriptLoadSucceed, isScriptLoaded]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (stripe) {
            const cardNode = cardRef.current;
            const elements = stripe.elements(elementsOptions);
            const card = elements.create('card', cardElementOptions);

            card.mount(cardNode);
            card.on('change', event => {
                const stripeCardEvent = {
                    stripe,
                    card,
                    isEmpty: event.empty,
                    isComplete: event.complete,
                    cardBrand: event.brand,
                    error: getError(event.error),
                };
                onChange(stripeCardEvent);
            });
            card.on('focus', onFocus);
            card.on('blur', onBlur);
            return () => {
                card.unmount();
                card.destroy();
            };
        }
    }, [cardElementOptions, elementsOptions, onBlur, onChange, onFocus, stripe]);

    return (
        <StyledContainer
            ref={ref}
            className={className}
            style={style}
            disabled={disabled}
            error={error}
        >
            <Label
                label={label}
                hideLabel={hideLabel}
                inputId={stripeCardInputId}
                required={required}
            />
            <StyledCardInput ref={cardRef} id={stripeCardInputId} disabled={disabled} />
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText id={errorMessageId} alignSelf="center">
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

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
    /** The component locale. If the locale is not passed, it defaults to the context language, and if the context language is not passed, it will default to the browser's language. */
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
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    isScriptLoaded: PropTypes.bool.isRequired,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    isScriptLoadSucceed: PropTypes.bool.isRequired,
};

StripeCardInput.defaultProps = {
    label: undefined,
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    disabled: false,
    required: false,
    locale: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default scriptLoader('https://js.stripe.com/v3')(withReduxForm(StripeCardInput));

export { StripeCardInput as Component };
