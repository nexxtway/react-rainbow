import React from 'react';
import { mount } from 'enzyme';
import VerticalSectionOverflow from './../';

describe('<VerticalSectionOverflow/>', () => {
    it('should change the isExpanded state when the button element is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.state().isExpanded).toBe(false);
        component.find('button').simulate('click');
        expect(component.state().isExpanded).toBe(true);
    });
    it('should change the isExpanded state when the button element is clicked and the expanded is set to true', () => {
        const component = mount(
            <VerticalSectionOverflow expanded />,
        );
        expect(component.state().isExpanded).toBe(true);
        component.find('button').simulate('click');
        expect(component.state().isExpanded).toBe(false);
    });
    it('should set a generated id as aria-controls in button element and as id in the overflow container', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('button').prop('aria-controls')).toMatch(/search-results/);
        expect(component.find('div[data-id="vertical-overflow"]').prop('id')).toMatch(/search-results/);
    });
    it('should set the aria-expanded in the button element to false initially', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('button').prop('aria-expanded')).toBe(false);
    });
    it('should set the aria-expanded in the button element to true if expanded is passed', () => {
        const component = mount(
            <VerticalSectionOverflow expanded />,
        );
        expect(component.find('button').prop('aria-expanded')).toBe(true);
    });
    it('should set the aria-expanded in the button element to true if it is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('button').prop('aria-expanded')).toBe(false);
        component.find('button').simulate('click');
        expect(component.find('button').prop('aria-expanded')).toBe(true);
    });
    it('should render the left icon when a left icon is passed', () => {
        const component = mount(
            <VerticalSectionOverflow leftIcon={<svg data-id="left-icon" />} />,
        );
        expect(component.find('svg[data-id="left-icon"]').exists()).toBe(true);
    });
    it('should render the right icon when a right icon is passed', () => {
        const component = mount(
            <VerticalSectionOverflow rightIcon={<svg data-id="right-icon" />} />,
        );
        expect(component.find('svg[data-id="right-icon"]').exists()).toBe(true);
    });
    it('should render the left and right icon when a left and right icon are passed', () => {
        const component = mount(
            <VerticalSectionOverflow leftIcon={<svg data-id="left-icon" />} rightIcon={<svg data-id="right-icon" />} />,
        );
        expect(component.find('svg[data-id="left-icon"]').exists()).toBe(true);
        expect(component.find('svg[data-id="right-icon"]').exists()).toBe(true);
    });
    it('should pass the right props to Description component when use default values', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('Description').props()).toEqual({
            description: '',
            isExpanded: false,
        });
    });
    it('should pass the right props to Description component when the respective props are passed', () => {
        const component = mount(
            <VerticalSectionOverflow description="collapsed label" expanded />,
        );
        expect(component.find('Description').props()).toEqual({
            description: 'collapsed label',
            isExpanded: true,
        });
    });
    it('should set the isExpanded prop in Description component to true when the the button is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('Description').prop('isExpanded')).toBe(false);
        component.find('button').simulate('click');
        expect(component.find('Description').prop('isExpanded')).toBe(true);
    });
    it('should set the assistiveText passed as text in AssistiveText component', () => {
        const component = mount(
            <VerticalSectionOverflow assistiveText="description text" />,
        );
        expect(component.find('AssistiveText').prop('text')).toBe('description text');
    });
    it('should set the right className in the overflow container when is closed', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('rainbow-nav-certical-overflow-hide');
    });
    it('should set the right className in the overflow container when expanded is passed', () => {
        const component = mount(
            <VerticalSectionOverflow expanded />,
        );
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('rainbow-nav-certical-overflow-show');
    });
    it('should set the right className in the overflow container when the button is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('rainbow-nav-certical-overflow-hide');
        component.find('button').simulate('click');
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('rainbow-nav-certical-overflow-show');
    });
    it('should render the children passed', () => {
        const component = mount(
            <VerticalSectionOverflow>
                <span>the section children</span>
            </VerticalSectionOverflow>,
        );
        expect(component.find('ul').text()).toBe('the section children');
    });
});
