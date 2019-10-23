import React from 'react';
import { mount } from 'enzyme';
import VerticalNavigation from './../';
import VerticalSection from './../../VerticalSection';
import VerticalSectionOverflow from './../../VerticalSectionOverflow';
import VerticalItem from './../../VerticalItem';

describe('<VerticalNavigation/>', () => {
    it('should set the ariaLabel passed as aria-label in the nav element', () => {
        const component = mount(<VerticalNavigation ariaLabel="my aria label" />);
        expect(component.find('nav').prop('aria-label')).toBe('my aria label');
    });
    it('should render the children passed', () => {
        const component = mount(
            <VerticalNavigation>
                <span>item children</span>
            </VerticalNavigation>,
        );
        expect(component.find('span').text()).toBe('item children');
    });
    it('should set the rainbow-is-active class only to the third VerticalItem when selectedItem is item 3', () => {
        const component = mount(
            <VerticalNavigation selectedItem="item 3">
                <VerticalSection label="header section">
                    <VerticalItem name="item 1" label="item 1" />
                    <VerticalItem name="item 2" label="item 2" />
                    <VerticalItem name="item 3" label="item 3" />
                </VerticalSection>
            </VerticalNavigation>,
        );
        const item1 = component.find('VerticalItem[name="item 1"]').find('li');
        const item2 = component.find('VerticalItem[name="item 2"]').find('li');
        const item3 = component.find('VerticalItem[name="item 3"]').find('li');
        expect(item1.prop('className')).toBe('rainbow-vertical-item');
        expect(item2.prop('className')).toBe('rainbow-vertical-item');
        expect(item3.prop('className')).toBe('rainbow-vertical-item rainbow-vertical-item--active');
    });
    it('should call onSelect event with the right data when an item is clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <VerticalNavigation onSelect={onSelectMockFn}>
                <VerticalSection label="header section">
                    <VerticalItem name="item 1" label="item 1" />
                    <VerticalItem name="item 2" label="item 2" />
                    <VerticalItem name="item 3" label="item 3" />
                </VerticalSection>
            </VerticalNavigation>,
        );
        const item2 = component.find('VerticalItem[name="item 2"]').find('a');
        item2.simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item 2');
    });
    it('should set tabIndex 0 in anchor element when use VerticalSection', () => {
        const component = mount(
            <VerticalNavigation>
                <VerticalSection label="header section">
                    <VerticalItem name="item 1" label="item 1" />
                </VerticalSection>
            </VerticalNavigation>,
        );
        expect(component.find('a').prop('tabIndex')).toBe(0);
    });
    it('should set tabIndex 0 in anchor element when use VerticalSectionOverflow and expanded is true', () => {
        const component = mount(
            <VerticalNavigation>
                <VerticalSectionOverflow expanded>
                    <VerticalItem name="item 1" label="item 1" />
                </VerticalSectionOverflow>
            </VerticalNavigation>,
        );
        expect(component.find('a').prop('tabIndex')).toBe(0);
    });
    it('should set tabIndex -1 in anchor element when use VerticalSectionOverflow and expanded is false', () => {
        const component = mount(
            <VerticalNavigation>
                <VerticalSectionOverflow expanded={false}>
                    <VerticalItem name="item 1" label="item 1" />
                </VerticalSectionOverflow>
            </VerticalNavigation>,
        );
        expect(component.find('a').prop('tabIndex')).toBe(-1);
    });
});
