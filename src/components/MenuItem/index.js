/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

export default function MenuItem(props) {
    return (
        <Consumer>
            {values => <Item {...props} {...values} />}
        </Consumer>
    );
}

MenuItem.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.node.isRequired,
    title: PropTypes.string,
    variant: PropTypes.oneOf([
        'default', 'header',
    ]),
    iconName: PropTypes.string,
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    className: '',
    style: {},
    title: undefined,
    variant: 'default',
    iconName: undefined,
    iconPosition: 'left',
    disabled: false,
    onClick: () => {},
};
