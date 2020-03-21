import React, { useMemo } from 'react';
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
        iconStyle,
        disabled,
        onChange,
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
            iconStyle,
            disabled,
        }),
        [theme, iconStyle, disabled],
    );

    const handleChange = event => {
        if (stripe && elements) {
            const payment = {
                stripe,
                element: elements.getElement(CardElement),
                empty: event.empty,
                complete: event.complete,
                brand: event.brand,
                error: event.error
                    ? {
                          code: event.error.code,
                          type: event.error.type,
                          message: event.error.message,
                      }
                    : undefined,
            };
            onChange(payment);
        }
    };
    return (
        <StyledContainer className={className} style={style}>
            <Label label={label} hideLabel={hideLabel} inputId={cardElementId} required />
            <CardElement
                id={cardElementId}
                options={cardElementOptions}
                onChange={handleChange}
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
    iconStyle: PropTypes.oneOf(['default', 'solid']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
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
    iconStyle: 'default',
    disabled: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default CardSection;
