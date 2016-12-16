import React from 'react';
import classnames from 'classnames';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className={ this.getClasses() }>
                { this.props.children }
            </div>
        );
    }

    getClasses() {
        return classnames('slds-grid', 'slds-grid--vertical', 'slds-navigation-list--vertical', {
            'slds-navigation-list--vertical-inverse': this.props.variant === 'inverse'
        });
    }
}

Navigation.PropTypes = {
    variant: React.PropTypes.oneOf(['inverse'])
};