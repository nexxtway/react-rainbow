import React from 'react';
import { mount } from 'enzyme';
import VerticalItem from './../';

describe('<VerticalItem/>', () => {
    it('should pass the right props to li container', () => {
        const component = mount(
            <VerticalItem label="item 1" name="item1" />,
        );
        expect(component.find('li').props()).toEqual(expect.objectContaining({
            className: 'rainbow-nav-vertical__item',
            role: 'presentation',
            onClick: expect.any(Function),
        }));
    });
    it('should set the rainbow-is-active className to li container when the item is selected', () => {
        const component = mount(
            <VerticalItem label="item 1" name="item1" selectedItem="item1" />,
        );
        expect(component.find('li').prop('className')).toBe('rainbow-nav-vertical__item rainbow-is-active');
    });
    it('should pass the right props to anchor element', () => {
        const component = mount(
            <VerticalItem label="item 1" name="item1" href="/page/to/go" />,
        );
        expect(component.find('a').props()).toEqual(expect.objectContaining({
            href: '/page/to/go',
            className: 'rainbow-nav-vertical__action',
            'aria-current': undefined,
        }));
    });
    it('should set the aria-current as page in anchor element when the item is selected', () => {
        const component = mount(
            <VerticalItem label="item 1" name="item1" selectedItem="item1" />,
        );
        expect(component.find('a').prop('aria-current')).toBe('page');
    });
    it('should pass the icon passed to the Icon component', () => {
        const icon = <svg />;
        const component = mount(
            <VerticalItem label="item 1" name="item1" icon={icon} />,
        );
        expect(component.find('Icon').prop('icon')).toBe(icon);
    });
    it('should render the label passed', () => {
        const component = mount(
            <VerticalItem label="item label" name="item1" />,
        );
        expect(component.find('a').text()).toBe('item label');
    });
    it('should pass the notification passed to the Notification component', () => {
        const component = mount(
            <VerticalItem label="item 1" name="item1" notification="23" />,
        );
        expect(component.find('Notification').prop('notification')).toBe('23');
    });
    it('should fire an event onClick when the item is clicked', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <VerticalItem label="item 1" name="item35" onClick={onClickMockFn} onSelect={() => {}} />,
        );
        component.find('li').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should fire an event onSelect when the item is clicked', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <VerticalItem label="item 1" name="item35" onSelect={onSelectMockFn} />,
        );
        component.find('li').simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item35');
    });
});
