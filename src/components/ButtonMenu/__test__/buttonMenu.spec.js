import React from 'react';
import { mount } from 'enzyme';
import ButtonMenu from './../';

describe('<ButtonMenu/>', () => {
    it('should focus the button when the focus method is called', () => {
        const component = mount(
            <ButtonMenu label="menu" />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(
            <ButtonMenu label="menu" />,
        );
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should set the title passed in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu" title="my title">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('title')).toBe('my title');
    });
    it('should set the label passed in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu label">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('label')).toBe('menu label');
    });
    it('should set the buttonVariant passed as variant in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu" buttonVariant="brand">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('variant')).toBe('brand');
    });
    it('should set the disabled passed in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu" disabled>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('disabled')).toBe(true);
    });
    it('should set the buttonShaded passed in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu" buttonShaded>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('shaded')).toBe(true);
    });
    it('should set the tabIndex passed in the Button', () => {
        const component = mount(
            <ButtonMenu label="menu" tabIndex={0}>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('Button').prop('tabIndex')).toBe(0);
    });
    it('should set the isLoading passed in the MenuContent', () => {
        const component = mount(
            <ButtonMenu label="menu" isLoading>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('MenuContent').prop('isLoading')).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <ButtonMenu label="menu">
                <span data-id="menu-children">menu content</span>
            </ButtonMenu>,
        );
        expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
    });
    it('should set the role as menu in the ul element', () => {
        const component = mount(
            <ButtonMenu label="menu">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('role')).toBe('menu');
    });
    it('should set the title passed as the aria-label in the ul element', () => {
        const component = mount(
            <ButtonMenu label="menu" title="button title" assistiveText="assistive description">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('button title');
    });
    it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', () => {
        const component = mount(
            <ButtonMenu label="menu" assistiveText="assistive description">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('assistive description');
    });
    it('should have the right class names in the container element', () => {
        const component = mount(
            <ButtonMenu label="menu">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-button-menu');
    });
    it('should have the right class names in the container element when the menu is opened', () => {
        const component = mount(
            <ButtonMenu label="menu">
                <span />
            </ButtonMenu>,
        );
        component.find('Button').simulate('click');
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-button-menu rainbow-button-menu_is-open');
    });
    it('should have the right class names in the menu dropdown element', () => {
        const component = mount(
            <ButtonMenu label="menu">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_xx-small');
    });
    it('should have the right class names when menuAlignment is left and isLoading is true', () => {
        const component = mount(
            <ButtonMenu label="menu" menuAlignment="left" isLoading>
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_xx-small rainbow-button-menu-dropdown_loading-box');
    });
    it('should have the right class names when menuAlignment is right and menuSize is xx-small', () => {
        const component = mount(
            <ButtonMenu label="menu" menuAlignment="right" menuSize="xx-small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_right rainbow-button-menu-dropdown_xx-small');
    });
    it('should have the right class names when menuSize is x-small', () => {
        const component = mount(
            <ButtonMenu label="menu" menuSize="x-small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_x-small');
    });
    it('should have the right class names when menuSize is small', () => {
        const component = mount(
            <ButtonMenu label="menu" menuSize="small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_small');
    });
    it('should have the right class names when menuSize is medium', () => {
        const component = mount(
            <ButtonMenu label="menu" menuSize="medium">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_medium');
    });
    it('should have the right class names when menuSize is large', () => {
        const component = mount(
            <ButtonMenu label="menu" menuSize="large">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_large');
    });
});
