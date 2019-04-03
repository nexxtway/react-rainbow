import React from 'react';
import { mount } from 'enzyme';
import Tabset from '../index';
import Tab from '../../Tab';
import {
    getLeftButtonDisabledState,
    getRightButtonDisabledState,
    isNotSameChildren,
    getChildrenTotalWidth,
    getChildrenTotalWidthUpToClickedTab,
    getTabIndexFromName,
} from './../utils';

jest.mock('./../utils.js', () => ({
    getLeftButtonDisabledState: jest.fn(() => false),
    getRightButtonDisabledState: jest.fn(() => false),
    getChildTabNodes: jest.fn(() => []),
    insertChildOrderly: jest.fn(() => []),
    getActiveTabIndex: jest.fn(() => 0),
    getChildrenTotalWidth: jest.fn(() => 0),
    getChildrenTotalWidthUpToClickedTab: jest.fn(() => 0),
    isNotSameChildren: jest.fn(() => false),
    getUpdatedTabsetChildren: jest.fn(() => []),
    getTabIndexFromName: jest.fn(() => 0),
}));

const registerTabMockFn = jest.fn();

describe('<Tabset />', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Tabset>
                <p>testing tabset</p>
            </Tabset>,
        );
        expect(component.find('p').text()).toBe('testing tabset');
    });
    it('should have the right class names', () => {
        const component = mount(
            <Tabset className="my-custom-class-name">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        expect(component.find('.rainbow-tabset.my-custom-class-name').exists()).toBe(true);
    });
    it('should have the right class names when fullWidth prop is passed', () => {
        const component = mount(
            <Tabset fullWidth>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        expect(component.find('ul[role="tablist"]').prop('className')).toBe('rainbow-tabset_inner-container rainbow-tabset_inner-container--full-width');
    });
    it('should set the rainbow-tab--active class only to the third Tab when activeTabName is tab-3', () => {
        const component = mount(
            <Tabset activeTabName="tab-3">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        const item1 = component.find('Tab[name="tab-1"]').find('a');
        const item2 = component.find('Tab[name="tab-2"]').find('a');
        const item3 = component.find('Tab[name="tab-3"]').find('a');
        expect(item1.prop('className')).toBe('rainbow-tab_anchor');
        expect(item2.prop('className')).toBe('rainbow-tab_anchor');
        expect(item3.prop('className')).toBe('rainbow-tab_anchor rainbow-tab--active');
    });
    it('should call onSelect event with the right data when an item is clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Tabset onSelect={onSelectMockFn}>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        const item2 = component.find('Tab[name="tab-2"]').find('a');
        item2.simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'tab-2');
    });
    it('should call scrollToSelectedTab function with the right data when an item is clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Tabset onSelect={onSelectMockFn}>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().scrollToSelectedTab = jest.fn();
        const item1 = component.find('Tab[name="tab-1"]').find('a');
        item1.simulate('click');
        expect(component.instance().scrollToSelectedTab).toHaveBeenCalledWith('tab-1');
    });
    it('should not call updateButtonsVisibility function if any child is changed', () => {
        isNotSameChildren.mockReset();
        isNotSameChildren.mockReturnValue(false);
        const component = mount(
            <Tabset>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().updateButtonsVisibility = jest.fn();
        component.setProps();
        expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(0);
    });
    it('should call updateButtonsVisibility function when a child is changed', () => {
        isNotSameChildren.mockReset();
        isNotSameChildren.mockReturnValue(true);
        const component = mount(
            <Tabset>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().updateButtonsVisibility = jest.fn();
        component.instance().isFirstTime = false;
        component.setProps();
        expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(1);
    });
    it('should call updateButtonsVisibility function and set isFirstTime to false when all children are registered and is first time', () => {
        isNotSameChildren.mockReset();
        isNotSameChildren.mockReturnValue(false);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().updateButtonsVisibility = jest.fn();
        expect(component.instance().isFirstTime).toBe(true);
        component.setState({
            tabsetChildren: [
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />,
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />,
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />,
            ],
        });
        expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(1);
        expect(component.instance().isFirstTime).toBe(false);
    });
    it('should set the left button disabled to true', () => {
        getLeftButtonDisabledState.mockReset();
        getLeftButtonDisabledState.mockReturnValue(true);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.setState({ areButtonsVisible: true });
        const leftButton = component.find('button').at(0);
        expect(leftButton.prop('disabled')).toBe(true);
    });
    it('should set the right button disabled to true', () => {
        getRightButtonDisabledState.mockReset();
        getRightButtonDisabledState.mockReturnValue(true);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.setState({ areButtonsVisible: true });
        const leftButton = component.find('button').at(1);
        expect(leftButton.prop('disabled')).toBe(true);
    });
    it('should set the areButtonsVisible to true when children total width is more than tabset width', () => {
        isNotSameChildren.mockReset();
        getChildrenTotalWidth.mockReturnValue(600);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current = { offsetWidth: 500 };
        component.setState({
            tabsetChildren: [
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />,
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />,
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />,
            ],
        });
        expect(component.state().areButtonsVisible).toBe(true);
    });
    it('should set the areButtonsVisible to false when children total width is less than tabset width', () => {
        isNotSameChildren.mockReset();
        getChildrenTotalWidth.mockReturnValue(500);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current = { offsetWidth: 600 };
        component.setState({
            tabsetChildren: [
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />,
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />,
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />,
            ],
        });
        component.setProps();
        expect(component.state().areButtonsVisible).toBe(false);
    });
    it('should set the right scroll motion when click on the first tab', () => {
        getTabIndexFromName.mockReset();
        getTabIndexFromName.mockReturnValue(0);
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Tabset onSelect={onSelectMockFn} activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        const item1 = component.find('Tab[name="tab-1"]').find('a');
        item1.simulate('click');
        expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(0, 0);
    });
    it('should set the right scroll motion when click on a tab that is out of view on the left side', () => {
        getChildrenTotalWidthUpToClickedTab.mockReset();
        getChildrenTotalWidthUpToClickedTab.mockReturnValue(400);
        getTabIndexFromName.mockReset();
        getTabIndexFromName.mockReturnValue(2);
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Tabset onSelect={onSelectMockFn}>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current = {
            scrollLeft: 600,
            offsetWidth: 600,
        };
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        const item2 = component.find('Tab[name="tab-2"]').find('a');
        item2.simulate('click');
        expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(400, 0);
    });
    it('should set the right scroll motion when click on a tab that is out of view on the right side', () => {
        getChildrenTotalWidthUpToClickedTab.mockReset();
        getChildrenTotalWidthUpToClickedTab.mockReturnValue(500);
        getTabIndexFromName.mockReset();
        getTabIndexFromName.mockReturnValue(2);
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Tabset onSelect={onSelectMockFn}>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current = {
            scrollLeft: 200,
            offsetWidth: 300,
        };
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        const item3 = component.find('Tab[name="tab-3"]').find('a');
        item3.simulate('click');
        expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(220, 0);
    });
});
