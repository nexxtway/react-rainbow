import React from 'react';
import { mount } from 'enzyme';
import Notification from './../notification';

describe('<VerticalItemIcon/>', () => {
    it('should not render the notification when it is not passed', () => {
        const component = mount(
            <Notification />,
        );
        expect(component.find('span').exists()).toBe(false);
    });
    it('should render the Notification when it is passed', () => {
        const component = mount(
            <Notification notification="2" />,
        );
        expect(component.find('span').exists()).toBe(true);
        expect(component.text()).toBe('2');
    });
    it('should pass the right className to the span element when the notification is passed', () => {
        const component = mount(
            <Notification notification="3" />,
        );
        expect(component.find('span').prop('className')).toBe('slds-col_bump-left');
    });
});
