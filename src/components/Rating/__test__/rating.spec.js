import React from 'react';
import { mount } from 'enzyme';
import Rating from '../index';

describe('<Rating />', () => {
    it('should set the value of the star hovered to the state and set the value passed to the state when the mouse leave the component', () => {
        const component = mount(<Rating value="2" />);
        component.find('input[value=3]').simulate('mouseover');
        expect(component.state().value).toBe('3');
        component.simulate('mouseleave');
        expect(component.state().value).toBe('2');
    });
    it('should not set the value of the star hovered to the state when readOnly is true', () => {
        const component = mount(<Rating value="2" readOnly />);
        component.find('input[value=4]').simulate('mouseover');
        expect(component.state().value).toBe('2');
    });
});
