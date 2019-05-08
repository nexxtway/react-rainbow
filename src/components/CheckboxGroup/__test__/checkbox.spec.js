import React from 'react';
import { mount } from 'enzyme';
import CheckBox from '../checkbox';

describe('<CheckBox />', () => {
    it('it should set the right type to the input', () => {
        const component = mount(<CheckBox value="test" label="test" />);
        expect(component.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('it should set the checked prop to the input', () => {
        const component = mount(<CheckBox value="test" label="test" isSelected />);
        expect(component.find('input').prop('checked')).toBe(true);
    });

    it('should pass a generated id to the input element and set the same id to the htmFor of the label element', () => {
        const component = mount(<CheckBox />);
        expect(component.find('input').prop('id')).toMatch(/checkbox/);
        expect(component.find('label').prop('htmlFor')).toMatch(/checkbox/);
    });

    it('should set the value passed to the value prop of the input element', () => {
        const component = mount(<CheckBox value="value-1" />);
        expect(component.find('input').prop('value')).toBe('value-1');
    });

    it('should set the isSelected passed to the checked prop of the input element', () => {
        const component = mount(<CheckBox isSelected />);
        expect(component.find('input').prop('checked')).toBe(true);
    });

    it('should set the value ariaDescribedby to the ariaDescribedby prop of the input element', () => {
        const component = mount(<CheckBox describedBy="error-1" />);
        expect(component.find('input').prop('aria-describedby')).toBe('error-1');
    });

    it('it should set the disabled prop to the input', () => {
        const component = mount(<CheckBox value="test" label="test" disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });

    it('it should call onChange when the input is clicked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<CheckBox value="test" label="test" onChange={onChangeMockFn} />);
        const input = component.find('input');
        input.simulate('change');
        expect(onChangeMockFn.mock.calls.length).toBe(1);
    });

    it('should have the right classNames when in the span element of the label when is disabled', () => {
        const component = mount(<CheckBox label="checkbox label" disabled />);
        expect(
            component
                .find(
                    'span[className="rainbow-checkbox-group_checkbox-label rainbow-checkbox-group_checkbox-label--disabled"]',
                )
                .exists(),
        ).toBe(true);
    });
});
