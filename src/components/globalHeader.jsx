import React from 'react';
import { UserDropdown } from './../lightning/UserDropdown.jsx';

export class GlobalHeader extends React.Component {
    render() {
        return (
            <header className="slds-global-header_container" style={{ zIndex: 99 }}>
                <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">Skip to
                    Navigation</a><a href="javascript:void(0);"
                                     className="slds-assistive-text slds-assistive-text--focus">Skip to Main Content</a>
                <div className="slds-global-header slds-grid slds-grid--align-spread">
                    <div className="slds-global-header__item"></div>
                    <ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center">
                        <li className="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small">
                            <UserDropdown user={ this.props.user}/>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}