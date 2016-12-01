import React from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {
    render() {
        return (
            <button className={ this.getBtnClass() } 
                    disabled={ this.props.disabled }
                    tabIndex={ this.props.tabIndex }
                    onFocus={ e => this.props.onFocus && this.props.onFocus(e) }
                    onBlur={ e => this.props.onBlur && this.props.onBlur(e) }
                    onClick={ e => this.props.onClick && this.props.onClick(e) }>
                { this.props.children }
            </button>
        )
    }

    getBtnClass() {
        let variant = this.props.variant;
        return classnames('slds-button', {
            'slds-button--neutral': variant === 'neutral',
            'slds-button--brand': variant === 'brand',
            'slds-button--inverse': variant === 'inverse',
            'slds-button--destructive': variant === 'destructive'
        }, this.props.className);
    }
}

Button.PropTypes = {
    variant: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    tabIndex: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
};

Button.defaultProps = {
    variant: 'neutral',
    disabled: false
};