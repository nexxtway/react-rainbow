import React from 'react';
import classnames from 'classnames';

export class GlobalNavigation extends React.Component {
    render() {
        return (
            <div className="slds-context-bar">
                <div className="slds-context-bar__primary slds-context-bar__item--divider-right">
                    <div
                        className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
                        <div className="slds-context-bar__icon-action">
                            <a href="javascript:void(0);" className="slds-icon-waffle_container slds-context-bar__button">
                                <div className="slds-icon-waffle">
                                    <div className="slds-r1"></div>
                                    <div className="slds-r2"></div>
                                    <div className="slds-r3"></div>
                                    <div className="slds-r4"></div>
                                    <div className="slds-r5"></div>
                                    <div className="slds-r6"></div>
                                    <div className="slds-r7"></div>
                                    <div className="slds-r8"></div>
                                    <div className="slds-r9"></div>
                                </div>
                                <span className="slds-assistive-text">Open App Launcher</span>
                            </a>
                        </div>
                        <span className="slds-context-bar__label-action slds-context-bar__app-name">
                            <span className="slds-truncate">{ this.props.appName }</span>
                        </span>
                    </div>
                </div>
                <nav className="slds-context-bar__secondary" role="navigation">
                    { this.renderTabs() }
                </nav>
            </div>
        );
    }

    renderTabs() {
        let tabs = this.props.tabs.map((tab) => {
            let tabClasses = classnames('slds-context-bar__item', { 'slds-is-active' : tab.route === this.getSelectedTabId() });
            return (
                <li className={ tabClasses } onClick={ () => this.handleTabSelection(tab) } key={ tab.route }>
                    <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ tab.title} >
                        <span className="slds-truncate">{ tab.label }</span>
                    </a>
                </li>
            );
        });
        return (
            <ul className="slds-grid">
                { tabs }
            </ul>
        );
    }

    handleTabSelection (tab) {
        if (typeof this.props.onSelect === 'function') {
            return this.props.onSelect(tab);
        }
        console.warn('[GlobalNavigation] onSelect callback was not defined.');
    }

    getSelectedTabId() {
        return this.props.selectedTabId || (this.props.tabs[0] && this.props.tabs[0].route);
    }
}

GlobalNavigation.propTypes = {
    appName: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func,
    tabs: React.PropTypes.array.isRequired,
    selectedTabId: React.PropTypes.string
};


