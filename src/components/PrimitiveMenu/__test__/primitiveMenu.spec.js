import React from 'react';
import { mount } from 'enzyme';
import PrimitiveMenu from './../';
import ButtonIcon from '../../ButtonIcon';

describe('<PrimitiveMenu/>', () => {
    it('should focus the button when the focus method is called', () => {
        const component = mount(<PrimitiveMenu trigger={ButtonIcon} />);

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(<PrimitiveMenu trigger={ButtonIcon} />);
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
            <PrimitiveMenu
                trigger={ButtonIcon}
                title="button title"
                assistiveText="assistive description"
            >
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
});
