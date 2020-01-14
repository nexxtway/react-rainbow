import React from 'react';
import { mount } from 'enzyme';
import AmPmSelect from './../ampmSelect';

describe('<AmPmSelect/>', () => {
    it('should render the right markup when isFocused prop is false', () => {
        const component = mount(<AmPmSelect tabIndex="-1" />);
        expect(component.find('input[aria-label="am-pm selector"]').exists()).toBe(true);
    });
    it('should render the right markup when isFocused prop is true', () => {
        const component = mount(<AmPmSelect isFocused />);
        expect(component.find('fieldset[role="presentation"]').exists()).toBe(true);
        expect(component.find('input[value="AM"]').exists()).toBe(true);
        expect(component.find('input[value="PM"]').exists()).toBe(true);
    });
    it('should fire the onChange event with "AM" when the component get focus and value and defaultValue are undefined', () => {
        const onChangeMckFn = jest.fn();
        const component = mount(<AmPmSelect onChange={onChangeMckFn} />);
        component.find('input[aria-label="am-pm selector"]').simulate('focus');
        expect(component.prop('onChange')).toHaveBeenCalledWith('AM');
    });
    it('should fire the onChange event with the defaultValue passed when the component get focus and the prop value is undefined', () => {
        const onChangeMckFn = jest.fn();
        const component = mount(<AmPmSelect defaultValue="PM" onChange={onChangeMckFn} />);
        component.find('input[aria-label="am-pm selector"]').simulate('focus');
        expect(component.prop('onChange')).toHaveBeenCalledWith('PM');
    });
    it('should render the initial input when component lost focus', () => {
        const component = mount(<AmPmSelect isFocused />);
        component.setProps({ isFocused: false });
        expect(component.find('input[aria-label="am-pm selector"]').exists()).toBe(true);
    });
    it('should focus the component when the focus method is called and the component is not focused', () => {
        const component = mount(<AmPmSelect tabIndex="-1" />);
        component.instance().fieldsetRef.current.focus();
        const focusedElementAriaLabel = document.activeElement.getAttribute('aria-label');
        const fieldsetDataId = component.find('input').prop('aria-label');
        expect(focusedElementAriaLabel).toBe(fieldsetDataId);
    });
    it('should call event.stopPropagation when component is focused and the input with value "AM" is blurred', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<AmPmSelect isFocused />);
        component.find('input[value="AM"]').simulate('blur', {
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
    });
    it('should call event.stopPropagation when component is focused and the input with value "PM" is blurred', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<AmPmSelect isFocused />);
        component.find('input[value="PM"]').simulate('blur', {
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
    });
});
