import React from 'react';
import renderer from 'react-test-renderer';
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
    it('should set the title passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu title="my title">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('title')).toBe('my title');
    });
    it('should set the assistiveText passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu assistiveText="assistive description">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('assistiveText')).toBe('assistive description');
    });
    it('should set the iconName passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu iconName="utility:user">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('iconName')).toBe('utility:user');
    });
    it('should set the buttonVariant passed as variant in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonVariant="brand">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('variant')).toBe('brand');
    });
    it('should set the buttonSize passed as size in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu buttonSize="large">
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('size')).toBe('large');
    });
    it('should set the disabled passed in the ButtonIcon', () => {
        const component = mount(
            <ButtonMenu disabled>
                <span />
            </ButtonMenu>,
        );
        expect(component.find('ButtonIcon').prop('disabled')).toBe(true);
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
    it('should set the right class names to the container element when the menu is opened', () => {
        const component = mount(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        component.find('ButtonIcon').simulate('click');
        expect(component.find('div[role="presentation"]').prop('className')).toBe('slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open');
    });
    it('should have the right class names', () => {
        const component = renderer.create(
            <ButtonMenu>
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuAlignment is left and isLoading is true', () => {
        const component = renderer.create(
            <ButtonMenu menuAlignment="left" isLoading>
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuAlignment is right and menuSize is xx-small', () => {
        const component = renderer.create(
            <ButtonMenu menuAlignment="right" menuSize="xx-small">
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuSize is x-small', () => {
        const component = renderer.create(
            <ButtonMenu menuSize="x-small">
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuSize is small', () => {
        const component = renderer.create(
            <ButtonMenu menuSize="small">
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuSize is medium', () => {
        const component = renderer.create(
            <ButtonMenu menuSize="medium">
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when menuSize is large', () => {
        const component = renderer.create(
            <ButtonMenu menuSize="large">
                <span />
            </ButtonMenu>,
        );
        expect(component).toMatchSnapshot();
    });
});
