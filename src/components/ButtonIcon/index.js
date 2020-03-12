import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import StyledButton from './styled/button';

/**
 * Buttons Icons provide the user with visual iconography that
 * is typically used to invoke an event or action.
 */
export default class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
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
            title,
            type,
            disabled,
            tabIndex,
            onClick,
            onFocus,
            onBlur,
            assistiveText,
            ariaHaspopup,
            ariaPressed,
            style,
            id,
            ariaControls,
            ariaExpanded,
            icon,
            onKeyDown,
            form,
            onMouseDown,
            className,
            shaded,
            variant,
            size,
        } = this.props;

        return (
            <StyledButton
                onMouseDown={onMouseDown}
                data-id="button-icon-element"
                id={id}
                className={className}
                shaded={shaded}
                variant={variant}
                size={size}
                style={style}
                disabled={disabled}
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                title={title}
                type={type}
                aria-haspopup={ariaHaspopup}
                aria-controls={ariaControls}
                aria-expanded={ariaExpanded}
                aria-pressed={ariaPressed}
                onKeyDown={onKeyDown}
                form={form}
                ref={this.buttonRef}
            >
                {icon}
                <AssistiveText text={assistiveText} />
            </StyledButton>
        );
    }
}

ButtonIcon.propTypes = {
    /** The icon to show if it is passed.
     * It must be a svg icon or a font icon. It is a required value. */
    icon: PropTypes.node,
    /** The variant changes the appearance of the button. Accepted variants include
     * base, brand, success, destructive, neutral, outline-brand, border, border-filled, inverse and border-inverse.
     * This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
    ]),
    /** The size of the buttonIcon. For the base variant, options include x-small, small, medium,
     * and large. For non-base variants, options include xx-small, x-small, small, and medium.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only border-filled, brand, and success variant can be shaded. */
    shaded: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies the type of button. Valid values are button, reset, and submit.
     * This value defaults to button. */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action that will be run when the button is clicked. */
    onClick: PropTypes.func,
    /** The action that will be run when the user presses the mouse button. */
    onMouseDown: PropTypes.func,
    /** The action triggered when a keyboard key is pressed. */
    onKeyDown: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A space-separated list of element IDs that
     * this button controls the contents or presence of. */
    ariaControls: PropTypes.string,
    /** Indicates whether an element the button controls is expanded or collapsed.
     * Valid values are 'true' or 'false'. */
    ariaExpanded: PropTypes.bool,
    /** Indicates that the element has a popup context menu or sub-level menu. */
    ariaHaspopup: PropTypes.bool,
    /** Indicates that the element has been pressed. */
    ariaPressed: PropTypes.bool,
    /** It must be the id attribute of a form element that the button is associated with. */
    form: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

ButtonIcon.defaultProps = {
    icon: null,
    variant: 'base',
    size: 'medium',
    shaded: false,
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onMouseDown: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {},
    assistiveText: undefined,
    ariaHaspopup: undefined,
    className: undefined,
    ariaPressed: undefined,
    style: undefined,
    id: undefined,
    ariaControls: undefined,
    ariaExpanded: undefined,
    form: undefined,
};
