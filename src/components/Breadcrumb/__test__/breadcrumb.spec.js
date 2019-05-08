/* eslint-disable no-script-url */
import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from './../index';

describe('<Breadcrumb/>', () => {
    it('should fallback the href to href="javascript:void(0);" if the prop is not provided', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('a').prop('href')).toBe('javascript:void(0);');
    });
    it('should set the href passed', () => {
        const component = mount(<Breadcrumb label="index" href="index" />);

        expect(component.find('a').prop('href')).toBe('index');
    });
    it('should invoke onClick callback when we clicked in the breadcrumb', () => {
        const onClickMockFn = jest.fn();
        const component = mount(<Breadcrumb label="index" onClick={onClickMockFn} />);

        component.find('a').simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
    it('should set the label passed as children', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('a').text()).toBe('index');
    });
    it('should set the right aria-disabled value when the disabled is passed', () => {
        const component = mount(<Breadcrumb label="index" disabled />);

        expect(component.find('a').prop('aria-disabled')).toBe(true);
    });
    it('should set the right className when the disabled is passed', () => {
        const component = mount(<Breadcrumb label="index" disabled />);

        expect(component.find('li').prop('className')).toBe(
            'rainbow-breadcrumb rainbow-breadcrumb--disabled',
        );
    });
});
