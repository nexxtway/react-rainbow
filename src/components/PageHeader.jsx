import React from 'react';
import Icon from './Icon.jsx';

export default class PageHeader extends React.Component {
    render () {
        return (
            <div className="slds-page-header" role="banner">
                <div className="slds-grid">
                    <div className="slds-col slds-has-flexi-truncate">
                        <div className="slds-media slds-no-space slds-grow">
                            <div className="slds-media__figure">
                                <Icon iconName={ this.props.iconName }/>
                            </div>
                            <div className="slds-media__body">
                                <p className="slds-text-title--caps slds-line-height--reset">{ this.props.pageType }</p>
                                <h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title={ this.props.pageTitle }>
                                    { this.props.pageTitle }
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="slds-col slds-no-flex slds-grid slds-align-top">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

PageHeader.propTypes = {
    iconName: React.PropTypes.string.isRequired,
    pageType: React.PropTypes.string.isRequired,
    pageTitle: React.PropTypes.string
};