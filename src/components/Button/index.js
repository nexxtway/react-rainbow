/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends Component {
    getBtnClass() {
        const { variant, className } = this.props;

        return classnames('slds-button', {
            'slds-button--neutral': variant === 'neutral',
            'slds-button--brand': variant === 'brand',
            'slds-button--inverse': variant === 'inverse',
            'slds-button--destructive': variant === 'destructive',
            'slds-button--success': variant === 'success',
        }, className);
    }

    render() {
        const {
            label,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            style,
            children,
            title,
            ariaHaspopup,
        } = this.props;

        return (
            <button className={this.getBtnClass()}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    title={title}
                    style={style}
                    aria-haspopup={ariaHaspopup} >
                { !children ? label : children }
            </button>
        );
    }
}

Button.propTypes = {
    /** Label for the button. If a children is specified, it will be displayed.
     Otherwise, the component will expect a label which will then displayed */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    /** Indicates that the element has a popup context menu or sub-level menu. It is
     used for srceen readers */
    ariaHaspopup: PropTypes.bool,
    /** A button predefined style. It must be a string */
    variant: PropTypes.oneOf(['neutral', 'brand', 'inverse', 'destructive', 'success', 'bare']),
    /** This is what will be displayed inside the button. It has precedence over
     the label prop */
    children: PropTypes.node,
    /** Class for custom styles */
    className: PropTypes.string,
    /** Disables the button if set to true */
    disabled: PropTypes.bool,
    /** Tab index */
    tabIndex: PropTypes.number,
    /** Callback function fired when the button is clicked */
    onClick: PropTypes.func,
    /** Callback function fired when the button is focused */
    onFocus: PropTypes.func,
    /** Callback function fired when the button is blurred */
    onBlur: PropTypes.func,
    /** Object with the custom styles. The properties must be
     in camelCase naming convention (e.g. { fontFamily: ‘helvetica’ }) */
    style: PropTypes.object,
    /** This is a description that is showed when a user hover the button */
    title: PropTypes.string,
};

Button.defaultProps = {
    ariaHaspopup: false,
    variant: 'neutral',
    disabled: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};
