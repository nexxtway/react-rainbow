import React from 'react';

export default class ModalFooter extends React.Component {
    render() {
        return (
            <div className="slds-modal__footer">
                { this.props.children }
            </div>
        );
    }
}