import React from 'react';
import Toast from './Toast.jsx';

export default class ToastManager extends React.Component {
    render() {
        return (
            <div className="slds-notify_container">
                { this.renderToasts() }
            </div>
        );
    }

    renderToasts() {
        return this.props.toasts.map((toast, index) => {
            return <Toast {...toast} key={ index } onClose={ (props) => this.onCloseToast(props) }/>
        });
    }

    onCloseToast(props) {
        this.props.onCloseToast && this.props.onCloseToast(props);
    }
}

ToastManager.PropTypes = {
    onCloseToast: React.PropTypes.func,
    toasts: React.PropTypes.object
}

