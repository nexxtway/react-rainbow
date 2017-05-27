import React from 'react';
import classnames from  'classnames';
import { IconSvg } from './Icon.jsx';

export default class MenuItem extends React.Component {
    render() {
        return this.props.variant === 'header'
            ? this.renderHeader()
            : this.renderItem();
    }

    renderItem() {
        return (
            <li className={ this.getItemClass() } role="presentation" onClick={ e => this.props.onClick &&  this.props.onClick(e) }>
                <a href="javascript:void(0);" role="menuitemcheckbox" aria-checked="true" tabIndex="0">
                    <span className="slds-truncate">
                        {
                            this.props.variant === 'selectable'
                                ? <IconSvg iconName="utility:check" className="slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small"/>
                                : null
                        }
                        { this.props.children }
                    </span>
                </a>
            </li>
        )
    }

    renderHeader() {
        return (
            <li className="slds-dropdown__header" role="separator">
                <span className="slds-text-title--caps">{ this.props.children }</span>
            </li>
        )
    }

    getItemClass() {
        return classnames('slds-dropdown__item', {
            'slds-is-selected': this.props.variant === 'selectable' && this.props.isSelected === true
        });
    }
}


MenuItem.PropTypes = {
    variant: React.PropTypes.oneOf(['selectable', 'header']),
    isSelected: React.PropTypes.bool
};

MenuItem.defaultProps = {
    isSelected: false
};