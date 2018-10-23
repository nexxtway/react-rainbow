import React from 'react';
import { mount } from 'enzyme';
import AvatarButton from '../avatarButton';

describe('<AvatarButton/>', () => {
    it('should call onClick function when someone click over', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <AvatarButton onClick={onClickMockFn} />,
        );

        component.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
    it('should call onBlur function when it lost the focus', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <AvatarButton onBlur={onBlurMockFn} />,
        );

        component.simulate('blur');
        expect(onBlurMockFn.mock.calls.length).toBe(1);
    });
    it('should call onFocus function when it gets the focus', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <AvatarButton onFocus={onFocusMockFn} />,
        );

        component.simulate('focus');
        expect(onFocusMockFn.mock.calls.length).toBe(1);
    });
    it('should be defined the click method', () => {
        const component = mount(
            <AvatarButton />,
        );

        expect(typeof component.instance().click).toBe('function');
    });
    it('should be defined the focus method', () => {
        const component = mount(
            <AvatarButton />,
        );

        expect(typeof component.instance().focus).toBe('function');
    });
    it('should be defined the blur method', () => {
        const component = mount(
            <AvatarButton />,
        );

        expect(typeof component.instance().blur).toBe('function');
    });
    it('should focus the AvatarButton when the focus method is called', () => {
        const component = mount(
            <AvatarButton />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the AvatarButton when the blur method is called', () => {
        const component = mount(
            <AvatarButton />,
        );
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
});
