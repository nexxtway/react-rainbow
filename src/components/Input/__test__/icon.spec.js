import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from './../icon';

describe('<Icon/> in the Input component', () => {
    it('should not render an IconSvg element when isVisible is false', () => {
        const component = mount(
            <Icon isVisible={false} />,
        );
        expect(component.find('IconSvg').exists()).toBe(false);
    });
    it('should render an IconSvg element when isVisible is true', () => {
        const component = mount(
            <Icon isVisible />,
        );
        expect(component.find('IconSvg').exists()).toBe(true);
    });
    it('should have the right class names when isVisible and the iconPosition is left', () => {
        const component = renderer.create(
            <Icon isVisible iconName="utility:activity" iconPosition="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when isVisible and the iconPosition is right', () => {
        const component = renderer.create(
            <Icon isVisible iconName="utility:activity" iconPosition="right" />,
        );
        expect(component).toMatchSnapshot();
    });
});
