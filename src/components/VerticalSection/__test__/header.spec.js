import React from 'react';
import { mount } from 'enzyme';
import Header from './../header';

describe('<VerticalSectionHeader/>', () => {
    it('should not render the label passed when is not passed', () => {
        const component = mount(
            <Header />,
        );
        expect(component.find('h2').exists()).toBe(false);
    });
    it('should render the label passed', () => {
        const component = mount(
            <Header label="header section label" />,
        );
        expect(component.find('h2').exists()).toBe(true);
        expect(component.find('h2').text()).toBe('header section label');
    });
    it('should set the id passed in the h2 element', () => {
        const component = mount(
            <Header label="header section label" id="header-12" />,
        );
        expect(component.find('h2').prop('id')).toBe('header-12');
    });
    it('should pass the right className to h2 element', () => {
        const component = mount(
            <Header label="header section label" />,
        );
        expect(component.find('h2').prop('className')).toBe('slds-nav-vertical__title slds-text-title_caps');
    });
});
