import React from 'react';
import { mount } from 'enzyme';
import Slider from '../index';
import ErrorText from '../../Input/styled/errorText';
import StyledLabel from '../styled/label';

describe('<Slider />', () => {
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(<Slider onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the value passed in the input element', () => {
        const component = mount(<Slider value="50" />);
        expect(component.find('input').prop('value')).toBe('50');
    });
    it('should set the min value passed in the input element', () => {
        const component = mount(<Slider min="50" />);
        expect(component.find('input').prop('min')).toBe('50');
    });
    it('should set the max value passed in the input element', () => {
        const component = mount(<Slider max="50" />);
        expect(component.find('input').prop('max')).toBe('50');
    });
    it('should set the step value passed in the input element', () => {
        const component = mount(<Slider step="50" />);
        expect(component.find('input').prop('step')).toBe('50');
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(<Slider disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should render a label when label prop is passed', () => {
        const component = mount(<Slider label="Slider Label" />);
        expect(component.find(StyledLabel).exists()).toBe(true);
    });
    it('should set "left" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<Slider label="Slider Label" labelAlignment="left" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });
    it('should set "right" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<Slider label="Slider Label" labelAlignment="right" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
    });
    it('should set "center" to labelAlignment if prop not passed in the Label component', () => {
        const component = mount(<Slider label="Slider Label" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('center');
    });
    it('should set an id in the input element', () => {
        const component = mount(<Slider />);
        expect(component.find('input').prop('id')).toMatch(/slider-id/);
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(<Slider error="error message" />);
        expect(component.find(ErrorText).prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should not set aria-describedby in the input if no error is passed', () => {
        const component = mount(<Slider />);
        expect(component.find(ErrorText).exists()).toBe(false);
        expect(component.find('input').prop('aria-describedby')).toBe(undefined);
    });
    it('should set the input as required when `required` prop is true', () => {
        const component = mount(<Slider required />);
        expect(component.find('input').prop('required')).toBe(true);
    });

    it('should render required asterisk when required prop is true', () => {
        const component = mount(<Slider label="My label" required />);
        expect(component.find('RequiredAsterisk').exists()).toBe(true);
    });
});
