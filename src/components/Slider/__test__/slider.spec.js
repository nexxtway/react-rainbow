import React from 'react';
import { mount } from 'enzyme';
import Slider from '../index';

describe('<Slider />', () => {
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Slider onChange={onChangeFn} />,
        );
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should fire an event when the user clik the input', () => {
        const onClickFn = jest.fn();
        const component = mount(
            <Slider onClick={onClickFn} />,
        );
        component.find('input').simulate('click');
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
    it('should set the value passed in the slider element', () => {
        const component = mount(
            <Slider value="50" />,
        );
        expect(component.find('input').prop('value')).toBe('50');
    });
    it('should set the min value passed in the slider element', () => {
        const component = mount(
            <Slider min="50" />,
        );
        expect(component.find('input').prop('min')).toBe('50');
    });
    it('should set the max value passed in the slider element', () => {
        const component = mount(
            <Slider max="50" />,
        );
        expect(component.find('input').prop('max')).toBe('50');
    });
    it('should set the step value passed in the slider element', () => {
        const component = mount(
            <Slider step="50" />,
        );
        expect(component.find('input').prop('step')).toBe('50');
    });
    it('should set the disabled passed in the slider element', () => {
        const component = mount(
            <Slider disabled />,
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should set an id in the input element', () => {
        const component = mount(
            <Slider />,
        );
        expect(component.find('input').prop('id')).toMatch(/slider-id/);
    });
});
