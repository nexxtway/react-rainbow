import React from 'react';
import { mount } from 'enzyme';
import InputCheckbox from './../';

describe('<InputCheckbox/>', () => {
    it('should set an id in the input element', () => {
        const component = mount(<InputCheckbox />);
        expect(component.find('input').prop('id')).toMatch(/input/);
    });
    it('should set the value passed in the input element', () => {
        const component = mount(<InputCheckbox value="Input value" />);
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(<InputCheckbox onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the tabIndex passed in the input element', () => {
        const component = mount(<InputCheckbox tabIndex={0} />);
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(<InputCheckbox disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should pass a generated inputId to the Label component', () => {
        const component = mount(<InputCheckbox bottomHelpText="Help text" />);
        expect(component.find('Label').prop('inputId')).toMatch(/input-checkbox/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<InputCheckbox label="custom label" />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            inputId: expect.any(String),
        });
    });
});
