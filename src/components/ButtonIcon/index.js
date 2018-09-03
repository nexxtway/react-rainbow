import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import './styles.css';

/**
 * Buttons Icons provide the user with visual iconography that
 * is typically used to invoke an event or action.
 */
export default class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.click = this.click.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    getVariantClassName() {
        const { variant } = this.props;
        if (variant === 'base') {
            return null;
        }
        return `rainbow-button-icon_${variant}`;
    }

    getButtonClassNames() {
        const { className, shaded, variant, size } = this.props;
        const isShaded = shaded && (
            variant === 'border'
            || variant === 'border-filled'
            || variant === 'brand'
            || variant === 'success'
        );

        return classnames('rainbow-button-icon', {
            'rainbow-button-icon_shaded': isShaded,
        }, this.getVariantClassName(), `rainbow-button-icon_${size}`, className);
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
            icon,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            title,
            type,
            ariaHaspopup,
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
                ref={this.buttonRef} >

                {icon}
                <AssistiveText text={assistiveText} />
            </button>
        );
    }
}

ButtonIcon.propTypes = {
    /** The icon component to show. It must be a svg icon and is a required value. */
    icon: PropTypes.node.isRequired,
    /** The variant changes the appearance of buttonIcon. Accepted variants include base,
    *  brand, border, border-filled, border-inverse, inverse and container.
    * This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'brand',
        'success',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
    ]),
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
    /** Specify true when the button has a shadow around it.
    * This value defaults to false.
    * Only border, border-filled, brand, and success variant can be shaded. */
    shaded: PropTypes.bool,
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
    /** A description for assistive sreen readers. */
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
    shaded: false,
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
    style: undefined,
};
