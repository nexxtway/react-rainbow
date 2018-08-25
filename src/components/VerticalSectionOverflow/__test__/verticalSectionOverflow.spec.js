import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
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
    it('should pass the right props to the IconSvg component', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('IconSvg').props()).toEqual({
            iconName: 'utility:chevronright',
            className: 'slds-button__icon slds-button__icon_left',
        });
    });
    it('should pass the right props to Label component when use default values', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('Label').props()).toEqual({
            collapsedLabel: 'Show More',
            expandedLabel: 'Show Less',
            isExpanded: false,
        });
    });
    it('should pass the right props to Label component when the respective props are passed', () => {
        const component = mount(
            <VerticalSectionOverflow collapsedLabel="collapsed label" expandedLabel="expanded label" expanded />,
        );
        expect(component.find('Label').props()).toEqual({
            collapsedLabel: 'collapsed label',
            expandedLabel: 'expanded label',
            isExpanded: true,
        });
    });
    it('should set the isExpanded prop in Label component to true when the the button is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('Label').prop('isExpanded')).toBe(false);
        component.find('button').simulate('click');
        expect(component.find('Label').prop('isExpanded')).toBe(true);
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
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('slds-hide');
    });
    it('should set the right className in the overflow container when expanded is passed', () => {
        const component = mount(
            <VerticalSectionOverflow expanded />,
        );
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('slds-show');
    });
    it('should set the right className in the overflow container when the button is clicked', () => {
        const component = mount(
            <VerticalSectionOverflow />,
        );
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('slds-hide');
        component.find('button').simulate('click');
        expect(component.find('div[data-id="vertical-overflow"]').prop('className')).toBe('slds-show');
    });
    it('should render the children passed', () => {
        const component = mount(
            <VerticalSectionOverflow>
                <span>the section children</span>
            </VerticalSectionOverflow>,
        );
        expect(component.find('ul').text()).toBe('the section children');
    });
    it('should have the right class names when a custom className is passed', () => {
        const component = renderer.create(
            <VerticalSectionOverflow className="custom-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
});
