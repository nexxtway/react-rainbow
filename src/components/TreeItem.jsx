import React from 'react';
import classnames from 'classnames';
import { IconSvg } from './Icon.jsx';

export default class TreeItem extends React.Component {
    render() {
        let iconName = this.props.isExpanded ? 'chevrondown' : 'chevronright';
        let toggleBtnClass = classnames('slds-button', 'slds-button--icon', 'slds-m-right--x-small', {
                'slds-is-disabled': !this.props.isToggle
            });

        return (
            <li role="treeitem" aria-level={ this.props.level }>
                <div className="slds-tree__item" onClick={ e => this.props.onClick && this.props.onClick(e) }>
                    <button className={ toggleBtnClass } title="Toggle" disabled={ !this.props.isToggle }>
                        <IconSvg iconName={ `utility:${iconName}` } className="slds-button__icon slds-button__icon--small"/>
                        <span className="slds-assistive-text">Toggle</span>
                    </button>
                    <a href="javascript:void(0);"
                       tabIndex="-1"
                       role="presentation"
                       className="slds-truncate"
                       title={ this.props.label }>
                        { this.props.label }
                    </a>
                </div>
                <ul className={ this.props.isExpanded ? 'slds-is-expanded' : 'slds-is-collapsed'} role="group" aria-labelledby="tree0-node1__label">
                    { this.props.children }
                </ul>
            </li>
        );
    }
}

TreeItem.PropTypes = {
    label: React.PropTypes.object.isRequired,
    level: React.PropTypes.number.isRequired,
    isToggle: React.PropTypes.bool,
    isExpanded: React.PropTypes.bool
};

TreeItem.defaultValues = {
    isToggle: false,
    isExpanded: false
}