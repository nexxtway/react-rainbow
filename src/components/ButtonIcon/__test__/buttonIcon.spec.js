import React from 'react';
import { mount } from 'enzyme/build/index';
import renderer from 'react-test-renderer';
import ButtonIcon from './../index';

describe('<ButtonIcon/>', () => {
    it('should not render the assistive text when is not passed', () => {
        const component = mount(
            <ButtonIcon />,
        );
        expect(component.find('.slds-assistive-text').length).toBe(0);
    });
    it('should render the assistive text passed', () => {
        const component = mount(
            <ButtonIcon assistiveText="for screen readers" />,
        );
        expect(component.find('.slds-assistive-text').text()).toBe('for screen readers');
    });
    it('should focus the button when the focus method is called', () => {
        const component = mount(
            <ButtonIcon />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(
            <ButtonIcon />,
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
            <ButtonIcon disabled />,
        );

        expect(component.find('button').prop('disabled')).toBe(true);
    });
    it('should set the tabIndex passed', () => {
        const component = mount(
            <ButtonIcon tabIndex={0} />,
        );

        expect(component.find('button').prop('tabIndex')).toBe(0);
    });
    it('should set the title passed', () => {
        const component = mount(
            <ButtonIcon title="my title" />,
        );

        expect(component.find('button').prop('title')).toBe('my title');
    });
    it('should set the type passed', () => {
        const component = mount(
            <ButtonIcon type="reset" />,
        );

        expect(component.find('button').prop('type')).toBe('reset');
    });
    it('should set aria-haspopup to true when it is passed', () => {
        const component = mount(
            <ButtonIcon ariaHaspopup />,
        );

        expect(component.find('button').prop('aria-haspopup')).toBe(true);
    });
    it('should have the right class names', () => {
        const component = renderer.create(
            <ButtonIcon />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant border-filled and have a custom class', () => {
        const component = renderer.create(
            <ButtonIcon variant="border-filled" className="my-custom-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant border-inverse and size small', () => {
        const component = renderer.create(
            <ButtonIcon variant="border-inverse" size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant border and size x-small', () => {
        const component = renderer.create(
            <ButtonIcon variant="border" size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant brand and size xx-small', () => {
        const component = renderer.create(
            <ButtonIcon variant="brand" size="xx-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant inverse', () => {
        const component = renderer.create(
            <ButtonIcon variant="inverse" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant container', () => {
        const component = renderer.create(
            <ButtonIcon variant="container" />,
        );
        expect(component).toMatchSnapshot();
    });
});
