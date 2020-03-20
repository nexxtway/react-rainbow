import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useTheme, useUniqueIdentifier } from '../../libs/hooks';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledContainer from './styled/container';

const CardSection = props => {
    const {
        label,
        hideLabel,
        bottomHelpText,
        error,
        className,
        style,
        hidePostalCode,
        hideIcon,
        iconStyle,
        disabled,
        postalCode,
        onChange,
        onReady,
        onFocus,
        onBlur,
    } = props;
    const stripe = useStripe();
    const elements = useElements();
    const cardElementId = useUniqueIdentifier('card-element');
    const theme = useTheme().rainbow;
    const cardElementOptions = useMemo(
        () => ({
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
            hidePostalCode,
            hideIcon,
            iconStyle,
            disabled,
            value: { postalCode },
        }),
        [theme, hidePostalCode, hideIcon, iconStyle, disabled, postalCode],
    );
    useEffect(() => {
        if (!elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        if (cardElement) {
            cardElement.update({
                value: { postalCode },
            });
        }
    }, [elements, postalCode]);

    const handleChange = event => {
        if (!stripe || !elements) {
            return;
        }
        const payment = {
            ...event,
            stripe,
            element: elements.getElement(CardElement),
        };
        onChange(payment);
    };
    return (
        <StyledContainer className={className} style={style}>
            <Label label={label} hideLabel={hideLabel} inputId={cardElementId} required />
            <CardElement
                id={cardElementId}
                options={cardElementOptions}
                onChange={handleChange}
                onReady={() => onReady()}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText>{error}</ErrorText>
            </RenderIf>
        </StyledContainer>
    );
};

CardSection.propTypes = {
    label: PropTypes.string,
    hideLabel: PropTypes.bool,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hidePostalCode: PropTypes.bool,
    hideIcon: PropTypes.bool,
    iconStyle: PropTypes.oneOf(['default', 'solid']),
    disabled: PropTypes.bool,
    postalCode: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onReady: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

CardSection.defaultProps = {
    label: 'Card Details',
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    hidePostalCode: false,
    hideIcon: false,
    iconStyle: 'default',
    disabled: false,
    postalCode: undefined,
    onChange: () => {},
    onReady: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default CardSection;
