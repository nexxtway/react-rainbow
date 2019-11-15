import React from 'react';
import { mount } from 'enzyme';
import Indicator from '../indicators/indicator';
import StyledIndicatorButton from '../styled/indicatorButton';

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
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.exists()).toBe(true);
        expect(buttonComponent.prop('aria-selected')).toBe(true);
        expect(buttonComponent.prop('tabIndex')).toBe(0);
        expect(buttonComponent.prop('isSelected')).toBe(true);
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
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.prop('aria-selected')).toBe(false);
        expect(buttonComponent.prop('tabIndex')).toBe(-1);
    });
    it('should set the assistive text as title to the button element', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header="Header"
            />,
        );
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.text()).toBe('Header Tab');
        expect(buttonComponent.prop('title')).toBe('Header Tab');
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
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.text()).toBe('');
        expect(buttonComponent.prop('title')).toBe(undefined);
    });
    it('should set the role as tab in button element', () => {
        const component = mount(
            <Indicator
                selectedItem="indicator-1"
                indicatorID="indicator-1"
                containerID="container-1"
                header={<span>Header</span>}
            />,
        );
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.prop('role')).toBe('tab');
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
        const buttonComponent = component.find(StyledIndicatorButton);

        expect(buttonComponent.prop('id')).toBe('indicator-1');
        expect(buttonComponent.prop('aria-controls')).toBe('container-1');
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
        const buttonComponent = component.find(StyledIndicatorButton);
        buttonComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledWith('indicator-1');
    });
});
