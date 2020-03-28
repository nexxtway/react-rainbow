import React, { useMemo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { useTheme, useUniqueIdentifier, useLocale } from '../../libs/hooks';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledContainer from './styled/container';
import getError from './helpers/getErrror';
import getCardElementOptions from './helpers/getCardElementOptions';
import StyledCardInput from './styled/cardInput';

const CardInput = React.forwardRef((props, ref) => {
    const {
        apiKey,
        label,
        hideLabel,
        bottomHelpText,
        error,
        className,
        style,
        disabled,
        required,
        onChange,
        onFocus,
        onBlur,
        tabIndex,
        isScriptLoaded,
        isScriptLoadSucceed,
    } = props;
    const [stripe, setStripe] = useState(null);
    const cardRef = useRef();
    const cardElementId = useUniqueIdentifier('card-element');
    const theme = useTheme().rainbow;
    const cardElementOptions = useMemo(() => getCardElementOptions(theme, disabled), [
        theme,
        disabled,
    ]);
    const locale = useLocale();
    const elementOptions = useMemo(
        () => ({
            locale,
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Lato&display=swap',
                },
            ],
        }),
        [locale],
    );
    useEffect(() => {
        if (isScriptLoaded && isScriptLoadSucceed && window.Stripe) {
            setStripe(window.Stripe(apiKey));
        }
    }, [apiKey, isScriptLoadSucceed, isScriptLoaded]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (stripe && !disabled) {
            const cardNode = cardRef.current;
            const elements = stripe.elements(elementOptions);
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
            const handlerBlur = () => card.blur();
            const handlerFocus = () => card.focus();
            cardNode.addEventListener('blur', handlerBlur);
            cardNode.addEventListener('focus', handlerFocus);
            return () => {
                cardNode.removeEventListener('blur', handlerBlur);
                cardNode.removeEventListener('focus', handlerFocus);
                card.unmount();
                card.destroy();
            };
        }
    }, [cardElementOptions, disabled, elementOptions, onBlur, onChange, onFocus, stripe]);

    return (
        <StyledContainer disabled={disabled} className={className} style={style} ref={ref}>
            <Label
                label={label}
                hideLabel={hideLabel}
                inputId={cardElementId}
                required={required}
            />
            <StyledCardInput
                ref={cardRef}
                id={cardElementId}
                tabIndex={tabIndex}
                disabled={disabled}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center">{error}</ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

CardInput.propTypes = {
    apiKey: PropTypes.string.isRequired,
    label: PropTypes.string,
    hideLabel: PropTypes.bool,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
};

CardInput.defaultProps = {
    label: undefined,
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    disabled: false,
    required: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    tabIndex: undefined,
};

export default withReduxForm(CardInput);

export { CardInput as Component };
