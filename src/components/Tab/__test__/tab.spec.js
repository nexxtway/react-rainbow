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
        const aComponent = component.find('a');
        aComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledTimes(0);
    });
});
