/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function AssistiveText({ text }) {
    if (text) {
        return <span className="slds-assistive-text">{text}</span>;
    }
    return null;
}

export default class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    getSizeClassName() {
        const { size } = this.props;
        if (size && size !== 'medium') {
            return `slds-button_icon-${size}`;
        }
        return null;
    }

    getVariantClassName() {
        const { variant } = this.props;
        if (variant && variant !== 'base') {
            return `slds-button_icon-${variant}`;
        }
        return null;
    }

    getClassNames() {
        const { className } = this.props;
        return classnames('slds-button', 'slds-button_icon', this.getVariantClassName(), this.getSizeClassName(), className);
    }

    click() {
        this.button.click();
    }

    focus() {
        this.button.focus();
    }

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
            icon,
            assistiveText,
        } = this.props;

        return (
            <button
                data-id="button-icon-element"
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
                {icon}
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
    /** The icon to show. */
    icon: PropTypes.node,
    /** Description for assistive sreen readers */
    assistiveText: PropTypes.string,
    /** The button icon size. */
    size: PropTypes.oneOf(['medium', 'small', 'x-small', 'xx-small']),
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
    icon: null,
    assistiveText: null,
    size: 'medium',
};
