import React from 'react';
import classnames from 'classnames';
import { IconSvg } from './../lightning/Icon.jsx';


let icons = { success: 'notification',  error: 'warning' };

export default class Toast extends React.Component {
    render() {
        let containerClasses = classnames('slds-notify', `slds-notify--toast slds-theme--${ this.props.type }`);
        return (
            <div className={ containerClasses } role="alert">
                <span className="slds-assistive-text">{ this.props.type }</span>
                <button className="slds-button slds-notify__close slds-button--icon-inverse"
                        onClick={ () => { this.props.onClose && this.props.onClose(this.props.id) }}
                        title="Close">
                    <IconSvg iconName="utility:close" className="slds-button__icon slds-button__icon--large"/>
                    <span className="slds-assistive-text">Close</span>
                </button>
                <div className="slds-notify__content slds-grid">
                    { this.renderToastIcon() }
                    <div className="slds-col slds-align-middle">
                        <h2 className="slds-text-heading--small">
                            { this.props.message }
                        </h2>
                        <p>{ this.props.details }</p>
                    </div>
                </div>
            </div>
        );
    }

    renderToastIcon() {
        return <IconSvg iconName={ `utility:${icons[this.props.type] || 'warning' }`} className="slds-icon slds-icon--small slds-m-right--small slds-col slds-no-flex"/>
    }
}

Toast.PropTypes = {
    onClose: React.PropTypes.func,
    message: React.PropTypes.string.isRequired,
    details: React.PropTypes.string,
    type: React.PropTypes.string,
    id: React.PropTypes.string.isRequired
};