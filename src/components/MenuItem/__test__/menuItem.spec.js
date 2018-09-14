/* eslint-disable no-script-url */
import React from 'react';
import { mount } from 'enzyme';
import MenuItem from './../';

describe('<MenuItem/>', () => {
    it('should render the label passed', () => {
        const component = mount(
            <MenuItem label="item label" />,
        );
        expect(component.text()).toBe('item label');
    });
    it('should set the title passed in the label container', () => {
        const component = mount(
            <MenuItem title="item title" />,
        );
        expect(component.find('span[className="rainbow-menu-item_icon-container"]').prop('title')).toBe('item title');
    });
    it('should pass the right props to the left and right Icon', () => {
        const component = mount(
            <MenuItem icon={<svg />} iconPosition="right" />,
        );
        expect(component.find('Icon[data-id="menu-item-left-icon"]').props()).toEqual(expect.objectContaining({
            icon: <svg />,
            isVisible: false,
            position: 'right',
        }));
        expect(component.find('Icon[data-id="menu-item-right-icon"]').props()).toEqual(expect.objectContaining({
            icon: <svg />,
            isVisible: true,
            position: 'right',
        }));
    });
    it('should set the isVisible to false to left and right Icon when the iconName is not passed', () => {
        const component = mount(
            <MenuItem />,
        );
        expect(component.find('Icon[data-id="menu-item-left-icon"]').prop('isVisible')).toBe(false);
        expect(component.find('Icon[data-id="menu-item-right-icon"]').prop('isVisible')).toBe(false);
    });
    it('should pass the right props to the anchor element', () => {
        const component = mount(
            <MenuItem disabled />,
        );
        expect(component.find('a').props()).toEqual(expect.objectContaining({
            'aria-disabled': true,
            href: 'javascript:void(0);',
            role: 'menuitem',
        }));
    });
    it('should fire an event when the li elment is clicked', () => {
        const onClickMockFn = jest.fn();
        const privateOnCloseMockFn = jest.fn();
        const component = mount(
            <MenuItem onClick={onClickMockFn} privateOnClose={privateOnCloseMockFn} />,
        );
        component.find('li').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(1);
        expect(privateOnCloseMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not fire anything when the li elment is clicked but disabled is passed', () => {
        const onClickMockFn = jest.fn();
        const privateOnCloseMockFn = jest.fn();
        const component = mount(
            <MenuItem disabled onClick={onClickMockFn} privateOnClose={privateOnCloseMockFn} />,
        );
        component.find('li').simulate('click');
        expect(onClickMockFn).not.toHaveBeenCalled();
        expect(privateOnCloseMockFn).not.toHaveBeenCalled();
    });
    it('should set the role as presentation in the li element', () => {
        const component = mount(
            <MenuItem label="item label" />,
        );
        expect(component.find('li').prop('role')).toBe('presentation');
    });
    it('should set the role as separator in the li element when the variant is header', () => {
        const component = mount(
            <MenuItem variant="header" />,
        );
        expect(component.find('li').prop('role')).toBe('separator');
    });
    it('should set the title passed in the li element when the variant is header', () => {
        const component = mount(
            <MenuItem variant="header" title="header title" />,
        );
        expect(component.find('li').prop('title')).toBe('header title');
    });
    it('should have the right class names when variant is header', () => {
        const component = mount(
            <MenuItem variant="header" />,
        );
        expect(component.find('li').prop('className')).toBe('rainbow-menu-item_header');
    });
    it('should have the right class names when variant is not passed', () => {
        const component = mount(
            <MenuItem label="menu item 2" />,
        );
        expect(component.find('li').prop('className')).toBe('rainbow-menu-item');
    });
});
