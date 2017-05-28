import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

export default class Button extends React.Component {
    render() {
        const {
            label,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            size,
            style,
            variant,
            children
        } = this.props;

        return (
            <button className={ this.getBtnClass() } 
                    disabled={ disabled }
                    tabIndex={ tabIndex }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onClick={ onClick }
                    size={ size }
                    style={ style }
                    variant={ variant }>
                { children ? children : label }
            </button>
        )
    }

    getBtnClass() {
        const { variant, size, className }  = this.props;

        return classnames('slds-button', {
            'slds-button--neutral': variant === 'neutral',
            'slds-button--brand': variant === 'brand',
            'slds-button--inverse': variant === 'inverse',
            'slds-button--destructive': variant === 'destructive',
            'slds-button--success': variant === 'success',
            'slds-button--small': size === 'small'
        }, className);
    }
}

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    variant: PropTypes.oneOf(['neutral', 'brand', 'inverse', 'destructive', 'success'
]),
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    size: PropTypes.oneOf(['medium', 'small']),
    style: PropTypes.object
};

Button.defaultProps = {
    variant: 'neutral',
    disabled: false,
    size: 'medium',
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {}
};