import React from 'react';
import { mount } from 'enzyme';
import Tabset from '../index';
import Tab from '../../Tab';
import {
    getLeftButtonDisabledState,
    getRightButtonDisabledState,
    isNotSameChildren,
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
        expect(component.find('div').prop('className')).toBe('rainbow-tabset my-custom-class-name');
    });
    it('should have the right class names when fullWidth prop is passed', () => {
        const component = mount(
            <Tabset fullWidth>
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        expect(component.find('ul').prop('className')).toBe('rainbow-tabset_inner-container rainbow-tabset_inner-container--full-width');
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
        component.instance().tabsetRef.current.scrollTo = jest.fn();
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
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        component.instance().updateButtonsVisibility = jest.fn();
        component.instance().isFirstTime = false;
        component.setProps();
        expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(1);
    });
    it('should call updateButtonsVisibility function and set is isFirstTime to false when all children are registered and is first time', () => {
        isNotSameChildren.mockReset();
        isNotSameChildren.mockReturnValue(false);
        const component = mount(
            <Tabset activeTabName="tab-1">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        component.instance().updateButtonsVisibility = jest.fn();
        component.instance().isFirstTime = true;
        component.setState({
            tabsetChildren: [
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />,
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />,
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />,
            ],
        });
        component.setProps({
            children: [
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
        component.instance().tabsetRef.current.scrollTo = jest.fn();
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
        component.instance().tabsetRef.current.scrollTo = jest.fn();
        component.setState({ areButtonsVisible: true });
        const leftButton = component.find('button').at(1);
        expect(leftButton.prop('disabled')).toBe(true);
    });
});
