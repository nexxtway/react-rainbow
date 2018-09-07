import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<MenuItemIcon/>', () => {
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
