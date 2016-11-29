import React from 'react';
import classNames from 'classnames';
import { outsideClick } from './libs/outsideClick';

export class UserDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.outsideClick = outsideClick();
        this.state = { isOpen: false };
    }

    getContainerClassNames () {
        return classNames('slds-dropdown-trigger', 'slds-dropdown-trigger--click', { 'slds-is-open' : this.state.isOpen });
    }

    render() {
        return (
            <div ref={(root) => this.rootElement = root } className={ this.getContainerClassNames() } onClick={ () => this.open() }>
                {/* dropdown trigger */}
                <button className="slds-button" title="person name" aria-haspopup="true">
                    <span className="slds-avatar slds-avatar--circle slds-avatar--medium">
                        <img src="/images/avatar1.jpg" alt="person name"/>
                    </span>
                </button>
                <div className="slds-dropdown slds-dropdown--right slds-nubbin--top-right slds-dropdown--medium" style={{ top: 40, right: -8 }}>
                    {/* user data */}
                    <div className="slds-tile slds-media" style={{ padding : 15 }}>
                        <div className="slds-media__body">
                            <h3 className="slds-truncate" title={ this.props.user && this.props.user.email }>
                                <a href="javascript:void(0);">{ this.props.user && this.props.user.email }</a>
                            </h3>
                            <div className="slds-tile__detail slds-text-body--small">
                                <ul className="slds-list--horizontal slds-has-dividers--right">
                                    <li className="slds-item">{ this.props.user && this.props.user.role }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Logout */}
                    <ul className="slds-dropdown__list" role="menu">
                        <li className="slds-has-divider--top-space" role="separator"></li>
                        <li className="slds-dropdown__item" role="presentation" onClick={ () => this.logout()  }>
                            <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                                <span className="slds-truncate">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    open() {
        this.setState({ isOpen : true });
        this.outsideClick.bindRootCloseHandlers(this.rootElement, this.close.bind(this));
    }

    close() {
        this.setState({ isOpen : false });
        this.outsideClick.unbindRootCloseHandlers();
    }

    logout() {
        location.href = '/logout';
    }
}

function handleClick (e) {
        
}

UserDropdown.PropTypes = {
};