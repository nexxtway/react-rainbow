import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNameUtilityPropType from './../../propTypes/iconNameUtilityPropType';
import LeftIcon from './leftIcon';
import RightIcon from './rightIcon';

/**
* Buttons are clickable items used to perform an action.
*/
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.click = this.click.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    getClassNames() {
        const { className, variant } = this.props;
        return classnames('slds-align_absolute-center', 'slds-button', `slds-button_${variant}`, className);
    }

    /**
    * Sets focus on the element.
    * @public
    */
    focus() {
        this.buttonRef.current.focus();
    }

    /**
    * Sets click on the element.
    * @public
    */
    click() {
        this.buttonRef.current.click();
    }

    /**
    * Sets blur on the element.
    * @public
    */
    blur() {
        this.buttonRef.current.blur();
    }

    render() {
        const {
            style,
            label,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            title,
            type,
            ariaHaspopup,
            iconName,
            iconPosition,
        } = this.props;

        return (
            <button
                data-id="button-element"
                className={this.getClassNames()}
                style={style}
                disabled={disabled}
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                title={title}
                type={type}
                aria-haspopup={ariaHaspopup}
                ref={this.buttonRef} >

                <LeftIcon iconName={iconName} position={iconPosition} />
                {label}
                <RightIcon iconName={iconName} position={iconPosition} />
            </button>
        );
    }
}

Button.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node]).isRequired,
    /** The variant changes the appearance of the button.
    * Accepted variants include base, neutral, brand, outline-brand, destructive,
    * success and inverse. This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
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
    /** The action triggered when the button is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Indicates that the element has a popup context menu or sub-level menu. */
    ariaHaspopup: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Button.defaultProps = {
    variant: 'base',
    iconName: '',
    iconPosition: 'left',
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    ariaHaspopup: false,
    className: undefined,
    style: undefined,
};
