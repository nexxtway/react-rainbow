import React from 'react';
import { mount } from 'enzyme';
import Select from '../index';

describe('Select component', () => {
    it('should set an id in the select element', () => {
        const component = mount(<Select />);
        expect(component.find('select').prop('id')).toMatch(/select/);
    });
    it('should set the value passed in the select element', () => {
        const component = mount(<Select value="Select value" />);
        expect(component.find('select').prop('value')).toBe('Select value');
    });
    it('should fire an event when the user selects an option', () => {
        const onChangeFn = jest.fn();
        const component = mount(<Select onChange={onChangeFn} />);
        component.find('select').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the disabled passed in the select element', () => {
        const component = mount(<Select disabled />);
        expect(component.find('select').prop('disabled')).toBe(true);
    });
    it('should set the required passed in the select element when it is passed', () => {
        const component = mount(<Select required />);
        expect(component.find('select').prop('required')).toBe(true);
    });
    it('should set the required prop passed in the RequiredAsterisk component', () => {
        const component = mount(<Select label="Select Label" required />);
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
});
