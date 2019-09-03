import React from 'react';
import { mount } from 'enzyme';
import AmPmSelect from './../ampmSelect';

describe('<AmPmSelect/>', () => {
    it('should render the right markup initially when component is not focused', () => {
        const component = mount(<AmPmSelect tabIndex="-1" />);
        component.setState({ isFocused: false });
        expect(
            component.find('input[className="rainbow-time-picker_time-select-value"]').exists(),
        ).toBe(true);
    });
    it('should render the right markup when component is focused', () => {
        const component = mount(<AmPmSelect />);
        component.setState({ isFocused: true });
        expect(
            component
                .find(
                    'fieldset[className="rainbow-time-picker_time-select-value rainbow-time-picker_select-ampm"]',
                )
                .exists(),
        ).toBe(true);
        expect(component.find('input[value="AM"]').exists()).toBe(true);
        expect(component.find('input[value="PM"]').exists()).toBe(true);
    });
    it('should fire the onChange event with "AM" when the component get focus and value and defaultValue are undefined', () => {
        const onChangeMckFn = jest.fn();
        const component = mount(<AmPmSelect onChange={onChangeMckFn} />);
        component.setState({ isFocused: false });
        component
            .find('input[className="rainbow-time-picker_time-select-value"]')
            .simulate('focus');
        expect(component.prop('onChange')).toHaveBeenCalledWith('AM');
        expect(component.state('isFocused')).toBe(true);
    });
    it('should fire the onChange event with the defaultValue passed when the component get focus and the prop value is undefined', () => {
        const onChangeMckFn = jest.fn();
        const component = mount(<AmPmSelect defaultValue="PM" onChange={onChangeMckFn} />);
        component.setState({ isFocused: false });
        component
            .find('input[className="rainbow-time-picker_time-select-value"]')
            .simulate('focus');
        expect(component.prop('onChange')).toHaveBeenCalledWith('PM');
        expect(component.state('isFocused')).toBe(true);
    });
    it('should render the initial input when component lost focus', () => {
        const component = mount(<AmPmSelect />);
        component.setState({ isFocused: true });
        component
            .find(
                'fieldset[className="rainbow-time-picker_time-select-value rainbow-time-picker_select-ampm"]',
            )
            .simulate('blur');
        expect(
            component.find('input[className="rainbow-time-picker_time-select-value"]').exists(),
        ).toBe(true);
    });
    it('should focus the component when the focus method is called and the component is focused', () => {
        const component = mount(<AmPmSelect tabIndex="-1" />);
        component.setState({ isFocused: true });
        component.instance().fieldsetRef.current.focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const fieldsetDataId = component.find('fieldset').prop('data-id');
        expect(focusedElementDataId).toBe(fieldsetDataId);
    });
    it('should focus the component when the focus method is called and the component is not focused', () => {
        const component = mount(<AmPmSelect tabIndex="-1" />);
        component.setState({ isFocused: false });
        component.instance().fieldsetRef.current.focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const fieldsetDataId = component.find('input').prop('data-id');
        expect(focusedElementDataId).toBe(fieldsetDataId);
    });
    it('should call event.stopPropagation when component is focused and the input with value "AM" is blurred', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<AmPmSelect />);
        component.setState({ isFocused: true });
        component.find('input[value="AM"]').simulate('blur', {
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
    });
    it('should call event.stopPropagation when component is focused and the input with value "PM" is blurred', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<AmPmSelect />);
        component.setState({ isFocused: true });
        component.find('input[value="PM"]').simulate('blur', {
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
    });
});
