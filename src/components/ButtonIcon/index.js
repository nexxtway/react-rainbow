import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
        return classnames('slds-button', 'slds-button_icon', this.getVariantClassName(), this.getButtonSizeClassName(), className);
    }

    /**
    * Sets focus on the element.
    *
    * @public
    */
    focus() {
        this.button.focus();
    }

    /**
    * Sets click on the element.
    *
    * @public
    */
    click() {
        this.button.click();
    }

    /**
    * Sets blur on the element.
    *
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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Indicates that the element has a popup context menu or sub-level menu. It is
     used for srceen readers. */
    ariaHaspopup: PropTypes.bool,
    /** The variant for the button with predefined styles. */
    variant: PropTypes.oneOf([
        'base',
        'border-filled',
        'border-inverse',
        'border',
        'brand',
        'inverse',
        'container',
    ]),
    /** Disables the button if set to true. */
    disabled: PropTypes.bool,
    /** Tab index */
    tabIndex: PropTypes.number,
    /** Event fired when the button is clicked. */
    onClick: PropTypes.func,
    /** Event fired when the button is focused. */
    onFocus: PropTypes.func,
    /** Event fired when the button is blurred. */
    onBlur: PropTypes.func,
    /** This is a description that is showed when a user hover the button. */
    title: PropTypes.string,
    /** The type of the button. */
    type: PropTypes.oneOf([
        'button', 'submit', 'reset',
    ]),
    /** The name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. */
    iconName: PropTypes.string.isRequired,
    /** Description for assistive sreen readers */
    assistiveText: PropTypes.string,
    /** The button icon size. */
    size: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
};

ButtonIcon.defaultProps = {
    className: undefined,
    style: {},
    ariaHaspopup: false,
    variant: 'base',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    title: undefined,
    type: 'button',
    assistiveText: undefined,
    size: 'medium',
};
