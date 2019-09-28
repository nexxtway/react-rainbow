import React from 'react';
import { mount } from 'enzyme';
import { SPACE_KEY, ENTER_KEY } from '../../../libs/constants';
import DateTimePicker from '../index';

const value = new Date('06/01/2019 20:48:34');
jest.mock('../helpers/formatDateTime', () => jest.fn(() => '10/24/2019, 10:48 AM'));

describe('<DateTimePicker/>', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should fire onBlur with undefined when there is not value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <DateTimePicker label="unit-testing-dateTimePicker" onBlur={onBlurMockFn} />,
        );
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onBlur with the value passed', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <DateTimePicker
                label="unit-testing-dateTimePicker"
                value={value}
                onBlur={onBlurMockFn}
            />,
        );
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(value);
    });
    it('should fire onFocus with undefined when there is not value', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <DateTimePicker label="unit-testing-dateTimePicker" onFocus={onFocusMockFn} />,
        );
        component.find('input').simulate('focus');
        expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onFocus with the value passed', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <DateTimePicker
                label="unit-testing-dateTimePicker"
                value={value}
                onFocus={onFocusMockFn}
            />,
        );
        component.find('input').simulate('focus');
        expect(onFocusMockFn).toHaveBeenCalledWith(value);
    });
    it('should set isOpen to true and fire onClick when readOnly is not passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <DateTimePicker
                label="unit-testing-dateTimePicker"
                value={value}
                onClick={onClickMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(1);
        expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(true);
    });
    it('should not set isOpen to true and not fire onClick when readOnly is passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <DateTimePicker
                readOnly
                label="unit-testing-dateTimePicker"
                value={value}
                onClick={onClickMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(0);
        expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(false);
    });
    it('should open the modal when enter key or space key is pressed while input is focused and readOnly is not passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(keyCode => {
            const component = mount(<DateTimePicker label="unit-testing-dateTimePicker" />);
            const input = component.find('input');
            input.simulate('focus');
            input.simulate('keyDown', { keyCode });
            expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(true);
        });
    });
    it('should not open the modal when enter key or space key is pressed while input is focused and readOnly is passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(keyCode => {
            const component = mount(
                <DateTimePicker label="unit-testing-dateTimePicker" readOnly />,
            );
            const input = component.find('input');
            input.simulate('focus');
            input.simulate('keyDown', { keyCode });
            expect(component.find('DateTimePickerModal').prop('isOpen')).toBe(false);
        });
    });
    it('should set the right input value', () => {
        const component = mount(
            <DateTimePicker label="unit-testing-dateTimePicker" value={value} />,
        );
        expect(component.find('input').prop('value')).toBe('10/24/2019, 10:48 AM');
    });
});
