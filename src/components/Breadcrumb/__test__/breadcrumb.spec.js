/* eslint-disable no-script-url */
import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from './../index';

describe('<Breadcrumb/>', () => {
    it('should render an anchor when href is passed', () => {
        const component = mount(<Breadcrumb label="index" href="index" />);

        expect(component.find('a').exists()).toBe(true);
    });
    it('should render a button when href is not passed', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('button').exists()).toBe(true);
    });
    it('should set the href passed', () => {
        const component = mount(<Breadcrumb label="index" href="index" />);

        expect(component.find('a').prop('href')).toBe('index');
    });
    it('should invoke onClick callback when we clicked in the breadcrumb', () => {
        const onClickMockFn = jest.fn();
        const component = mount(<Breadcrumb label="index" onClick={onClickMockFn} />);

        component.find('button').simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
    it('should set the label passed as children', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('button').text()).toBe('index');
    });
    it('should set the right aria-disabled value when the disabled is passed', () => {
        const component = mount(<Breadcrumb label="index" disabled />);

        expect(component.find('button').prop('aria-disabled')).toBe(true);
    });
    it('should set the label passed as children while href is passed', () => {
        const component = mount(<Breadcrumb href="index" label="index" />);

        expect(component.find('a').text()).toBe('index');
    });
    it('should set the right aria-disabled value when the disabled is passed while href is passed', () => {
        const component = mount(<Breadcrumb href="index" label="index" disabled />);

        expect(component.find('a').prop('aria-disabled')).toBe(true);
    });
});
