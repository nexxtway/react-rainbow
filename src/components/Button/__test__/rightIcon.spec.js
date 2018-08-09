import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RightIcon from './../rightIcon';

describe('<RightIcon/>', () => {
    it('should not have children when the icon is not passed', () => {
        const component = mount(
            <RightIcon position="right" />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is not passed', () => {
        const component = mount(
            <RightIcon icon={<svg />} />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is is other than right', () => {
        const component = mount(
            <RightIcon icon={<svg />} position="left" />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should have the right class names when the icon is passed and position is right', () => {
        const component = renderer.create(
           <RightIcon icon={<svg />} position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
});
