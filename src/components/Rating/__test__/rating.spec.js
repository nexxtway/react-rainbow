import React from 'react';
import { mount } from 'enzyme';
import Rating from '..';
import StyledLabel from '../styled/label';

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
    it('should render a label when label prop is passed', () => {
        const component = mount(<Rating label="Rating Label" />);
        expect(component.find(StyledLabel).exists()).toBe(true);
    });
    it('should set "left" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<Rating label="Rating Label" labelAlignment="left" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });
    it('should set "right" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<Rating label="Rating Label" labelAlignment="right" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
    });
    it('should set "center" to labelAlignment if prop not passed in the Label component', () => {
        const component = mount(<Rating label="Rating Label" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('center');
    });
    it('should set the inputs as required when required is true', () => {
        const component = mount(<Rating label="Rating Label" required />);
        component.find('input[type="radio"]').forEach(input => {
            expect(input.prop('required')).toBe(true);
        });
    });
});
