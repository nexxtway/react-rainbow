/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNameUtilityPropType from './../../propTypes/iconNameUtilityPropType';
import { Consumer } from './../ButtonMenu/context';
import Icon from './icon';

class Item extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { privateRegisterChild, disabled, variant } = this.props;
        const isHeader = variant === 'header';
        if (disabled || isHeader) {
            return null;
        }
        return setTimeout(() => privateRegisterChild(this.itemRef.current), 0);
    }

    componentWillUnmount() {
        const { privateUnregisterChild } = this.props;
        return privateUnregisterChild(this.itemRef.current);
    }

    getHeaderClassNames() {
        const { className } = this.props;
        return classnames('slds-dropdown__header slds-truncate', className);
    }

    getItemClassNames() {
        const { className } = this.props;
        return classnames('slds-dropdown__item', className);
    }

    handleClick(event) {
        const { disabled, onClick, privateOnClose } = this.props;
        if (disabled) {
            return null;
        }
        onClick(event);
        return privateOnClose();
    }

    click() {
        this.itemRef.current.click();
    }

    render() {
        const {
            style,
            label,
            title,
            variant,
            iconName,
            iconPosition,
            disabled,
        } = this.props;

        if (variant === 'header') {
            return (
                <li className={this.getHeaderClassNames()} style={style} title={title} role="separator">
                    <span className="slds-text-title_caps">{label}</span>
                </li>
            );
        }

        const hasLeftIcon = !!(iconName && iconPosition === 'left');
        const hasRightIcon = !!(iconName && iconPosition === 'right');

        return (
            <li className={this.getItemClassNames()} style={style} role="presentation" onClick={this.handleClick}>
                <a
                    href="javascript:void(0);"
                    role="menuitem"
                    aria-disabled={disabled}
                    ref={this.itemRef}>

                    <span className="slds-truncate" title={title}>
                        <Icon
                            data-id="menu-item-left-icon"
                            iconName={iconName}
                            isVisible={hasLeftIcon}
                            position={iconPosition} />

                        {label}
                    </span>
                    <Icon
                        data-id="menu-item-right-icon"
                        iconName={iconName}
                        isVisible={hasRightIcon}
                        position={iconPosition} />

                </a>
            </li>
        );
    }
}

/**
* Represents a list item in a menu.
*/
export default function MenuItem(props) {
    return (
        <Consumer>
            {values => <Item {...props} {...values} />}
        </Consumer>
    );
}

MenuItem.propTypes = {
    /** Text of the menu item. */
    label: PropTypes.node.isRequired,
    /** The variant changes the type of menu item. Accepted variants include default and header.
    * This value defaults to default. */
    variant: PropTypes.oneOf([
        'default', 'header',
    ]),
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNameUtilityPropType,
    /** Describes the position of the icon with respect to body. Options include left and right.
    * This value defaults to left. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    /** If true the menu item is not actionable and is shown as disabled. */
    disabled: PropTypes.bool,
    /** The action triggered when the breadcrumb is clicked. */
    onClick: PropTypes.func,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

MenuItem.defaultProps = {
    variant: 'default',
    iconName: undefined,
    iconPosition: 'left',
    disabled: false,
    onClick: () => {},
    title: undefined,
    className: undefined,
    style: undefined,
};
