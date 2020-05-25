import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Sidebar';
import SidebarItem from '../index';

describe('<SidebarItem when href is passed />', () => {
    it('should have aria-current of page if isSelected', () => {
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-2">
                <SidebarItem
                    href="/#/Components"
                    icon={<FontAwesomeIcon icon={faClock} />}
                    name="sidebaritem-test-2"
                    label="sidebaritem-test-2"
                />
            </Sidebar>,
        );
        expect(component.find('a').prop('aria-current')).toBe('page');
    });
    it('should fire an event when click in SidebarItem', () => {
        const handleOnClickMockFn = jest.fn();
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-3">
                <SidebarItem
                    href="/#/Components"
                    icon={<FontAwesomeIcon icon={faClock} />}
                    name="sidebaritem-test-3"
                    label="sidebaritem-test-3"
                    onClick={handleOnClickMockFn}
                />
            </Sidebar>,
        );
        const sidebarLink = component.find('a');
        sidebarLink.simulate('click');
        expect(handleOnClickMockFn).toHaveBeenCalledTimes(1);
    });
    it('should render the right icon when the item is selected', () => {
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-4">
                <SidebarItem
                    href="/#/Components"
                    icon={<FontAwesomeIcon icon={faUser} />}
                    selectedIcon={<FontAwesomeIcon icon={faClock} />}
                    name="sidebaritem-test-4"
                    label="sidebaritem-test-4"
                />
            </Sidebar>,
        );
        const sidebarLink = component.find('a');
        sidebarLink.simulate('click');
        expect(component.find(FontAwesomeIcon).prop('icon')).toBe(faClock);
    });
});

describe('<SidebarItem when href is not passed />', () => {
    it('should have aria-current of page if isSelected', () => {
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-2">
                <SidebarItem
                    icon={<FontAwesomeIcon icon={faClock} />}
                    name="sidebaritem-test-2"
                    label="sidebaritem-test-2"
                />
            </Sidebar>,
        );
        expect(component.find('button').prop('aria-current')).toBe('page');
    });
    it('should fire an event when click in SidebarItem', () => {
        const handleOnClickMockFn = jest.fn();
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-3">
                <SidebarItem
                    icon={<FontAwesomeIcon icon={faClock} />}
                    name="sidebaritem-test-3"
                    label="sidebaritem-test-3"
                    onClick={handleOnClickMockFn}
                />
            </Sidebar>,
        );
        const sidebarLink = component.find('button');
        sidebarLink.simulate('click');
        expect(handleOnClickMockFn).toHaveBeenCalledTimes(1);
    });
    it('should render the right icon when the item is selected', () => {
        const component = mount(
            <Sidebar selectedItem="sidebaritem-test-4">
                <SidebarItem
                    icon={<FontAwesomeIcon icon={faClock} />}
                    selectedIcon={<FontAwesomeIcon icon={faUser} />}
                    name="sidebaritem-test-4"
                    label="sidebaritem-test-4"
                />
            </Sidebar>,
        );
        const sidebarLink = component.find('button');
        sidebarLink.simulate('click');
        expect(component.find(FontAwesomeIcon).prop('icon')).toBe(faUser);
    });
});
