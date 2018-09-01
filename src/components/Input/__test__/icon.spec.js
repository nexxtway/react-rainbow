import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<InputIcon/>', () => {
    it('should not render the IconSvg when iconName is not passed', () => {
        const component = mount(
            <Icon />,
        );
        expect(component.find('IconSvg').exists()).toBe(false);
    });
    it('should render the IconSvg when iconName is passed', () => {
        const component = mount(
            <Icon iconName="utility:user" />,
        );
        expect(component.find('IconSvg').exists()).toBe(true);
    });
    it('should have the right class names when iconName is passed and the position is left', () => {
        const component = mount(
            <Icon iconName="utility:activity" position="left" />,
        );

        const icon = component.find('IconSvg');

        expect(icon.prop('className')).toBe('rainbow-icon rainbow-input__icon rainbow-icon-text-default rainbow-input__icon_left');
    });
    it('should have the right class names when iconName is passed and the position is right', () => {
        const component = mount(
            <Icon iconName="utility:activity" position="right" />,
        );

        const icon = component.find('IconSvg');

        expect(icon.prop('className')).toBe('rainbow-icon rainbow-input__icon rainbow-icon-text-default rainbow-input__icon_right');
    });
    it('should have the right class names when there is an error and the position is left', () => {
        const component = mount(
            <Icon iconName="utility:activity" error="input error" position="left" />,
        );

        const icon = component.find('IconSvg');

        expect(icon.prop('className')).toBe('rainbow-input__icon rainbow-input__icon_left');
    });
    it('should have the right class names when there is an error and the position is right', () => {
        const component = mount(
            <Icon iconName="utility:activity" error="input error" position="right" />,
        );

        const icon = component.find('IconSvg');

        expect(icon.prop('className')).toBe('rainbow-input__icon rainbow-input__icon_right');
    });
});
