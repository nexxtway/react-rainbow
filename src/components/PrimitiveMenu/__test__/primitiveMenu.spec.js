import React from 'react';
import { mount } from 'enzyme';
import PrimitiveMenu from './../';
import ButtonIcon from '../../ButtonIcon';

describe('<PrimitiveMenu/>', () => {
    it('should focus the button when the focus method is called', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} />,
        );
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should set the isLoading passed in the MenuContent', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} isLoading>
                <span />
            </PrimitiveMenu>,
        );
        expect(component.find('MenuContent').prop('isLoading')).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span data-id="menu-children">menu content</span>
            </PrimitiveMenu>,
        );
        expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
    });
    it('should set the role as menu in the ul element', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span />
            </PrimitiveMenu>,
        );
        expect(component.find('ul').prop('role')).toBe('menu');
    });
    it('should set the title passed as the aria-label in the ul element', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} title="button title" assistiveText="assistive description">
                <span />
            </PrimitiveMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('button title');
    });
    it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} assistiveText="assistive description">
                <span />
            </PrimitiveMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('assistive description');
    });
    it('should have the right class names in the container element', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span />
            </PrimitiveMenu>,
        );
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-primitive-menu');
    });
    it('should have the right class names in the container element when the menu is opened', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span />
            </PrimitiveMenu>,
        );
        component.find('button').simulate('click');
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-primitive-menu rainbow-primitive-menu--open');
    });
    it('should have the right class names in the menu dropdown element', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuAlignment is left and isLoading is true', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="left" isLoading>
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--xx-small rainbow-primitive-menu_dropdown--loading-box');
    });
    it('should have the right class names when menuAlignment is right and menuSize is xx-small', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="right" menuSize="xx-small">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--right rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuAlignment is center', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="center">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--center rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuAlignment is bottom', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="bottom">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--bottom rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuAlignment is bottom-right', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="bottom-right">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--bottom-right rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuAlignment is bottom-left', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuAlignment="bottom-left">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--bottom-left rainbow-primitive-menu_dropdown--xx-small');
    });
    it('should have the right class names when menuSize is x-small', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuSize="x-small">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--x-small');
    });
    it('should have the right class names when menuSize is small', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuSize="small">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--small');
    });
    it('should have the right class names when menuSize is medium', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuSize="medium">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--medium');
    });
    it('should have the right class names when menuSize is large', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} menuSize="large">
                <span />
            </PrimitiveMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-primitive-menu_dropdown rainbow-primitive-menu_dropdown--left rainbow-primitive-menu_dropdown--large');
    });
});
