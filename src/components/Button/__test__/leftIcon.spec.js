import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import LeftIcon from './../leftIcon';

describe('<LeftIcon/>', () => {
    it('should not have children when the icon is not passed', () => {
        const component = mount(
            <LeftIcon position="left" />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is not passed', () => {
        const component = mount(
            <LeftIcon icon={<svg />} />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is is other than left', () => {
        const component = mount(
            <LeftIcon icon={<svg />} position="right" />,
        );

        expect(component.children().length).toBe(0);
    });
    it('should have the right class names when the icon is passed and position is left', () => {
        const component = renderer.create(
           <LeftIcon icon={<svg />} position="left" />,
       );
        expect(component).toMatchSnapshot();
    });
});
