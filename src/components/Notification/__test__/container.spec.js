import React from 'react';
import { mount } from 'enzyme';
import NotificationsContainer from '../container';
import showNotification from '../showNotification';
import Notification from '../index';

describe('<NotificationsContainer/>', () => {
    let component;

    const state = () => component.state();
    const instance = () => component.instance();

    beforeEach(() => {
        component = mount(<NotificationsContainer />);
    });

    afterEach(() => {
        component.unmount();
    });

    it('should have the right class names', () => {
        expect(component.find('div').prop('className')).toBe('rainbow-notifications-container');
    });

    it('should have two active notifications', () => {
        showNotification(<Notification />, {});
        showNotification(<Notification />, {});
        showNotification(<Notification />, {});

        const toast = state().toastsList.find(notif => notif.key === 'rainbow-notification-1');
        instance().removeToast(toast);

        expect(state().toastsList.length).toEqual(2);
    });
});
