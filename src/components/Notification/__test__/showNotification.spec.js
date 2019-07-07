import React from 'react';
import NotificationsManager from '../manager';
import Notification from '../index';
import showNotification from '../showNotification';

describe('showNotification', () => {
    it('it should fire OnNotify event', () => {
        const onNotifyFn = jest.fn();
        NotificationsManager.addOnNotifyListener(onNotifyFn);
        showNotification(<Notification />, {});
        expect(onNotifyFn).toHaveBeenCalledTimes(1);
    });

    it('it should fire OnChange event', () => {
        const onChangeFn = jest.fn();
        NotificationsManager.addChangeListener(onChangeFn);
        showNotification(<Notification />, {});
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
});
