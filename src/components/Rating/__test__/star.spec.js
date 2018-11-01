import React from 'react';
import { mount } from 'enzyme';
import Star from '../star';

describe('<Star />', () => {
    it('should set type radio to the input element', () => {
        const component = mount(
            <Star />,
        );
        expect(component.find('input').prop('type')).toBe('radio');
    });
    it('should pass a generated id to the input element and set the same id to the htmFor of the label element', () => {
        const component = mount(
            <Star />,
        );
        expect(component.find('input').prop('id')).toMatch(/star/);
        expect(component.find('label').prop('htmlFor')).toMatch(/star/);
    });
    it('should set the name passed to the name prop of the input element', () => {
        const component = mount(
            <Star name="name-1" />,
        );
        expect(component.find('input').prop('name')).toBe('name-1');
    });
    it('should set the value passed to the value prop of the input element', () => {
        const component = mount(
            <Star value="value-1" />,
        );
        expect(component.find('input').prop('value')).toBe('value-1');
    });
    it('should fire an event when the user click the star', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Star onChange={onChangeFn} />,
        );
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should render the right star when the prop filled is true', () => {
        const component = mount(
            <Star filled />,
        );
        component.find('input').simulate('change');
        expect(component.find('StarFill').exists()).toBe(true);
    });
});
