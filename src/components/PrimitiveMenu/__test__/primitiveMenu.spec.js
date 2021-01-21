/* eslint-disable id-length */
import React from 'react';
import { mount } from 'enzyme';
import PrimitiveMenu from '..';
import ButtonIcon from '../../ButtonIcon';

const mountWithRef = (elWithRef, options) => {
    const WithRef = () => elWithRef;
    return mount(<WithRef />, options);
};

describe('<PrimitiveMenu/>', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });
    it('should focus the button when the focus method is called', () => {
        let menuRef;
        const component = mountWithRef(
            // eslint-disable-next-line no-return-assign
            <PrimitiveMenu ref={ref => (menuRef = ref)} trigger={ButtonIcon} />,
        );

        menuRef.focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        let menuRef;
        const component = mountWithRef(
            // eslint-disable-next-line no-return-assign
            <PrimitiveMenu ref={ref => (menuRef = ref)} trigger={ButtonIcon} />,
        );
        const buttonDataId = component.find('button').prop('data-id');
        menuRef.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        menuRef.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should set the isLoading passed in the MenuContent', async () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} isLoading>
                <span />
            </PrimitiveMenu>,
        );
        component.find(ButtonIcon).simulate('click');
        expect(component.find('MenuContent').prop('isLoading')).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span data-id="menu-children">menu content</span>
            </PrimitiveMenu>,
        );
        expect(component.find('span[data-id="menu-children"]').exists()).toBe(false);
        component.find(ButtonIcon).simulate('click');
        expect(component.find('span[data-id="menu-children"]').exists()).toBe(true);
        expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
    });
    it('should set the role as menu in the ul element', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon}>
                <span />
            </PrimitiveMenu>,
        );
        component.find(ButtonIcon).simulate('click');
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
        component.find(ButtonIcon).simulate('click');
        expect(component.find('ul').prop('aria-label')).toBe('button title');
    });
    it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', () => {
        const component = mount(
            <PrimitiveMenu trigger={ButtonIcon} assistiveText="assistive description">
                <span />
            </PrimitiveMenu>,
        );
        component.find(ButtonIcon).simulate('click');
        expect(component.find('ul').prop('aria-label')).toBe('assistive description');
    });
});
