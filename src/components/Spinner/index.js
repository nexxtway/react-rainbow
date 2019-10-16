import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import StyledSpinner from './styled/spinner';

/**
 * Spinners should be shown when retrieving data or performing slow,
 * help to reassure the user that the system is actively retrieving data.
 */
export default function Spinner(props) {
    const { className, style, assistiveText, isVisible, size, variant } = props;

    if (isVisible) {
        return (
            <StyledSpinner className={className} size={size} variant={variant} style={style}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <AssistiveText text={assistiveText} />
            </StyledSpinner>
        );
    }
    return null;
}

Spinner.propTypes = {
    /** The variant changes the appearance of the spinner.
     * Accepted variants are base, brand, and inverse. This value defaults to base. */
    variant: PropTypes.oneOf(['base', 'brand', 'inverse', 'neutral']),
    /** The size of the spinner. Accepted sizes are small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Show/Hide the spinner. */
    isVisible: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Spinner.defaultProps = {
    variant: 'base',
    size: 'medium',
    isVisible: true,
    assistiveText: null,
    className: undefined,
    style: undefined,
};
