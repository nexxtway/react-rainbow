import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icons';

describe('<NotificationIcon/>', () => {
    it('should have the right class names', () => {
        const component = mount(
            <Icon />,
        );
        expect(component.find('div').prop('className')).toBe('rainbow-notification_icon-container');
    });
    it('should have the right class names when icon variants are passed', () => {
        const variants = [
            'info',
            'error',
            'warning',
            'success',
        ];
        variants.forEach((variant) => {
            const component = mount(
                <Icon icon={variant} />,
            );
            const iconClassNameProp = component.find('div').prop('className');
            expect(iconClassNameProp).toBe(`rainbow-notification_icon-container rainbow-notification_icon--${variant}`);
        });
    });
    it('should render the "svg" passed as icon', () => {
        const component = mount(
            <Icon icon={<svg />} />,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
    it('should render the "InfoIcon" when the string "info" is passed as icon', () => {
        const component = mount(
            <Icon icon="info" />,
        );
        expect(component.find('InfoIcon').exists()).toBe(true);
    }); it('should render the "ErrorIcon" when the string "error" is passed as icon', () => {
        const component = mount(
            <Icon icon="error" />,
        );
        expect(component.find('ErrorIcon').exists()).toBe(true);
    }); it('should render the "WarningIcon" when the string "warning" is passed as icon', () => {
        const component = mount(
            <Icon icon="warning" />,
        );
        expect(component.find('WarningIcon').exists()).toBe(true);
    }); it('should render the "SuccessIcon" when the string "success" is passed as icon', () => {
        const component = mount(
            <Icon icon="success" />,
        );
        expect(component.find('SuccessIcon').exists()).toBe(true);
    });
});
