import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useTheme, useUniqueIdentifier } from '../../libs/hooks';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledContainer from './styled/container';
import StyledFakeDisabled from './styled/fakeDisabled';
import getError from './helpers/getErrror';
import getCardElementOptions from './helpers/getCardElementOptions';

const CardInput = props => {
    const {
        label,
        hideLabel,
        bottomHelpText,
        error,
        className,
        style,
        disabled,
        onChange,
        onFocus,
        onBlur,
    } = props;
    const stripe = useStripe();
    const elements = useElements();
    const cardElementId = useUniqueIdentifier('card-element');
    const theme = useTheme().rainbow;
    const cardElementOptions = useMemo(() => getCardElementOptions(theme, disabled), [
        theme,
        disabled,
    ]);
    const handleChange = event => {
        if (stripe && elements) {
            const card = {
                stripe,
                element: elements.getElement(CardElement),
                iEmpty: event.empty,
                isComplete: event.complete,
                brand: event.brand,
                error: getError(event.error),
            };
            onChange(card);
        }
    };
    return (
        <StyledContainer disabled={disabled} className={className} style={style}>
            <Label label={label} hideLabel={hideLabel} inputId={cardElementId} required />
            <RenderIf isTrue={disabled}>
                <StyledFakeDisabled />
            </RenderIf>
            <CardElement
                id={cardElementId}
                className="card-element"
                options={cardElementOptions}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center">{error}</ErrorText>
            </RenderIf>
        </StyledContainer>
    );
};

CardInput.propTypes = {
    label: PropTypes.string,
    hideLabel: PropTypes.bool,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

CardInput.defaultProps = {
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

export default CardInput;
