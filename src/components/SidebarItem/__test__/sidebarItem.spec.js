import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Sidebar';
import SidebarItem from '../index';

describe('<SidebarItem />', () => {
    it('should add className rainbow-sidebar-item--active if isSelected ', () => {
        const component = mount(
            <Sidebar selectedItem="item-1">
                <SidebarItem
                    icon={<FontAwesomeIcon icon={faClock} />}
                    name="item-1"
                    label="item-1"
                />
                <SidebarItem icon={<FontAwesomeIcon icon={faCog} />} name="item-2" label="item-2" />
                <SidebarItem
                    icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    name="item-3"
                    label="item-3"
                />
            </Sidebar>,
        );
        expect(
            component
                .find('li[className="rainbow-sidebar-item rainbow-sidebar-item--active"]')
                .exists(),
        ).toBe(true);
    });
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
        expect(component.find('a').prop('aria-current')).toBe('page');
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
        const sidebarLink = component.find('a');
        sidebarLink.simulate('click');
        expect(handleOnClickMockFn).toHaveBeenCalledTimes(1);
    });
});
