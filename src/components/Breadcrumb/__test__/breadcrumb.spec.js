import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './../index';

describe('<Breadcrumb/>', () => {
    it('should fallback to href to href="javascript:void(0);" if the prop is not provided', () => {
        const component = shallow(<Breadcrumb label="index" />);

        expect(component.find('a[href="javascript:void(0);"]').exists()).toBe(true);
    });
    it('should fallback to href to href passed', () => {
        const component = shallow(<Breadcrumb label="index" href="index" />);

        expect(component.find('a[href="index"]').exists()).toBe(true);
    });
    it('should invoke onClick callback when we clicked in the breadcrumb', () => {
        const onClickMockFn = jest.fn();
        const component = shallow(<Breadcrumb label="index" onClick={onClickMockFn} />);

        component.find('a').simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
    it('should set the label passed as children', () => {
        const component = shallow(<Breadcrumb label="index" />);

        expect(component.find('a').text()).toBe('index');
    });
});
