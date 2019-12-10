import React from 'react';
import { mount } from 'enzyme';
import InputRadio from '../';
import StyledError from '../../styled/errorText';

describe('<InputRadio/>', () => {
    it('should set an id in the input element', () => {
        const component = mount(<InputRadio />);
        expect(component.find('input').prop('id')).toMatch(/input/);
    });
    it('should set the value passed in the input element', () => {
        const component = mount(<InputRadio value="Input value" />);
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(<InputRadio onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the tabIndex passed in the input element', () => {
        const component = mount(<InputRadio tabIndex={0} />);
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(<InputRadio disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', () => {
        const component = mount(<InputRadio bottomHelpText="Help text" />);
        expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
        expect(component.find('input').prop('aria-labelledby')).toMatch(/inline-text-label/);
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(<InputRadio error="error message" />);
        expect(component.find(StyledError).prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<InputRadio label="custom label" disabled />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            hideLabel: false,
            disabled: true,
            inputId: 'input-radio-24',
            id: undefined,
            variant: 'neutral',
        });
    });
    it('should set checked prop passed in input element', () => {
        const component = mount(<InputRadio checked />);
        expect(component.find('input').prop('checked')).toBe(true);
    });
});
