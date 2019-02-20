import React from 'react';
import { mount } from 'enzyme';
import Badge from './../index';

describe('<Badge/>', () => {
    it('should set the label passed as children', () => {
        const component = mount(
            <Badge label="Testing Label in Badge" />,
        );
        expect(component.find('span.rainbow-badge').text()).toBe('Testing Label in Badge');
    });
    it('should not render the "Badge" when label and children are not passed', () => {
        const component = mount(
            <Badge />,
        );
        expect(component.find('span.rainbow-badge').exists()).toBe(false);
    });
    it('should have the right class names when variant is not passed', () => {
        const component = mount(
            <Badge label="Badge Label" />,
        );
        expect(component.find('span.rainbow-badge').exists()).toBe(true);
    });
    it('should have the right class names when variant default and have a custom class', () => {
        const component = mount(
            <Badge label="Badge Label" variant="default" className="my-custom-class-name" />,
        );
        expect(component.find('span.rainbow-badge.my-custom-class-name').exists()).toBe(true);
    });
    it('should have the right class names when variant brand', () => {
        const component = mount(
            <Badge label="Badge Label" variant="brand" />,
        );
        expect(component.find('span.rainbow-badge.rainbow-badge--brand').exists()).toBe(true);
    });
    it('should have the right class names when variant outline-brand', () => {
        const component = mount(
            <Badge label="Badge Label" variant="outline-brand" />,
        );
        expect(component.find('span.rainbow-badge.rainbow-badge--outline-brand').exists()).toBe(true);
    });
    it('should have the right class names when variant lightest', () => {
        const component = mount(
            <Badge label="Badge Label" variant="lightest" />,
        );
        expect(component.find('span.rainbow-badge.rainbow-badge--lightest').exists()).toBe(true);
    });
    it('should have the right class names when variant inverse', () => {
        const component = mount(
            <Badge label="Badge Label" variant="inverse" />,
        );
        expect(component.find('span.rainbow-badge.rainbow-badge--inverse').exists()).toBe(true);
    });
});
