import React from 'react';
import { mount } from 'enzyme';
import Tab from '../';

const registerTabMockFn = jest.fn();

describe('<Tab />', () => {
    it('should set the right class names when activeTaName is tab-1', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" registerTab={registerTabMockFn} />);

        expect(component.find('li.rainbow-tab.rainbow-tab--active').exists()).toBe(true);
    });
    it('should set the right class names when disabled is passed', () => {
        const component = mount(<Tab name="tab-1" disabled registerTab={registerTabMockFn} />);

        expect(component.find('li.rainbow-tab.rainbow-tab--disabled').exists()).toBe(true);
    });
    it('should set the right class names when custom class name is passed', () => {
        const component = mount(<Tab name="tab-1" className="custom-class-name" registerTab={registerTabMockFn} />);

        expect(component.find('li.rainbow-tab.custom-class-name').exists()).toBe(true);
    });
    it('should call onSelect when clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(<Tab name="tab-1" onSelect={onSelectMockFn} registerTab={registerTabMockFn} />);
        const aComponent = component.find('a');
        aComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledWith('tab-1');
    });
    it('should not call onSelect when clicked if disabled is passed', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(<Tab name="tab-1" onSelect={onSelectMockFn} disabled registerTab={registerTabMockFn} />);
        const anchor = component.find('a');
        anchor.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledTimes(0);
    });
    it('should set role to presentation in li element.', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const listItem = component.find('li');

        expect(listItem.prop('role')).toBe('presentation');
    });
    it('should set the title passed as title in li element.', () => {
        const component = mount(<Tab name="tab-1" title="tab 1" activeTabName="tab-2" />);
        const listItem = component.find('li');

        expect(listItem.prop('title')).toBe('tab 1');
    });
    it('should set role to tab in a element.', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const anchor = component.find('a');

        expect(anchor.prop('role')).toBe('tab');
    });
    it('should set aria-selected to true in a element when the tab is selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('aria-selected')).toBe(true);
    });
    it('should set tabIndex to 0 in a element when tab is selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('tabIndex')).toBe(0);
    });
    it('should set tabIndex to -1 in a element when tab is not selected', () => {
        const component = mount(<Tab name="tab-1" activeTabName="tab-2" />);
        const anchor = component.find('a');

        expect(anchor.prop('tabIndex')).toBe(-1);
    });
    it('should set id in tha a element.', () => {
        const component = mount(<Tab name="tab-1" id="tab 1" />);
        const anchor = component.find('a');

        expect(anchor.prop('id')).toBe('tab 1');
    });
    it('should set id in tha a element.', () => {
        const component = mount(<Tab name="tab-1" ariaControls="tab-content-1" />);
        const anchor = component.find('a');

        expect(anchor.prop('aria-controls')).toBe('tab-content-1');
    });
});
