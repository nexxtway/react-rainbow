import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
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
        const component = renderer.create(
            <Icon iconName="utility:activity" position="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when iconName is passed and the position is right', () => {
        const component = renderer.create(
            <Icon iconName="utility:activity" position="right" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when there is an error and the position is left', () => {
        const component = renderer.create(
            <Icon iconName="utility:activity" error="input error" position="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when there is an error and the position is right', () => {
        const component = renderer.create(
            <Icon iconName="utility:activity" error="input error" position="right" />,
        );
        expect(component).toMatchSnapshot();
    });
});
