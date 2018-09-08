import React from 'react';
import { mount } from 'enzyme';
import CheckboxToggle from '../index';

describe('<CheckboxToggle/>', () => {
    it('should set type checkbox to the input element', () => {
        const component = mount(
            <CheckboxToggle />,
        );
        expect(component.find('input').prop('type')).toBe('checkbox');
    });
    it('should pass a generated id to the span element and set the same id to the name, the value and the aria-describedby for the input element', () => {
        const component = mount(
            <CheckboxToggle />,
        );
        expect(component.find('.rainbow-checkbox__toggle_faux_container').prop('id')).toMatch(/checkbox-toggle/);
        expect(component.find('input').prop('name')).toMatch(/checkbox-toggle/);
        expect(component.find('input').prop('value')).toMatch(/checkbox-toggle/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/checkbox-toggle/);
    });
    it('should set the value passed to the checked prop of the input element', () => {
        const component = mount(
            <CheckboxToggle value />,
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should fire an event when the user click the checkbox', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CheckboxToggle onChange={onChangeFn} />,
        );
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the disabled passed to the disabled prop of the input element', () => {
        const component = mount(
            <CheckboxToggle disabled />,
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });
});
