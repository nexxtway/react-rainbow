/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './../PrimitiveMenu/context';
import Icon from './icon';
import StyledHeader from './styled/header';
import StyledHeaderLabel from './styled/headerLabel';
import StyledLi from './styled/li';
import StyledIconContainer from './styled/iconContainer';

class Item extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
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

    handleClick(event) {
        const { disabled, onClick, privateOnClose } = this.props;
        if (disabled) {
            return null;
        }
        onClick(event);
        return privateOnClose();
    }

    handleHover(event) {
        const { privateOnHover, disabled } = this.props;
        if (disabled) {
            return null;
        }
        return privateOnHover(event, this.itemRef.current);
    }

    click() {
        this.itemRef.current.click();
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
        } = this.props;

        if (variant === 'header') {
            return (
                <StyledHeader className={className} style={style} title={title} role="separator">
                    <StyledHeaderLabel>{label}</StyledHeaderLabel>
                </StyledHeader>
            );
        }

        const hasLeftIcon = !!(icon && iconPosition === 'left');
        const hasRightIcon = !!(icon && iconPosition === 'right');

        return (
            <StyledLi
                className={className}
                style={style}
                role="menuitem"
                onClick={this.handleClick}
                onMouseEnter={this.handleHover}
                aria-disabled={disabled}
                tabIndex="-1"
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
            </StyledLi>
        );
    }
}

/**
 * Represents a list item in a menu.
 */
export default function MenuItem(props) {
    return <Consumer>{values => <Item {...props} {...values} />}</Consumer>;
}

MenuItem.propTypes = {
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
    /** If true the menu item is not actionable and is shown as disabled. */
    disabled: PropTypes.bool,
    /** The action triggered when the menu item is clicked. */
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
