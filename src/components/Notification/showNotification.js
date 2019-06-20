import NotificationsManager from './manager';

// const manager = new NotificationManager();
// NotificationsManager.addChangeListener(notifyList => {
//     console.log(notifyList.length);
// });

export default function showNotification(notificationTpl, params) {
    // const { container, ...rest } = params;

    // params.container.appendChild(notificationTpl);

    NotificationsManager.create(notificationTpl, params);
    // console.log(JSON.stringify(manager));
}
