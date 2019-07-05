import { EventEmitter } from 'events';
import { uniqueId } from '../../libs/utils';

class NotificationsManager extends EventEmitter {
    constructor() {
        super();
        this.notifications = [];
    }

    create(notification, properties) {
        const defaultProps = {
            key: uniqueId('rainbow-notification'),
            prototype: notification,
            timeout: 5000,
        };

        const notice = Object.assign(defaultProps, properties);

        if (properties.priority) {
            this.notifications.unshift(notice);
        } else {
            this.notifications.push(notice);
        }

        this.emitOnNotify(notice);
        this.emitChange();
    }

    remove(notification) {
        this.notifications = this.notifications.filter(n => notification.key !== n.key);
        this.emitOnRemove(notification);
        this.emitChange();
    }

    emitChange() {
        this.emit('change', this.notifications);
    }

    addChangeListener(callback) {
        this.addListener('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    emitOnNotify(notification) {
        this.emit('toastCreated', notification);
    }

    addOnNotifyListener(callback) {
        this.addListener('toastCreated', callback);
    }

    removeOnNotifyListener(callback) {
        this.removeListener('toastCreated', callback);
    }

    emitOnRemove(notification) {
        this.emit('toastRemoved', notification);
    }

    addOnRemoveListener(callback) {
        this.addListener('toastRemoved', callback);
    }

    removeOnRemoveListener(callback) {
        this.removeListener('toastRemoved', callback);
    }
}

export default new NotificationsManager();
