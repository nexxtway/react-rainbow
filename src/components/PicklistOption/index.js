/* eslint-disable no-script-url, react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from '../Picklist/context';
import Icon from './icon';
import './styles.css';

function preventDefault(event) {
    event.preventDefault();
}

class Option extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    componentDidMount() {
        const { privateRegisterChild, disabled, variant, label, name, icon, value } = this.props;
        const isHeader = variant === 'header';
        if (disabled || isHeader || typeof name !== 'string') {
            return null;
        }
        return setTimeout(
            () =>
                privateRegisterChild(this.itemRef.current, {
                    label,
                    name,
                    icon,
                    value,
                }),
            0,
        );
    }

    componentDidUpdate(prevProps) {
        const { privateRegisterChild, privateUnregisterChild } = this.props;
        const { currentValueName: prevCurrentValueName } = prevProps;
        const { currentValueName, label, name, icon, value } = this.props;
        if (prevCurrentValueName !== currentValueName) {
            if (prevCurrentValueName === name && currentValueName !== name) {
                setTimeout(
                    () =>
                        privateRegisterChild(this.itemRef.current, {
                            label,
                            name,
                            icon,
                            value,
                        }),
                    0,
                );
            } else if (prevCurrentValueName !== name && currentValueName === name) {
                setTimeout(() => privateUnregisterChild(this.itemRef.current), 0);
            }
        }
    }

    componentWillUnmount() {
        const { privateUnregisterChild } = this.props;
        return privateUnregisterChild(this.itemRef.current);
    }

    getHeaderClassNames() {
        const { className } = this.props;
        return classnames('rainbow-picklist-option_header', className);
    }

    getItemClassNames() {
        const { className, activeOptionName, name, currentValueName } = this.props;
        return classnames(
            'rainbow-picklist-option',
            {
                'rainbow-picklist-option_selected': currentValueName === name,
                'rainbow-picklist-option_active': activeOptionName === name,
            },
            className,
        );
    }

    handleClick(event) {
        const { disabled, privateOnClick, label, name, icon, value } = this.props;

        if (disabled) {
            event.preventDefault();
            return null;
        }
        return privateOnClick(event, {
            label,
            name,
            icon,
            value,
        });
    }

    handleHover(event) {
        const { privateOnHover, disabled, name } = this.props;
        if (disabled) {
            return null;
        }
        return privateOnHover(event, name);
    }

    click() {
        this.itemRef.current.click();
    }

    render() {
        const { style, label, title, variant, icon, iconPosition, disabled } = this.props;

        if (variant === 'header') {
            return (
                <li
                    className={this.getHeaderClassNames()}
                    style={style}
                    title={title}
                    role="presentation"
                    onMouseDown={preventDefault}
                >
                    <span className="rainbow-picklist-option_header-label">{label}</span>
                </li>
            );
        }

        const hasLeftIcon = !!(icon && iconPosition === 'left');
        const hasRightIcon = !!(icon && iconPosition === 'right');

        return (
            <li
                className={this.getItemClassNames()}
                style={style}
                role="presentation"
                onMouseDown={this.handleClick}
                onMouseEnter={this.handleHover}
            >
                <a
                    href="javascript:void(0);"
                    role="menuitem"
                    aria-disabled={disabled}
                    ref={this.itemRef}
                >
                    <span className="rainbow-picklist-option_icon-container" title={title}>
                        <Icon
                            data-id="menu-item-left-icon"
                            icon={icon}
                            isVisible={hasLeftIcon}
                            position={iconPosition}
                        />

                        {label}
                    </span>
                    <Icon
                        data-id="menu-item-right-icon"
                        icon={icon}
                        isVisible={hasRightIcon}
                        position={iconPosition}
                    />
                </a>
            </li>
        );
    }
}

/**
 * Represents a list item in a menu.
 */
export default function PicklistOption(props) {
    return <Consumer>{values => <Option {...props} {...values} />}</Consumer>;
}

PicklistOption.propTypes = {
    /** Text of the PicklistOption. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** The name of the PicklistOption. */
    name: PropTypes.string.isRequired,
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
    /** Specifies the selected value of the PicklistOption. */
    value: PropTypes.object,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

PicklistOption.defaultProps = {
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
