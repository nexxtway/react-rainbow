import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from './../index';

describe('<Breadcrumb/>', () => {
    it('should fallback to href to href="javascript:void(0);" if the prop is not provided', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('a[href="javascript:void(0);"]').exists()).toBe(true);
    });
    it('should fallback to href to href passed', () => {
        const component = mount(<Breadcrumb label="index" href="index" />);

        expect(component.find('a[href="index"]').exists()).toBe(true);
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
    it('should set the label passed as children', () => {
        const component = mount(<Breadcrumb label="index" />);

        expect(component.find('a').text()).toBe('index');
    });
    it('should render a buttonMenu with the right amount of menuItems if has overflowMenu', () => {
        const overflowMenu = [
            { label: 'Parent record name' },
            { label: 'Parent record name', onClick: () => {} },
        ];
        const component = mount(<Breadcrumb overflowMenu={overflowMenu} label="" />);

        expect(component.find('ButtonMenu').exists()).toBe(true);
        expect(component.find('MenuItem').length).toBe(2);
    });
});
