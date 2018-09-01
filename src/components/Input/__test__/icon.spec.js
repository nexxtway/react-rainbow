import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

const iconComponent = <svg />;

describe('<InputIcon/>', () => {
    it('should not render the icon when icon is not passed', () => {
        const component = mount(
            <Icon position="left" />,
        );
        expect(component.find('span').exists()).toBe(false);
    });
    it('should render the Icon when icon is passed', () => {
        const component = mount(
            <Icon icon={iconComponent} position="left" />,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
    it('should have the right class names when iconName is passed and the position is left', () => {
        const component = mount(
            <Icon icon={iconComponent} position="left" />,
        );

        const icon = component.find('span');

        expect(icon.prop('className')).toBe('rainbow-icon rainbow-input__icon rainbow-icon-text-default rainbow-input__icon_left');
    });
    it('should have the right class names when iconName is passed and the position is right', () => {
        const component = mount(
            <Icon icon={iconComponent} position="right" />,
        );

        const icon = component.find('span');

        expect(icon.prop('className')).toBe('rainbow-icon rainbow-input__icon rainbow-icon-text-default rainbow-input__icon_right');
    });
    it('should have the right class names when there is an error and the position is left', () => {
        const component = mount(
            <Icon icon={iconComponent} error="input error" position="left" />,
        );

        const icon = component.find('span');

        expect(icon.prop('className')).toBe('rainbow-input__icon rainbow-input__icon_left');
    });
    it('should have the right class names when there is an error and the position is right', () => {
        const component = mount(
            <Icon icon={iconComponent} error="input error" position="right" />,
        );

        const icon = component.find('span');

        expect(icon.prop('className')).toBe('rainbow-input__icon rainbow-input__icon_right');
    });
});
