import React from 'react';

export default class InputError extends React.Component {
    render() {
        return this.props.isVisible ?
            <div className="slds-form-element__help">{ this.props.message }</div> : null;
    }
}

InputError.propTypes = {
    isVisible: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired
};