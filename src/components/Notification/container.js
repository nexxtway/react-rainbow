import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import NotificationsManager from './manager';

export default class NotificationsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };

        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
        NotificationsManager.addChangeListener(this.handleStoreChange);
    }

    componentWillUnmount() {
        NotificationsManager.removeChangeListener(this.handleStoreChange);
    }

    getContainerClassNames() {
        const { className, container } = this.props;

        if (typeof container === 'string') {
            return classnames('rainbow-notifications-container_child', className);
        }

        return classnames('rainbow-notifications-container', className);
    }

    handleStoreChange(notifications) {
        const { maxVisible } = this.props;
        this.setState({
            notifications: notifications.slice(0, maxVisible),
        });
    }

    // eslint-disable-next-line class-methods-use-this
    handleHideNotification(notification) {
        // console.log(notification);
        NotificationsManager.remove(notification);
    }

    render() {
        const { notifications } = this.state;
        const { container } = this.props;
        return createPortal(
            <div className={this.getContainerClassNames()}>
                {notifications.map((notification, index, notifyList) => {
                    const notify = React.cloneElement(notification.prototype, {
                        onRequestClose: () => {
                            this.handleHideNotification(notification);
                        },
                    });

                    if (index < notifyList.length - 1) {
                        return <div className="rainbow-p-bottom_x-small">{notify}</div>;
                    }

                    return notify;
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
