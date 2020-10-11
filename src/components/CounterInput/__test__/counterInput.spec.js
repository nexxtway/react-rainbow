import React from 'react';
import { mount } from 'enzyme';
import CounterInput from '../';

describe('<CounterInput />', () => {
    it('should mount a input type number with a value of 5', () => {
        const component = mount(<CounterInput value={5} />);
        const input = component.find('input');
        expect(input.prop('type')).toBe('number');
        expect(input.prop('value')).toBe(5);
    });

    it('should onChange have been called with -1 when click in minusButton and 1 when click in plusButton', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<CounterInput onChange={onChangeMockFn} value={0} />);
        const button = component.find('button');
        const minusButton = button.at(0);
        const plusButton = button.at(1);
        minusButton.simulate('mouseDown');
        expect(onChangeMockFn).toHaveBeenCalledWith(-1);
        plusButton.simulate('mouseDown');
        expect(onChangeMockFn).toHaveBeenCalledWith(1);
    });

    it('should onChange have been called with -2 when click in minusButton and 2 when click in plusButton ', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<CounterInput onChange={onChangeMockFn} step={2} />);
        const button = component.find('button');
        const minusButton = button.at(0);
        const plusButton = button.at(1);
        minusButton.simulate('mouseDown');
        expect(onChangeMockFn).toHaveBeenCalledWith(-2);
        plusButton.simulate('mouseDown');
        expect(onChangeMockFn).toHaveBeenCalledWith(2);
    });

    it('should have plusButton disabled', () => {
        const component = mount(<CounterInput value={5} max={5} />);
        const button = component.find('button');
        const plusButton = button.at(1);
        expect(plusButton.prop('disabled')).toBe(true);
    });

    it('should have minusButton disabled', () => {
        const component = mount(<CounterInput value={-5} min={-5} />);
        const button = component.find('button');
        const minusButton = button.at(0);
        expect(minusButton.prop('disabled')).toBe(true);
    });

    it('should have an input, minusButton and plusButton disabled', () => {
        const component = mount(<CounterInput disabled />);
        const button = component.find('button');
        const input = component.find('input');
        const minusButton = button.at(0);
        const plusButton = button.at(1);
        expect(input.prop('disabled')).toBe(true);
        expect(minusButton.prop('disabled')).toBe(true);
        expect(plusButton.prop('disabled')).toBe(true);
    });

    it('should have an input active and minusButton and plusButton disabled', () => {
        const component = mount(<CounterInput readOnly />);
        const button = component.find('button');
        const input = component.find('input');
        const minusButton = button.at(0);
        const plusButton = button.at(1);
        expect(input.prop('disabled')).toBe(false);
        expect(minusButton.prop('disabled')).toBe(true);
        expect(plusButton.prop('disabled')).toBe(true);
    });
});
