import NotificationsManager from './manager';

export default function showNotification(notificationTpl, params) {
    NotificationsManager.create(notificationTpl, params);
}
