import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../';

const value = new Date('06/01/2019');

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
});
