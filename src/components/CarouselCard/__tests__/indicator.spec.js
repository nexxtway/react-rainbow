import React from 'react';
import { mount } from 'enzyme';
import Indicator from '../indicators/indicator';

describe('<Indicator />', () => {
    it('should set the right props if the indicator is selected', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
            />,
        );
        const anchorComponent = component.find(
            'a.rainbow-carousel_indicator.rainbow-carousel_indicator--active',
        );

        expect(anchorComponent.exists()).toBe(true);
        expect(anchorComponent.prop('aria-selected')).toBe(true);
        expect(anchorComponent.prop('tabIndex')).toBe(0);
    });
    it('should set the right props if the indicator is not selected', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-2"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.prop('aria-selected')).toBe(false);
        expect(anchorComponent.prop('tabIndex')).toBe(-1);
    });
    it('should set the assistive text as title to the anchor element', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.text()).toBe('Header Tab');
        expect(anchorComponent.prop('title')).toBe('Header Tab');
    });
    it('should set title and text in AssistiveText to undefined when header is not a string', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header={<span>Header</span>}
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.text()).toBe('');
        expect(anchorComponent.prop('title')).toBe(undefined);
    });
    it('should set the role as tab in anchor element', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header={<span>Header</span>}
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.prop('role')).toBe('tab');
    });
    it('should set the right accesivillity props', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.prop('id')).toBe('indicator-1');
        expect(anchorComponent.prop('aria-controls')).toBe('container-1');
    });
    it('should call the function passed in onSelect prop', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
                onSelect={onSelectMockFn}
            />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');
        anchorComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledWith('indicator-1');
    });
});
