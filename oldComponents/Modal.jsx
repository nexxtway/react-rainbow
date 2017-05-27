import React from 'react';
import { IconSvg } from './Icon.jsx';

export default class Modal extends React.Component  {
    render() {
        return this.props.isOpen ? this.renderModal() : null;
    }

    renderModal() {
        return (
            <div>
                <div role="dialog" tabIndex="-1" aria-labelledby="header43" className="slds-modal slds-fade-in-open" onWheel={ e => e.preventDefault() }>
                    <div className="slds-modal__container" style={{ position: 'relative' }} onWheel={ (e) => e.stopPropagation() }>
                        <div className="slds-modal__header">
                            <button className="slds-button slds-modal__close slds-button--icon-inverse" onClick={ () => this.props.closeCallback() }>
                                <IconSvg iconName="utility:close" className="slds-button__icon slds-button__icon--large"/>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                            <h2 id="header43" className="slds-text-heading--medium">{ this.props.title }</h2>
                        </div>
                        <div className="slds-modal__content slds-p-around--medium">
                            {/* Modal content */}
                            { this.props.children }
                        </div>
                        { this.props.footer || null }
                    </div>
                </div>
                <div className="slds-backdrop slds-backdrop--open"></div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    footer: React.PropTypes.object,
    closeCallback: React.PropTypes.func.isRequired
};