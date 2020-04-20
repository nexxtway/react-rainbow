import React from 'react';
import { mount } from 'enzyme';
import PrimitiveCheckbox from './../';

describe('<PrimitiveCheckbox/>', () => {
    it('should set an id in the input element', () => {
        const component = mount(<PrimitiveCheckbox />);
        expect(component.find('input').prop('id')).toMatch(/input/);
    });
    it('should set the value passed in the input element', () => {
        const component = mount(<PrimitiveCheckbox value="Input value" />);
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(<PrimitiveCheckbox onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the tabIndex passed in the input element', () => {
        const component = mount(<PrimitiveCheckbox tabIndex={0} />);
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(<PrimitiveCheckbox disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should pass a generated inputId to the Label component', () => {
        const component = mount(<PrimitiveCheckbox bottomHelpText="Help text" />);
        expect(component.find('Label').prop('inputId')).toMatch(/input-checkbox/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<PrimitiveCheckbox label="custom label" />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            inputId: expect.any(String),
        });
    });
    it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed', () => {
        const component = mount(<PrimitiveCheckbox checked="indeterminate" />);
        expect(component.instance().inputRef.current.indeterminate).toBe(true);
    });
    it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed later the component is mounted', () => {
        const component = mount(<PrimitiveCheckbox />);
        component.setProps({
            checked: 'indeterminate',
        });
        expect(component.instance().inputRef.current.indeterminate).toBe(true);
    });
    it('should set checked prop passed in input element', () => {
        const component = mount(<PrimitiveCheckbox checked />);
        expect(component.find('input').prop('checked')).toBe(true);
    });
});
