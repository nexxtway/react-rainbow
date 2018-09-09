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
});
