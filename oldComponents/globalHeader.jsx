import React from 'react';

export default class GlobalHeader extends React.Component {
    render() {
        return (
            <header className="slds-global-header_container" style={{ zIndex: 99 }}>
                <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">
                    Skip to Navigation
                </a>
                <div className="slds-global-header slds-grid slds-grid--align-spread">
                    <div className="slds-global-header__item">
                        <div className="slds-global-header__logo">
                            { this.props.logo }
                        </div>
                    </div>
                    <div className="slds-global-header__item slds-global-header__item--search">
                        { this.props.search }
                    </div>
                    <ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center">
                        { this.props.children }
                    </ul>
                </div>
            </header>
        );
    }
}
