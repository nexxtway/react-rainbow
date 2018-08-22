import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import iconNameUtilityPropType from './../../propTypes/iconNameUtilityPropType';
import IconSvg from '../IconSvg';
import AssistiveText from './../AssistiveText';

/**
 * Buttons Icons provide the user with visual iconography that
 * is typically used to invoke an event or action.
 */
export default class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    getIconSizeClassName() {
        const { size, variant } = this.props;
        if (variant === 'base') {
            return {
                'slds-button__icon_large': size === 'large',
                'slds-button__icon_small': size === 'small',
                'slds-button__icon_x-small': size === 'x-small' || size === 'xx-small',
            };
        }
        return null;
    }

    getIconClassNames() {
        return classnames('slds-button__icon', this.getIconSizeClassName());
    }

    getButtonSizeClassName() {
        const { size, variant } = this.props;
        if (variant === 'base') {
            return null;
        }
        return {
            'slds-button_icon-small': size === 'small',
            'slds-button_icon-x-small': size === 'x-small',
            'slds-button_icon-xx-small': size === 'xx-small',
        };
    }

    getVariantClassName() {
        const { variant } = this.props;
        if (variant === 'base') {
            return null;
        }
        return `slds-button_icon-${variant}`;
    }

    getButtonClassNames() {
        const { className } = this.props;
        return classnames('slds-align_absolute-center', 'slds-button', 'slds-button_icon', this.getVariantClassName(), this.getButtonSizeClassName(), className);
    }

    /**
    * Sets focus on the element.
    * @public
    */
    focus() {
        this.button.focus();
    }

    /**
    * Sets click on the element.
    * @public
    */
    click() {
        this.button.click();
    }

    /**
    * Sets blur on the element.
    * @public
    */
    blur() {
        this.button.blur();
    }

    render() {
        const {
            style,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            title,
            type,
            ariaHaspopup,
            iconName,
            assistiveText,
        } = this.props;

        return (
            <button
                data-id="button-icon-element"
                className={this.getButtonClassNames()}
                style={style}
                disabled={disabled}
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                title={title}
                type={type}
                aria-haspopup={ariaHaspopup}
                ref={(ref) => { this.button = ref; }} >
                <IconSvg iconName={iconName} className={this.getIconClassNames()} />
                <AssistiveText text={assistiveText} />
            </button>
        );
    }
}

ButtonIcon.propTypes = {
    /** The variant changes the appearance of buttonIcon. Accepted variants include base,
    *  brand, border, border-filled, border-inverse, inverse and container.
    * This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'brand',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
        'container',
    ]),
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNameUtilityPropType.isRequired,
    /** The size of the buttonIcon. For the base variant, options include x-small, small, medium,
    * and large. For non-base variants, options include xx-small, x-small, small, and medium.
    * This value defaults to medium. */
    size: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies the type of button. Valid values are button, reset, and submit.
    * This value defaults to button. */
    type: PropTypes.oneOf([
        'button', 'submit', 'reset',
    ]),
    /** Specifies whether this button should be displayed in a disabled state.
    * Disabled buttons can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.number,
    /** The action that will be run when the button is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A description for assistive sreen readers */
    assistiveText: PropTypes.string,
    /** Indicates that the element has a popup context menu or sub-level menu. */
    ariaHaspopup: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ButtonIcon.defaultProps = {
    variant: 'base',
    size: 'medium',
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    assistiveText: undefined,
    ariaHaspopup: false,
    className: undefined,
    style: {},
};
