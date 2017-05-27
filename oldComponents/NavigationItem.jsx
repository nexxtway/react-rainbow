import React from 'react';

export default class NavigationItem extends React.Component {
    render() {
        return (
            <li className={ this.props.isActive ? 'slds-is-active' : null } onClick={ e => this.onClick(e) }>
                <a href="javascript:void(0);" className="slds-navigation-list--vertical__action slds-text-link--reset">
                    { this.props.label }
                </a>
            </li>
        );
    }

    onClick(e) {
        this.props.onClick && this.props.onClick(this.props);
    }
}

NavigationItem.PropTypes = {
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    isActive: React.PropTypes.bool,
    id: React.PropTypes.string
};

NavigationItem.defaultProps = {
    isActive: false    
};