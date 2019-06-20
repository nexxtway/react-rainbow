import { EventEmitter } from 'events';
import { uniqueId } from '../../libs/utils';

class NotificationsManager extends EventEmitter {
    constructor() {
        super();
        this.listNotify = [];
    }

    create(notification, properties) {
        const defaultProps = {
            key: uniqueId('rainbow-notification'),
            prototype: notification,
            timeOut: 5000,
        };
        if (properties.priority) {
            this.listNotify.unshift(Object.assign(defaultProps, properties));
        } else {
            this.listNotify.push(Object.assign(defaultProps, properties));
        }
        this.emitChange();
    }

    remove(notification) {
        this.listNotify = this.listNotify.filter(n => notification.key !== n.key);
        this.emitChange();
    }

    emitChange() {
        this.emit('change', this.listNotify);
    }

    addChangeListener(callback) {
        this.addListener('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

export default new NotificationsManager();
