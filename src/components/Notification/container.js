import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import NotificationsManager from './manager';
import TimedToast from './timedtoast';

export default class NotificationsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toastsList: [],
        };

        this.handleNewNotification = this.handleNewNotification.bind(this);
        this.handleRemoveNotification = this.handleRemoveNotification.bind(this);
        this.handleHideNotification = this.handleHideNotification.bind(this);
        // this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
        NotificationsManager.addOnNotifyListener(this.handleNewNotification);
        NotificationsManager.addOnRemoveListener(this.handleRemoveNotification);
        // NotificationsManager.addChangeListener(this.handleStoreChange);
    }

    componentWillUnmount() {
        NotificationsManager.removeOnNotifyListener(this.handleNewNotification);
        NotificationsManager.removeOnRemoveListener(this.handleRemoveNotification);
        // NotificationsManager.removeChangeListener(this.handleStoreChange);
    }

    getContainerClassNames() {
        const { className, container } = this.props;

        if (typeof container === 'string') {
            return classnames('rainbow-notifications-container_child', className);
        }

        return classnames('rainbow-notifications-container', className);
    }

    handleNewNotification(notification) {
        let { toastsList } = this.state;

        if (notification.priority) {
            toastsList = [notification, ...toastsList];
        } else {
            toastsList = [...toastsList, notification];
        }

        this.setState({
            toastsList,
        });

        this.showToast(notification);
    }

    handleRemoveNotification(notification) {
        let { toastsList } = this.state;
        toastsList = toastsList.filter(toast => toast.key !== notification.key);

        this.setState({
            toastsList,
        });
    }

    handleHideNotification(notification) {
        this.removeToast(notification);
    }

    // eslint-disable-next-line class-methods-use-this
    removeToast(toast) {
        NotificationsManager.remove(toast);
    }

    render() {
        const { toastsList } = this.state;
        const { container } = this.props;
        return createPortal(
            <div className={this.getContainerClassNames()}>
                {toastsList.map(notification => (
                    <TimedToast
                        key={notification.key}
                        protoType={notification.prototype}
                        timeout={notification.timeout}
                        onRemove={() => this.handleHideNotification(notification)}
                    />
                ))}
            </div>,
            document.getElementById(container) || document.body,
        );
    }
}

NotificationsContainer.propTypes = {
    container: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    // maxVisible: PropTypes.number,
    className: PropTypes.string,
};

NotificationsContainer.defaultProps = {
    container: document.body,
    className: undefined,
    // maxVisible: 5,
};
