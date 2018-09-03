import React from 'react';
import { mount } from 'enzyme';
import ButtonMenu from './../';

describe('<ButtonMenu/>', () => {
    it('should focus the button when the focus method is called', () => {
        const component = mount(
            <ButtonMenu />,
        );

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(
            <ButtonMenu />,
        );
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should pass the icon passed to the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu icon={<svg />}>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('icon')).toEqual(<svg />);
    });
    it('should set the title passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu title="my title">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('title')).toBe('my title');
    });
    it('should set the buttonVariant passed as variant in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonVariant="brand">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('variant')).toBe('brand');
    });
    it('should set the buttonSize passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonSize="small">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('size')).toBe('small');
    });
    it('should set the disabled passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu disabled>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('disabled')).toBe(true);
    });
    it('should set the buttonShaded passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonShaded>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('shaded')).toBe(true);
    });
    it('should set the tabIndex passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu tabIndex={0}>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('tabIndex')).toBe(0);
    });
    it('should set the isLoading passed in the MenuContent', () => {
        const component = mount(
            <ButtonMenu isLoading>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('MenuContent').prop('isLoading')).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <ButtonMenu>
                <span data-id="menu-children">menu content</span>
            </ButtonMenu>,
        );
        expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
    });
    it('should set the role as menu in the ul element', () => {
        const component = mount(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('role')).toBe('menu');
    });
    it('should set the title passed as the aria-label in the ul element', () => {
        const component = mount(
            <ButtonMenu title="button title" assistiveText="assistive description">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('button title');
    });
    it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', () => {
        const component = mount(
            <ButtonMenu assistiveText="assistive description">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ul').prop('aria-label')).toBe('assistive description');
    });
    it('should have the right class names in the container element', () => {
        const component = mount(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-button-menu');
    });
    it('should have the right class names in the container element when the menu is opened', () => {
        const component = mount(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        component.find('ButtonIcon').simulate('click');
        expect(component.find('div[role="presentation"]').prop('className')).toBe('rainbow-button-menu rainbow-button-menu_is-open');
    });
    it('should have the right class names in the menu dropdown element', () => {
        const component = mount(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_xx-small');
    });
    it('should have the right class names when menuAlignment is left and isLoading is true', () => {
        const component = mount(
            <ButtonMenu menuAlignment="left" isLoading>
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_xx-small rainbow-button-menu-dropdown_loading-box');
    });
    it('should have the right class names when menuAlignment is right and menuSize is xx-small', () => {
        const component = mount(
            <ButtonMenu menuAlignment="right" menuSize="xx-small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_right rainbow-button-menu-dropdown_xx-small');
    });
    it('should have the right class names when menuSize is x-small', () => {
        const component = mount(
            <ButtonMenu menuSize="x-small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_x-small');
    });
    it('should have the right class names when menuSize is small', () => {
        const component = mount(
            <ButtonMenu menuSize="small">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_small');
    });
    it('should have the right class names when menuSize is medium', () => {
        const component = mount(
            <ButtonMenu menuSize="medium">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_medium');
    });
    it('should have the right class names when menuSize is large', () => {
        const component = mount(
            <ButtonMenu menuSize="large">
                <span />
            </ButtonMenu>,
        );
        const dropdown = component.find('ul[role="menu"]').parent();
        expect(dropdown.prop('className')).toBe('rainbow-button-menu-dropdown rainbow-button-menu-dropdown_left rainbow-button-menu-dropdown_large');
    });
});
