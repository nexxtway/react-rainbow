import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';

/**
 * A DynamicMenuItem is a menu item meant to be used in the action column of Table. This component adds two new props
 * that allows to render the item conditionally based on row data.
 * @category DataView
 */
const DynamicMenuItem = props => {
    const { renderIf, disabled, rowData: row, ...rest } = props;

    const shouldRender = typeof renderIf === 'function' ? renderIf({ row }) : true;
    const isDisabled = typeof disabled === 'function' ? disabled({ row }) : false;

    if (shouldRender) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <MenuItem {...rest} disabled={isDisabled} />;
    }
    return null;
};

DynamicMenuItem.propTypes = {
    /** Text of the menu item. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The variant changes the type of menu item. Accepted variants include default and header.
     * This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'header']),
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** The action triggered when the menu item is clicked. */
    onClick: PropTypes.func,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** An object containing the data of the row where this item is rendered. */
    rowData: PropTypes.object,
    /** A function that receives the row data and returns if the item should be visible. */
    renderIf: PropTypes.func,
    /** A function that receiver the row data and returns if the item should be disabled. */
    disabled: PropTypes.func,
};

DynamicMenuItem.defaultProps = {
    label: null,
    variant: 'default',
    icon: null,
    iconPosition: 'left',
    onClick: () => {},
    title: undefined,
    className: undefined,
    style: undefined,
    rowData: undefined,
    renderIf: () => true,
    disabled: () => false,
};

export default DynamicMenuItem;
