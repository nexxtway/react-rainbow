import React from 'react';
import classnames from 'classnames';

export default class Badge extends React.Component {
    render() {
        return (
            <span className={ this.getBadgeClass() } style={ this.props.style }>
                { this.props.label }
            </span>
        )
    }

    getBadgeClass() {
        return classnames('slds-badge', this.props.className);
    }
}

Badge.PropTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};