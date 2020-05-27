import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import StyledCircleSpinner from './styled/circleSpinner';
import StyledArcSpinner from './styled/arcSpinner';
import StyledSpinnerContainer from './styled/spinnerContainer';
import StyledChildContainer from './styled/childContainer';

/**
 * Spinners should be shown when retrieving data or performing slow,
 * help to reassure the user that the system is actively retrieving data.
 */
export default function Spinner(props) {
    const { className, style, assistiveText, isVisible, size, variant, type, children } = props;

    if (isVisible) {
        if (type === 'arc') {
            return (
                <StyledSpinnerContainer>
                    <StyledArcSpinner
                        className={className}
                        size={size}
                        variant={variant}
                        style={style}
                    />
                    <StyledChildContainer>{children}</StyledChildContainer>
                    <AssistiveText text={assistiveText} />
                </StyledSpinnerContainer>
            );
        }
        return (
            <StyledCircleSpinner className={className} size={size} variant={variant} style={style}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <StyledChildContainer>{children}</StyledChildContainer>
                <AssistiveText text={assistiveText} />
            </StyledCircleSpinner>
        );
    }
    return null;
}

Spinner.propTypes = {
    /** The variant changes the appearance of the spinner.
     * Accepted variants are base, brand, and inverse. This value defaults to base. */
    variant: PropTypes.oneOf(['base', 'brand', 'inverse', 'neutral']),
    /** The size of the spinner. Accepted sizes are xx-small, x-small, small, medium, large and x-large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
    /** Show/Hide the spinner. */
    isVisible: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The type of the spinner. Accepted types are circle and arc.
     * This value defaults to circle. */
    type: PropTypes.oneOf(['circle', 'arc']),
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

Spinner.defaultProps = {
    variant: 'base',
    size: 'medium',
    isVisible: true,
    assistiveText: null,
    className: undefined,
    style: undefined,
    type: 'circle',
    children: null,
};
