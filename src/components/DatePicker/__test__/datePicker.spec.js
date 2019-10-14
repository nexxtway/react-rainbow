import React from 'react';
import { mount } from 'enzyme';
import { SPACE_KEY, ENTER_KEY } from '../../../libs/constants';
import DatePicker from '../';

const value = new Date('06/01/2019');
jest.mock('../helpers/formatDate', () => jest.fn(() => '10/13/2019'));

describe('<DatePicker/>', () => {
    it('should fire onBlur with undefined when there is not value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<DatePicker onBlur={onBlurMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onBlur with the value passed', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<DatePicker value={value} onBlur={onBlurMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(value);
    });
    it('should fire onFocus with undefined when there is not value', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<DatePicker onFocus={onFocusMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onFocus with the value passed', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<DatePicker value={value} onFocus={onFocusMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onFocusMockFn).toHaveBeenCalledWith(value);
    });
    it('should call onChange with the right value when the Calendar date is changed', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<DatePicker value={value} onChange={onChangeMockFn} />);
        component.find('input').simulate('click');
        component
            .find('button')
            .at('14')
            .simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(new Date('06/12/2019'));
    });
    it('should close the modal when the Calendar date is changed', () => {
        const component = mount(<DatePicker value={value} />);
        component.find('input').simulate('click');
        component
            .find('button')
            .at('14')
            .simulate('click');
        expect(component.find('Modal').prop('isOpen')).toBe(false);
    });
    it('should open the modal when enter or space key is pressed while DatePicker is focused and readOnly is not passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(keyCode => {
            const component = mount(<DatePicker />);
            const input = component.find('input');
            input.simulate('focus');
            input.simulate('keyDown', { keyCode });
            expect(component.find('Modal').prop('isOpen')).toBe(true);
        });
    });
    it('should not open the modal when enter or space key is pressed while DatePicker is focused and readOnly is passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(keyCode => {
            const component = mount(<DatePicker readOnly />);
            const input = component.find('input');
            input.simulate('focus');
            input.simulate('keyDown', { keyCode });
            expect(component.find('Modal').prop('isOpen')).toBe(false);
        });
    });
    it('should open the modal and fire onClick when DatePicker is clicked and readOnly is not passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(<DatePicker onClick={onClickMockFn} />);
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(1);
        expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
    it('should not open the modal and not fire onClick when DatePicker is clicked and readOnly is passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(<DatePicker onClick={onClickMockFn} readOnly />);
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(0);
        expect(component.find('Modal').prop('isOpen')).toBe(false);
    });
    it('should pass the right value to Input component', () => {
        const component = mount(<DatePicker value={value} />);
        expect(component.find('input').prop('value')).toBe('10/13/2019');
    });
});
