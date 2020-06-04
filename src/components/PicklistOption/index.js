import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';

/**
 * Represents a list options in a menu.
 * @category Form
 */
export default function PicklistOption(props) {
    return <Option {...props} />;
}

PicklistOption.propTypes = {
    /** Text of the PicklistOption. */
    label: PropTypes.string,
    /** The name of the PicklistOption. */
    name: PropTypes.string,
    /** The variant changes the type of PicklistOption.
     * Accepted variants include default and header.
     * This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'header']),
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** If true the PicklistOption is not actionable and is shown as disabled. */
    disabled: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** The value of the PicklistOption. */
    value: PropTypes.any,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

PicklistOption.defaultProps = {
    label: undefined,
    name: undefined,
    variant: 'default',
    icon: null,
    iconPosition: 'left',
    disabled: false,
    title: undefined,
    className: undefined,
    style: undefined,
    value: undefined,
};
