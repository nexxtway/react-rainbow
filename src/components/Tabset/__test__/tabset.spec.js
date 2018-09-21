import React from 'react';
import { mount } from 'enzyme';
import Tabset from '../index';
import Tab from '../../Tab';

const registerTabMockFn = jest.fn();

describe('<Tabset />', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Tabset>
                testing tabset
            </Tabset>,
        );
        expect(component.text()).toBe('testing tabset');
    });
    it('should set the rainbow-tab--active class only to the third Tab when activeTabName is tab-3', () => {
        const component = mount(
            <Tabset activeTabName="tab-3">
                <Tab label="Tab-1" name="tab-1" registerTab={registerTabMockFn} />
                <Tab label="Tab-2" name="tab-2" registerTab={registerTabMockFn} />
                <Tab label="Tab-3" name="tab-3" registerTab={registerTabMockFn} />
            </Tabset>,
        );
        const item1 = component.find('Tab[name="tab-1"]').find('li');
        const item2 = component.find('Tab[name="tab-2"]').find('li');
        const item3 = component.find('Tab[name="tab-3"]').find('li');
        expect(item1.prop('className')).toBe('rainbow-tab');
        expect(item2.prop('className')).toBe('rainbow-tab');
        expect(item3.prop('className')).toBe('rainbow-tab rainbow-tab--active');
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
        const item2 = component.find('Tab[name="tab-2"]').find('a');
        item2.simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith('tab-2');
    });
});
