import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Content from './content';

/**
 * Badges are labels which hold small amounts of information.
 */
export default function Badge(props) {
    const { className, style, label, title, children, variant } = props;

    if (children === null && label === null) {
        return null;
    }

    return (
        <StyledContainer className={className} style={style} variant={variant} title={title}>
            <Content label={label}>{children}</Content>
        </StyledContainer>
    );
}

Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** The content of the badge. Used to render icon or text elements inside the badge.
     * Children takes precedence over label. */
    children: PropTypes.node,
    /** The variant changes the appearance of the badge. Accepted variants include default,
     * inverse, lightest, brand and outline-brand. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'inverse', 'lightest', 'outline-brand', 'brand']),
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
    className: undefined,
    style: undefined,
};
