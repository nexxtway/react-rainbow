import React from 'react';

export default class NavigationSession extends React.Component {
    render() {
        return (
            <span>
                <h2 className="slds-text-title--caps slds-p-around--medium">{ this.props.label }</h2>
                <ul>{ this.props.children }</ul>
            </span>
        );
    }
}

NavigationSession.PropTypes = {
    label: React.PropTypes.string.isRequired
};