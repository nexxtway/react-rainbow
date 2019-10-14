import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icons';

describe('<NotificationIcon/>', () => {
    it('should render the "svg" passed as icon', () => {
        const component = mount(<Icon icon={<svg />} />);
        expect(component.find('svg').exists()).toBe(true);
    });
    it('should render the "InfoIcon" when the string "info" is passed as icon', () => {
        const component = mount(<Icon icon="info" />);
        expect(component.find('InfoIcon').exists()).toBe(true);
    });
    it('should render the "ErrorIcon" when the string "error" is passed as icon', () => {
        const component = mount(<Icon icon="error" />);
        expect(component.find('ErrorIcon').exists()).toBe(true);
    });
    it('should render the "WarningIcon" when the string "warning" is passed as icon', () => {
        const component = mount(<Icon icon="warning" />);
        expect(component.find('WarningIcon').exists()).toBe(true);
    });
    it('should render the "SuccessIcon" when the string "success" is passed as icon', () => {
        const component = mount(<Icon icon="success" />);
        expect(component.find('SuccessIcon').exists()).toBe(true);
    });

    it('should not render the "icon" when a wrong string is passed as icon', () => {
        const component = mount(<Icon icon="wrong-string" />);
        expect(component.find('div').exists()).toBe(false);
    });
});
