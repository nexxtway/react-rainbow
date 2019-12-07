import React from 'react';
import { mount } from 'enzyme';
import Options from '../';
import StyledHeaderLi from '../styled/headerLi';

describe('<Options />', () => {
    it('should render the empty message when items is an empty array', () => {
        const component = mount(<Options items={[]} value="abc" />);
        expect(component.find('div').text()).toBe('Our robots did not find any match for "abc"');
    });
    it('should render the options list when there are items', () => {
        const component = mount(<Options items={[{}]} />);
        expect(component.find('ul').exists()).toBe(true);
    });
    it('should set the right height to the ul element', () => {
        const values = [[{}], [{}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}, {}, {}]];
        const expects = [48, 96, 192, 288];
        values.forEach((items, index) => {
            const component = mount(<Options items={items} itemHeight={48} />);
            expect(component.find('ul').prop('style').height).toBe(expects[index]);
        });
    });
    it('should set the right max height to the ul element when size is not passed', () => {
        const component = mount(<Options items={[{}]} />);
        expect(component.find('ul').prop('style').maxHeight).toBe(240);
    });
    it('should set the right max height to the ul element when size is small', () => {
        const component = mount(<Options items={[{}]} size="small" />);
        expect(component.find('ul').prop('style').maxHeight).toBe(144);
    });
    it('should set the right max height to the ul element when size is medium', () => {
        const component = mount(<Options items={[{}]} size="medium" />);
        expect(component.find('ul').prop('style').maxHeight).toBe(240);
    });
    it('should set the right max height to the ul element when size is large', () => {
        const component = mount(<Options items={[{}]} size="large" />);
        expect(component.find('ul').prop('style').maxHeight).toBe(384);
    });
    it('should set the right max height to the ul element when a wrong size is passed', () => {
        const component = mount(<Options items={[{}]} size="wrong size" />);
        expect(component.find('ul').prop('style').maxHeight).toBe(240);
    });
    it('should render the amount of menu items passed as items', () => {
        const component = mount(<Options items={[{}, {}, {}]} />);
        expect(component.find('MenuItem').children().length).toBe(3);
    });
    it('should set the right isActive in the items when a focusedItemIndex is passed', () => {
        const component = mount(<Options items={[{}, {}, {}]} focusedItemIndex={1} />);
        expect(
            component
                .find('MenuItem')
                .at(0)
                .prop('isActive'),
        ).toBe(false);
        expect(
            component
                .find('MenuItem')
                .at(1)
                .prop('isActive'),
        ).toBe(true);
        expect(
            component
                .find('MenuItem')
                .at(2)
                .prop('isActive'),
        ).toBe(false);
    });
    it('should render a header item when has type "header"', () => {
        const items = [
            {
                type: 'header',
                label: 'header item',
            },
        ];
        const component = mount(<Options items={items} />);
        expect(component.find(StyledHeaderLi).exists()).toBe(true);
        expect(component.find(StyledHeaderLi).text()).toBe('header item');
    });
    it('should fire an event with the right data when click an item', () => {
        const items = [{ label: 'London', description: 'awesome city' }, { label: 'Moscow' }];
        const onSelectOptionMockFn = jest.fn();
        const component = mount(<Options items={items} onSelectOption={onSelectOptionMockFn} />);
        component
            .find('li[role="presentation"]')
            .at(1)
            .simulate('mousedown');
        expect(onSelectOptionMockFn).toHaveBeenCalledWith({ label: 'Moscow' });
    });
    it('should fire an event with the right data when hover an item', () => {
        const items = [{ label: 'London', description: 'awesome city' }, { label: 'Moscow' }];
        const onHoverOptionMockFn = jest.fn();
        const component = mount(<Options items={items} onHoverOption={onHoverOptionMockFn} />);
        component
            .find('li[role="presentation"]')
            .at(1)
            .simulate('mouseEnter');
        expect(onHoverOptionMockFn).toHaveBeenCalledWith(1);
    });
    it('should call preventDefault when click in a header option', () => {
        const event = {
            preventDefault: jest.fn(),
        };
        const items = [
            {
                type: 'header',
                label: 'header option',
            },
            {
                label: 'Moscow',
            },
        ];
        const component = mount(<Options items={items} />);
        component.find(StyledHeaderLi).simulate('mouseDown', event);
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
});
