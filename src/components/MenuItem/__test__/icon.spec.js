import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<MenuItemIcon/>', () => {
    it('should not render the Icon when isVisible is false', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible={false} />,
        );
        expect(component.find('span').exists()).toBe(false);
    });
    it('should render the Icon when isVisible is true', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible />,
        );
        expect(component.find('span').exists()).toBe(true);
    });
    it('should have the right class names when the position is left', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible position="left" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-icon-container rainbow-icon-left');
    });
    it('should have the right class names when the position is right', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible position="right" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-icon-container rainbow-icon-right');
    });
});
