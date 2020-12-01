import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';

/**
 * Button groups are used to bunch together buttons with similar actions
 */
export default function ButtonGroup(props) {
    const { className, style, children, variant } = props;

    return (
        <StyledContainer className={className} style={style} role="group" variant={variant}>
            {children}
        </StyledContainer>
    );
}

ButtonGroup.propTypes = {
    /** The content of the ButtonGroup.
     * Accepted childrens include Button, ButtonIcon and ButtonMenu. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The variant changes the appearance of the ButtonGroup. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
};

ButtonGroup.defaultProps = {
    children: null,
    className: undefined,
    style: undefined,
    variant: 'default',
};
