/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from './../ButtonMenu/context';
import Icon from './icon';
import './styles.css';

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
        return classnames('rainbow-menu-item-header rainbow-truncate', className);
    }

    getItemClassNames() {
        const { className } = this.props;
        return classnames('rainbow-menu-item', className);
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
            icon,
            iconPosition,
            disabled,
        } = this.props;

        if (variant === 'header') {
            return (
                <li className={this.getHeaderClassNames()} style={style} title={title} role="separator">
                    <span className="rainbow-text-title_caps">{label}</span>
                </li>
            );
        }

        const hasLeftIcon = !!(icon && iconPosition === 'left');
        const hasRightIcon = !!(icon && iconPosition === 'right');

        return (
            <li className={this.getItemClassNames()} style={style} role="presentation" onClick={this.handleClick}>
                <a
                    href="javascript:void(0);"
                    role="menuitem"
                    aria-disabled={disabled}
                    ref={this.itemRef}>

                    <span className="rainbow-truncate" title={title}>
                        <Icon
                            data-id="menu-item-left-icon"
                            icon={icon}
                            isVisible={hasLeftIcon}
                            position={iconPosition} />

                        {label}
                    </span>
                    <Icon
                        data-id="menu-item-right-icon"
                        icon={icon}
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
    /** The icon component to show. */
    icon: PropTypes.node,
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
    label: null,
    variant: 'default',
    icon: null,
    iconPosition: 'left',
    disabled: false,
    onClick: () => {},
    title: undefined,
    className: undefined,
    style: undefined,
};
