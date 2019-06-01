import React from 'react';
import { mount } from 'enzyme';
import TimePicker from '../';

describe('<TimePicker/>', () => {
    it('should fire onBlur with undefined when there is not value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<TimePicker onBlur={onBlurMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onBlur with the value passed', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<TimePicker value="18:35" onBlur={onBlurMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith('18:35');
    });
    it('should fire onFocus with undefined when there is not value', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<TimePicker onFocus={onFocusMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onFocus with the value passed', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(<TimePicker value="18:35" onFocus={onFocusMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onFocusMockFn).toHaveBeenCalledWith('18:35');
    });
});
