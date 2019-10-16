/* eslint-disable no-script-url, react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Picklist/context';
import Icon from './icon';
import StyledHeader from './styled/header';
import StyledHeaderLabel from './styled/headerLabel';
import StyledItem from './styled/item';
import StyledIconContainer from './styled/iconContainer';

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
        const { disabled, variant, name, currentValueName } = this.props;
        const isHeader = variant === 'header';
        if (disabled || isHeader || typeof name !== 'string' || name === currentValueName) {
            return null;
        }
        return this.register();
    }

    componentDidUpdate(prevProps) {
        const { currentValueName, name } = this.props;
        const { currentValueName: prevCurrentValueName } = prevProps;
        if (prevCurrentValueName !== currentValueName) {
            if (prevCurrentValueName === name && currentValueName !== name) {
                this.register();
            } else if (prevCurrentValueName !== name && currentValueName === name) {
                this.unregister();
            }
        }
    }

    componentWillUnmount() {
        return this.unregister();
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

    register() {
        const { privateRegisterChild, label, name, icon, value } = this.props;
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

    unregister() {
        const { privateUnregisterChild } = this.props;
        return setTimeout(() => privateUnregisterChild(this.itemRef.current), 0);
    }

    render() {
        const {
            style,
            className,
            label,
            title,
            variant,
            icon,
            iconPosition,
            disabled,
            activeOptionName,
            name,
            currentValueName,
        } = this.props;
        const isSelected = currentValueName === name;
        const isActive = activeOptionName === name;

        if (variant === 'header') {
            return (
                <StyledHeader
                    className={className}
                    style={style}
                    title={title}
                    role="presentation"
                    onMouseDown={preventDefault}
                >
                    <StyledHeaderLabel>{label}</StyledHeaderLabel>
                </StyledHeader>
            );
        }

        const hasLeftIcon = !!(icon && iconPosition === 'left');
        const hasRightIcon = !!(icon && iconPosition === 'right');
        const itemDataId = `picklist-option-li-selected_${isSelected}`;

        return (
            <StyledItem
                data-id={itemDataId}
                className={className}
                style={style}
                role="presentation"
                onMouseDown={this.handleClick}
                onMouseEnter={this.handleHover}
                isSelected={isSelected}
                isActive={isActive}
            >
                <div
                    id={name}
                    role="option"
                    aria-selected={isActive}
                    aria-disabled={disabled}
                    ref={this.itemRef}
                >
                    <StyledIconContainer title={title}>
                        <Icon
                            data-id="menu-item-left-icon"
                            icon={icon}
                            isVisible={hasLeftIcon}
                            position={iconPosition}
                        />

                        {label}
                    </StyledIconContainer>
                    <Icon
                        data-id="menu-item-right-icon"
                        icon={icon}
                        isVisible={hasRightIcon}
                        position={iconPosition}
                    />
                </div>
            </StyledItem>
        );
    }
}

/**
 * Represents a list options in a menu.
 * @category Form
 */
export default function PicklistOption(props) {
    return <Consumer>{values => <Option {...props} {...values} />}</Consumer>;
}

export { Option };

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
