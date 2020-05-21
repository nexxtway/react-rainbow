import React from 'react';
import { mount } from 'enzyme';
import FileSelector from '../';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';

describe('<FileSelector />', () => {
    it('should render an input with type file', () => {
        const component = mount(<FileSelector />);
        expect(component.find('input[type="file"]').length).toBe(1);
    });

    it('should set the same generated value to the label htmlFor and the input id', () => {
        const component = mount(<FileSelector label="label" />);
        const labelId = component.find('label').prop('htmlFor');
        const inputId = component.find('input').prop('id');
        expect(labelId).toBe(inputId);
    });

    it('should set the tabIndex passed in the input element', () => {
        const component = mount(<FileSelector tabIndex="0" />);
        expect(component.find('input').prop('tabIndex')).toBe('0');
    });

    it('should set disabled in the input element if it is passed', () => {
        const component = mount(<FileSelector disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });

    it('should set required in the input element if it is passed', () => {
        const component = mount(<FileSelector required />);
        expect(component.find('input').prop('required')).toBe(true);
    });

    it('should pass a generated id to the error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(<FileSelector error="error message" />);
        const errorId = component.find(ErrorText).prop('id');
        const describedBy = component.find('input').prop('aria-describedby');
        expect(errorId).toBe(describedBy);
    });

    it('should pass the right props to the Label component', () => {
        const component = mount(<FileSelector label="custom label" required />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
            id: expect.any(String),
        });
    });

    it('should render HelpText when bottomHelpText is passed', () => {
        const component = mount(<FileSelector bottomHelpText="help text" />);
        expect(component.find(HelpText).exists()).toBe(true);
    });

    it('should fire change event when a file is picked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<FileSelector label="custom label" onChange={onChangeMockFn} />);
        const input = component.find('input');
        input.simulate('change');
        expect(onChangeMockFn).toHaveBeenCalledTimes(1);
    });

    it('should fire focus event', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<FileSelector label="custom label" onFocus={onFocusMockFn} />);
        const input = component.find('input');
        input.simulate('focus');
        expect(onFocusMockFn).toHaveBeenCalledTimes(1);
    });

    it('should fire blur event', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<FileSelector label="custom label" onBlur={onBlurMockFn} />);
        const input = component.find('input');
        input.simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledTimes(1);
    });
});
