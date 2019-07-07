import React from 'react';
import NotificationsManager from '../manager';
import Notification from '../index';

describe('NotificationManager', () => {
    it('it should fire OnNotify event', () => {
        const onNotifyFn = jest.fn();
        NotificationsManager.addOnNotifyListener(onNotifyFn);
        NotificationsManager.create(<Notification />, {});
        expect(onNotifyFn).toHaveBeenCalledTimes(1);
    });

    it('it should fire OnChange event', () => {
        const onChangeFn = jest.fn();
        NotificationsManager.addChangeListener(onChangeFn);
        NotificationsManager.create(<Notification />, {});
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });

    it('it should fire OnRemove event', () => {
        const notification = {
            key: 'rainbow-notification-1',
            prototype: <Notification />,
            timeout: 1000,
        };

        const onRemoveFn = jest.fn();
        const onNotifyFn = jest.fn();

        NotificationsManager.addOnNotifyListener(onNotifyFn);
        NotificationsManager.addOnRemoveListener(onRemoveFn);

        NotificationsManager.create(<Notification />, { timeout: 1000 });
        NotificationsManager.remove(notification);

        expect(onRemoveFn).toHaveBeenCalledWith(notification);
    });
});
