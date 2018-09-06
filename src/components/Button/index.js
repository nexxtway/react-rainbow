import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import './styles.css';

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

    getVariantClassNames() {
        const { variant } = this.props;
        if (variant === 'base') {
            return null;
        }
        return `rainbow-button_${variant}`;
    }

    getClassNames() {
        const { className, shaded, variant } = this.props;
        const isShaded = shaded && (
            variant === 'neutral'
            || variant === 'brand'
            || variant === 'destructive'
            || variant === 'success'
        );

        return classnames('rainbow-button', this.getVariantClassNames(), {
            'rainbow-button_shaded': isShaded,
        }, className);
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
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            title,
            type,
            ariaHaspopup,
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

                <Content label={label}>
                    {children}
                </Content>
            </button>
        );
    }
}

Button.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The content of the button. Used to render icon or text elements inside the button.
    * Children takes precedence over label. */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    /** The variant changes the appearance of the button.
    * Accepted variants include base, neutral, brand, outline-brand, destructive,
    * success, inverse and border-inverse. This value defaults to base. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
    /** Specify true when the button has a shadow around it.
    * This value defaults to false.
    * Only neutral, brand, destructive and success variant can be shaded. */
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
    label: undefined,
    children: null,
    variant: 'base',
    shaded: false,
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
