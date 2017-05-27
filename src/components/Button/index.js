import React, { PropTypes } from 'react';
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
            children
        } = this.props;

        return (
            <button className={ this.getBtnClass() } 
                    disabled={ disabled }
                    tabIndex={ tabIndex }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onClick={ onClick }>
                { children && children.length > 0 ? children : label }
            </button>
        )
    }

    getBtnClass() {
        const { variant, className }  = this.props;

        return classnames('slds-button', {
            'slds-button--neutral': variant === 'neutral',
            'slds-button--brand': variant === 'brand',
            'slds-button--inverse': variant === 'inverse',
            'slds-button--destructive': variant === 'destructive'
        }, className);
    }
}

Button.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

Button.defaultProps = {
    variant: 'neutral',
    disabled: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {}
};