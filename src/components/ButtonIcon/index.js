/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';
import IconSvg from '../IconSvg';

const ICON_SVG_COMPONENT = (
    <IconSvg className="slds-button__icon slds-button__icon_x-small"
             iconName="utility:down"
             variant="bare" />
);

export default class ButtonIcon extends Component {
    getBtnClass() {
        const { className, size, variant } = this.props;

        return classnames('slds-button_icon', {
            'slds-button_icon-more': variant === 'dropdownBorder',
            'slds-button_icon-container-more': variant === 'dropdown',
            'slds-button_icon-inverse slds-button_icon-container-more': variant === 'dropdownInverse',
            'slds-button_icon-border': variant === 'border' || variant === 'hinthoverBorder',
            'slds-button_icon-border-inverse': variant === 'borderInverse' || variant === 'hinthoverInverse',
        }, {
            'slds-button_icon-small': size === 'small',
            'slds-button_icon-x-small': size === 'x-small',
            'slds-button_icon-xx-small': size === 'xx-small',
        }, className);
    }

    getIconSvgClass() {
        const { variant } = this.props;

        return classnames('slds-button__icon', {
            'slds-button__icon_hint': variant === 'hinthover' || variant === 'hinthoverBorder',
            'slds-button__icon_inverse-hint': variant === 'hinthoverInverse',
        });
    }

    renderComponent() {
        const {
            assistiveText,
            disabled,
            iconName,
            onClick,
            onFocus,
            onBlur,
            style,
            title,
            variant,
        } = this.props;
        const hasDropdownIcon = variant === 'dropdown' || variant === 'dropdownBorder' || variant === 'dropdownInverse';

        return (
            <Button {...this.props}
                    className={this.getBtnClass()}
                    ariaHaspopup={hasDropdownIcon}
                    disabled={disabled}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={style}
                    title={title}
                    variant="bare" >
                <IconSvg className={this.getIconSvgClass()} iconName={iconName} variant="bare" />
                { hasDropdownIcon ? ICON_SVG_COMPONENT : null }
                <span className="slds-assistive-text">{ assistiveText }</span>
            </Button>
        );
    }

    render() {
        const {
            size,
            variant,
        } = this.props;

        switch (variant) {
        case 'default':
        case 'border':
        case 'borderInverse':
            return this.renderComponent();
        case 'dropdown':
        case 'dropdownBorder':
        case 'dropdownInverse':
        /* This is because if a size prop if passed with another value,
         the dropdown button icon become a mess */
            if (size !== 'medium') {
                console.warn('size prop does not make sense for dropdown variant');
                return null;
            }
            return this.renderComponent();
        case 'hinthover':
        case 'hinthoverBorder':
        case 'hinthoverInverse':
            return (
                <div className="slds-hint-parent">
                    { this.renderComponent() }
                </div>
            );
        default:
            this.renderComponent();
        }
        return null;
    }
}

ButtonIcon.propTypes = {
    /** Description for assistive screen readers if is required */
    assistiveText: PropTypes.string,
    /** Class for custom styles */
    className: PropTypes.string,
    /** If is set to true it disables the button icon */
    disabled: PropTypes.bool,
    /** The icon name. It is required. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string.isRequired,
    /** Callback function fired when the button icon is clicked */
    onClick: PropTypes.func,
    /** Callback function fired when the button icon is focused */
    onFocus: PropTypes.func,
    /** Callback function fired when the button icon is blurred */
    onBlur: PropTypes.func,
    /** The button icon size. It don't make sense to dropdown variant */
    size: PropTypes.oneOf(['medium', 'small', 'x-small', 'xx-small']),
    /** Object with the custom styles. The properties must be in camelCase
     naming convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** The title that is showed when a user hover the icon. It is necessary
     if the button icon sits alone and a sighted user might need to hover for a description */
    title: PropTypes.string,
    /** This is the type of button. All inverse variants needs a background color style. */
    variant: PropTypes.oneOf([
        'default',
        'dropdown',
        'dropdownBorder',
        'dropdownInverse',
        'hinthover',
        'hinthoverBorder',
        'hinthoverInverse',
        'border',
        'borderInverse',
    ]),
};

ButtonIcon.defaultProps = {
    disabled: false,
    size: 'medium',
    variant: 'default',
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};
