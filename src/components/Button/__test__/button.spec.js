import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './../index';

describe('<Button/>', () => {
    it('should call onClick function when someone click over', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <Button label="Button label" onClick={onClickMockFn} />,
        );

        component.simulate('click');
        expect(onClickMockFn.mock.calls.length).toBe(1);
    });
    it('should call onBlur function when it lost the focus', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <Button label="Button label" onBlur={onBlurMockFn} />,
        );

        component.simulate('blur');
        expect(onBlurMockFn.mock.calls.length).toBe(1);
    });
    it('should call onFocus function when it gets the focus', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <Button label="Button label" onFocus={onFocusMockFn} />,
        );

        component.simulate('focus');
        expect(onFocusMockFn.mock.calls.length).toBe(1);
    });
    it('should be defined the click method', () => {
        const component = mount(
            <Button />,
        );

        expect(typeof component.instance().click).toBe('function');
    });
    it('should be defined the focus method', () => {
        const component = mount(
            <Button />,
        );

        expect(typeof component.instance().focus).toBe('function');
    });
    it('should be defined the blur method', () => {
        const component = mount(
            <Button />,
        );

        expect(typeof component.instance().blur).toBe('function');
    });
    it('should focus the button when the focus method is called', () => {
        const component = mount(
            <Button />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(
            <Button />,
        );
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should set disable to true when it is passed', () => {
        const component = mount(
            <Button label="my label" disabled />,
        );

        expect(component.find('button').prop('disabled')).toBe(true);
    });
    it('should set the tabIndex passed', () => {
        const component = mount(
            <Button label="my label" tabIndex={0} />,
        );

        expect(component.find('button').prop('tabIndex')).toBe(0);
    });
    it('should set the title passed', () => {
        const component = mount(
            <Button label="my label" title="my title" />,
        );

        expect(component.find('button').prop('title')).toBe('my title');
    });
    it('should set the type passed', () => {
        const component = mount(
            <Button label="my label" type="reset" />,
        );

        expect(component.find('button').prop('type')).toBe('reset');
    });
    it('should set aria-haspopup to true when it is passed', () => {
        const component = mount(
            <Button label="my label" ariaHaspopup />,
        );

        expect(component.find('button').prop('aria-haspopup')).toBe(true);
    });
    it('should set the label passed as children', () => {
        const component = mount(
            <Button label="Click me" />,
        );

        expect(component.find('button').text()).toBe('Click me');
    });
    it('should have the right class names', () => {
        const component = renderer.create(
            <Button label="Button Label" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant neutral and have a custom class', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="neutral" className="my-custom-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant brand', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="brand" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant outline-brand', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="outline-brand" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant destructive', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="destructive" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant success', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="success" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant inverse', () => {
        const component = renderer.create(
            <Button label="Button Label" variant="inverse" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should render an icon on the left when iconName is passed', () => {
        const component = mount(
            <Button label="Button Label" iconName="utility:world" />,
        );
        const leftIcon = component.find('[data-id="left-icon"]');
        const rightIcon = component.find('[data-id="right-icon"]');

        expect(leftIcon.prop('isVisible')).toBe(true);
        expect(rightIcon.prop('isVisible')).toBe(false);
    });
    it('should render an icon on the right when iconName is passed and iconPosition is right', () => {
        const component = mount(
            <Button label="Button Label" iconName="utility:world" iconPosition="right" />,
        );
        const leftIcon = component.find('[data-id="left-icon"]');
        const rightIcon = component.find('[data-id="right-icon"]');

        expect(leftIcon.prop('isVisible')).toBe(false);
        expect(rightIcon.prop('isVisible')).toBe(true);
    });
});
