import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<MenuItemIcon/>', () => {
    it('should have the right class names when the position is left', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible position="left" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-menu-item_icon rainbow-menu-item_icon--left');
    });
    it('should have the right class names when the position is right', () => {
        const component = mount(
            <Icon icon={<svg />} isVisible position="right" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-menu-item_icon rainbow-menu-item_icon--right');
    });
});
