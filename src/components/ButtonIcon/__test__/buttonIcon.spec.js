import React from 'react';
import { shallow } from 'enzyme';
import ButtonIcon from './../index';

describe('<ButtonIcon/>', () => {
    it('should show a console warning when variant is one of the dropdown and size prop is passed other than medium', () => {
        console.warn = jest.fn();
        shallow(<ButtonIcon iconName="custom-custom5" variant="dropdownBorder" size="x-small" />);

        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('should call onClick function when someone click over', () => {
        const onClickMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onClick={onClickMockFn} />);

        component.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });

    it('should call onBlur function when it lost the focus', () => {
        const onBlurMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onBlur={onBlurMockFn} />);

        component.simulate('blur');
        expect(onBlurMockFn.mock.calls.length).toBe(1);
    });

    it('should call onFocus function when it gets the focus', () => {
        const onFocusMockFn = jest.fn();
        const component = shallow(<ButtonIcon iconName="utility:like" onFocus={onFocusMockFn} />);

        component.simulate('focus');
        expect(onFocusMockFn.mock.calls.length).toBe(1);
    });
});
