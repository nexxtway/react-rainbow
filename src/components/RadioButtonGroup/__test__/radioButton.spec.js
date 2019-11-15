import React from 'react';
import { mount } from 'enzyme';
import RadioButtonItem from '../radioButtonItem';

describe('<RadioButton />', () => {
    it('should set type radio to the input element', () => {
        const component = mount(<RadioButtonItem />);
        expect(component.find('input').prop('type')).toBe('radio');
    });
    it('should pass a generated id to the input element and set the same id to the htmFor of the label element', () => {
        const component = mount(<RadioButtonItem />);
        expect(component.find('input').prop('id')).toMatch(/radiobutton/);
        expect(component.find('label').prop('htmlFor')).toMatch(/radiobutton/);
    });
    it('should set the name passed to the name prop of the input element', () => {
        const component = mount(<RadioButtonItem name="name-1" />);
        expect(component.find('input').prop('name')).toBe('name-1');
    });
    it('should set the value passed to the value prop of the input element', () => {
        const component = mount(<RadioButtonItem value="value-1" />);
        expect(component.find('input').prop('value')).toBe('value-1');
    });
    it('should set the isChecked passed to the checked prop of the input element', () => {
        const component = mount(<RadioButtonItem isChecked />);
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should set the value ariaDescribedby to the ariaDescribedby prop of the input element', () => {
        const component = mount(<RadioButtonItem ariaDescribedby="error-1" />);
        expect(component.find('input').prop('aria-describedby')).toBe('error-1');
    });
    it('should fire an event when the user click the radio', () => {
        const onChangeFn = jest.fn();
        const component = mount(<RadioButtonItem onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the disabled passed to the disabled prop of the input element', () => {
        const component = mount(<RadioButtonItem disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
});
