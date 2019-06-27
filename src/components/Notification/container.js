import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import NotificationsManager from './manager';

export default class NotificationsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifyList: [],
            visibleToasts: [],
        };

        this.handleNewNotification = this.handleNewNotification.bind(this);
        this.handleRemoveNotification = this.handleRemoveNotification.bind(this);
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
        const { maxVisible } = this.props;
        let { notifyList } = this.state;

        notifyList = [notification, ...notifyList];

        this.setState({
            notifyList,
            visibleToasts: notifyList.slice(0, maxVisible),
        });
    }

    handleRemoveNotification(notification) {
        const { maxVisible } = this.props;
        let { notifyList } = this.state;
        notifyList = notifyList.filter(toast => toast.key !== notification.key);

        this.setState({
            notifyList,
            visibleToasts: notifyList.slice(0, maxVisible),
        });
    }

    // handleStoreChange(notifications) {
    // const { maxVisible } = this.props;
    // this.setState({
    //     notifyList: notifications.slice(0, maxVisible),
    // });
    // }

    // eslint-disable-next-line class-methods-use-this
    handleHideNotification(notification) {
        // console.log(notification);
        // setTimeout(() => {
        NotificationsManager.remove(notification);
        // }, 400);
    }

    render() {
        const { visibleToasts } = this.state;
        const { container } = this.props;
        return createPortal(
            <div className={this.getContainerClassNames()}>
                {visibleToasts.map(notification => {
                    const notify = React.cloneElement(notification.prototype, {
                        key: notification.key,
                        onRequestClose: () => {
                            this.handleHideNotification(notification);
                        },
                    });

                    return <div className="rainbow-p-bottom_x-small">{notify}</div>;
                })}
            </div>,
            document.getElementById(container) || document.body,
        );
    }
}

NotificationsContainer.propTypes = {
    container: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    maxVisible: PropTypes.number,
    className: PropTypes.string,
};

NotificationsContainer.defaultProps = {
    container: document.body,
    className: undefined,
    maxVisible: 5,
};
