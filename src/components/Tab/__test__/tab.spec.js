import React from 'react';
import { mount } from 'enzyme';
import Tab from '../';

describe('<Tab />', () => {
    it('should set the right class names when activeTaName is tab-1', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" />);

        expect(component.find('a.rainbow-tab_anchor.rainbow-tab--active').exists()).toBe(true);
    });
    it('should set the right class names when disabled is passed', () => {
        const component = mount(<Tab name="tab-1" disabled />);

        expect(component.find('a.rainbow-tab_anchor.rainbow-tab--disabled').exists()).toBe(true);
    });
    it('should set the right class names when custom class name is passed', () => {
        const component = mount(<Tab name="tab-1" className="custom-class-name" />);

        expect(component.find('li.rainbow-tab.custom-class-name').exists()).toBe(true);
    });
    it('should call onSelect when clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(<Tab name="tab-1" onSelect={onSelectMockFn} />);
        const aComponent = component.find('a');
        aComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'tab-1');
    });
    it('should not call onSelect when clicked if disabled is passed', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(<Tab name="tab-1" onSelect={onSelectMockFn} disabled />);
        const anchor = component.find('a');
        anchor.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledTimes(0);
    });
    it('should set role to presentation in li.', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const listItem = component.find('li');

        expect(listItem.prop('role')).toBe('presentation');
    });
    it('should set the title passed as title in li.', () => {
        const component = mount(<Tab name="tab-1" title="tab 1" activeTabName="tab-2" />);
        const listItem = component.find('li');

        expect(listItem.prop('title')).toBe('tab 1');
    });
    it('should set role to tab in a.', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const anchor = component.find('a');

        expect(anchor.prop('role')).toBe('tab');
    });
    it('should set aria-selected to true in a when the tab is selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('aria-selected')).toBe(true);
    });
    it('should set tabIndex to 0 in a when tab is selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('tabIndex')).toBe(0);
    });
    it('should set tabIndex to -1 in a when tab is not selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const anchor = component.find('a');

        expect(anchor.prop('tabIndex')).toBe(-1);
    });
    it('should set id in tha a.', () => {
        const component = mount(<Tab name="tab-1" id="tab 1" />);
        const anchor = component.find('a');

        expect(anchor.prop('id')).toBe('tab 1');
    });
    it('should set id in tha a.', () => {
        const component = mount(<Tab name="tab-1" ariaControls="tab-content-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('aria-controls')).toBe('tab-content-1');
    });
    it('should call privateUpdateTab function with right data when a tab is changed', () => {
        const privateUpdateTabMockFn = jest.fn();
        const component = mount(
            <Tab label="Tab-1" name="tab-1" privateUpdateTab={privateUpdateTabMockFn} />,
        );
        component.setProps({ name: 'tab-2' });
        const newData = {
            name: 'tab-2',
            ref: expect.any(Object),
        };
        const prevName = 'tab-1';
        expect(privateUpdateTabMockFn).toHaveBeenCalledWith(newData, prevName);
    });
    it('should not call privateUpdateTab function if any tab is changed', () => {
        const privateUpdateTabMockFn = jest.fn();
        const component = mount(
            <Tab label="Tab-1" name="tab-1" privateUpdateTab={privateUpdateTabMockFn} />,
        );
        component.setProps({ name: 'tab-1' });
        expect(privateUpdateTabMockFn).toHaveBeenCalledTimes(0);
    });
});
