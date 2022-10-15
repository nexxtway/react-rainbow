import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './content';
import StyledButton from './styled/button';

/**
 * Buttons are clickable items used to perform an action.
 */
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    /**
     * Returns the ref of the HTML button element.
     * @public
     */
    get htmlElementRef() {
        return this.buttonRef;
    }

    isDisabled() {
        const { disabled, isLoading } = this.props;
        return disabled || isLoading;
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
            children,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onMouseEnter,
            onMouseLeave,
            title,
            type,
            ariaHaspopup,
            id,
            isLoading,
            variant,
            shaded,
            ariaPressed,
            ariaControls,
            ariaExpanded,
            onKeyDown,
            form,
            className,
            size,
        } = this.props;

        return (
            <StyledButton
                data-id="button-element"
                id={id}
                className={className}
                style={style}
                variant={variant}
                isLoading={isLoading}
                shaded={shaded}
                disabled={this.isDisabled()}
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                title={title}
                type={type}
                aria-haspopup={ariaHaspopup}
                aria-controls={ariaControls}
                aria-expanded={ariaExpanded}
                aria-pressed={ariaPressed}
                onKeyDown={onKeyDown}
                form={form}
                ref={this.buttonRef}
                size={size}
            >
                <Content variant={variant} label={label} isLoading={isLoading} size={size}>
                    {children}
                </Content>
            </StyledButton>
        );
    }
}

Button.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The content of the button, used to render icon or text elements inside the button.
     * Children take precedence over label. */
    children: PropTypes.node,
    /** The variant changes the appearance of the button. Accepted variants include
     * base, brand, success, destructive, neutral, outline-brand, border, border-filled, inverse and border-inverse. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'border',
        'border-filled',
        'inverse',
        'border-inverse',
    ]),
    /** Specifies true when the button has a shadow around it.
     * Only neutral, brand, destructive and success variant can be shaded. */
    shaded: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies the type of button. Valid values are button, reset, and submit. */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when a keyboard key is pressed. */
    onKeyDown: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when moving the mouse pointer into the button. */
    onMouseEnter: PropTypes.func,
    /** The action triggered when moving the mouse pointer out of the button. */
    onMouseLeave: PropTypes.func,
    /** Indicates that the element has a popup context menu or sub-level menu. */
    ariaHaspopup: PropTypes.bool,
    /** A space-separated list of element IDs that
     * this button controls the contents or presence of. */
    ariaControls: PropTypes.string,
    /** Indicates whether an element the button controls is expanded or collapsed.
     * Valid values are 'true' or 'false'. */
    ariaExpanded: PropTypes.bool,
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
    /** If it is set to true, then a loading symbol is displayed. */
    isLoading: PropTypes.bool,
    /** The size of the button. Valid values are small, medium and large. This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    label: undefined,
    children: null,
    variant: 'neutral',
    shaded: false,
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    ariaHaspopup: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    isLoading: false,
    ariaPressed: undefined,
    ariaControls: undefined,
    ariaExpanded: undefined,
    form: undefined,
    size: 'medium',
};
