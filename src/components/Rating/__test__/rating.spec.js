import React from 'react';
import { mount } from 'enzyme';
import Rating from '../index';

describe('<Rating />', () => {
    it('should have the right class names when a custom class is passed', () => {
        const component = mount(
            <Rating className="my-custom-class" />,
        );
        expect(component.find('fieldset').prop('className')).toBe('rainbow-rating_container my-custom-class');
    });
    it('should set the value of the star hovered to the state', () => {
        const component = mount(
            <Rating />,
        );
        component.find('input[value=3]').simulate('mouseover');
        expect(component.state().value).toBe('3');
    });
    it('should set the value passed to the state when the mouse leave the star', () => {
        const component = mount(
            <Rating value="2" />,
        );
        component.find('input[value=3]').simulate('mouseleave');
        expect(component.state().value).toBe('2');
    });
});
