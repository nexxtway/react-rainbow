import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<MenuItemIcon/>', () => {
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
    it('should have the right class names when the position is left', () => {
        const component = renderer.create(
            <Icon iconName="utility:user" isVisible position="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the position is right', () => {
        const component = renderer.create(
            <Icon iconName="utility:user" isVisible position="right" />,
        );
        expect(component).toMatchSnapshot();
    });
});
