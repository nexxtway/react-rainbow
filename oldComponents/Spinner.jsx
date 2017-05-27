import React from 'react';
import classnames from 'classnames';

export default class Spinner extends React.Component {
    render() {
        let computedClasses = classnames('slds-spinner', {
            'slds-spinner--brand': this.props.variant === 'brand',
            'slds-spinner--inverse': this.props.variant === 'inverse',
            'slds-spinner--small' : this.props.size === 'small',
            'slds-spinner--medium' : this.props.size === 'medium',
            'slds-spinner--large' : this.props.size === 'large'
        });
        return this.props.isVisible ? (
            <div className="slds-spinner_container" onWheel={ e => e.preventDefault() }>
                <div className={ computedClasses } role="alert">
                    <span className="slds-assistive-text">Loading</span>
                    <div className="slds-spinner__dot-a"></div>
                    <div className="slds-spinner__dot-b"></div>
                </div>
            </div>
        ) : null;
    }
}

Spinner.PropTypes = {
    variant: React.PropTypes.string,
    size: React.PropTypes.string,
    isVisible: React.PropTypes.bool.isRequired
};

Spinner.defaultProps = {
    size: 'medium'
};