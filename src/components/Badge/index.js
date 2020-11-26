import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Content from './content';

/**
 * Badges are labels that hold small amounts of information.
 */
export default function Badge(props) {
    const { className, style, label, title, children, variant, size } = props;

    if (children === null && label === null) {
        return null;
    }

    return (
        <StyledContainer
            className={className}
            style={style}
            variant={variant}
            title={title}
            size={size}
        >
            <Content label={label}>{children}</Content>
        </StyledContainer>
    );
}

Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** The content of the badge. It is used to render icon or text elements within the badge.
     * Children take precedence over label. */
    children: PropTypes.node,
    /** The variant changes the appearance of the badge. Accepted variants include default,
     * inverse, lightest, brand, outline-brand, warning, success and error. This value takes the default variant by default. */
    variant: PropTypes.oneOf([
        'default',
        'inverse',
        'lightest',
        'outline-brand',
        'brand',
        'warning',
        'success',
        'error',
    ]),
    /** The size of the badge. Valid values are small, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Badge.defaultProps = {
    label: null,
    title: undefined,
    children: null,
    variant: 'default',
    size: 'medium',
    className: undefined,
    style: undefined,
};
