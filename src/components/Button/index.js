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
            'slds-button--success': variant === 'success'
        }, className);
    }
}

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    variant: PropTypes.oneOf(['neutral', 'brand', 'inverse', 'destructive', 'success'
]),
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    style: PropTypes.object
};

Button.defaultProps = {
    variant: 'neutral',
    disabled: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {}
};