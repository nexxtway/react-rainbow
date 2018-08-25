import React from 'react';
import { mount } from 'enzyme';
import Icon from '../icon';

describe('<ButtonIcon/> in the Button component', () => {
    it('should not render the Icon when isVisible is false', () => {
        const component = mount(
            <Icon iconName="utility:user" isVisible={false} />,
        );
        expect(component.find('IconSvg').exists()).toBe(false);
    });
    it('should render the Icon when isVisible is true', () => {
        const component = mount(
            <Icon iconName="utility:user" isVisible />,
        );
        expect(component.find('IconSvg').exists()).toBe(true);
    });
    it('should have the right class names when the isVisible is true and position is left', () => {
        const component = mount(
            <Icon isVisible iconName="utility:world" position="left" />,
        );
        expect(component.find('IconSvg').prop('className')).toBe('slds-button__icon slds-button__icon_left');
    });
    it('should have the right class names when the isVisible is true and position is right', () => {
        const component = mount(
            <Icon isVisible iconName="utility:world" position="right" />,
        );
        expect(component.find('IconSvg').prop('className')).toBe('slds-button__icon slds-button__icon_right');
    });
});
