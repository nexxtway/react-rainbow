import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LeftIcon from './leftIcon';
import RightIcon from './rightIcon';

/**
* Buttons are clickable items used to perform an action.
*/
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    getClassNames() {
        const { className, variant } = this.props;
        return classnames('slds-button', `slds-button_${variant}`, className);
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
                ref={(ref) => { this.button = ref; }} >

                <LeftIcon iconName={iconName} position={iconPosition} />
                {label}
                <RightIcon iconName={iconName} position={iconPosition} />
            </button>
        );
    }
}

Button.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Label for the button. It is required. */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    /** Indicates that the element has a popup context menu or sub-level menu. It is
     used for srceen readers. */
    ariaHaspopup: PropTypes.bool,
    /** The variant for the button with predefined styles. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
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
    iconName: PropTypes.string,
     /** The position of the icon if it is passed. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
};

Button.defaultProps = {
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
    iconName: '',
    iconPosition: 'left',
};
