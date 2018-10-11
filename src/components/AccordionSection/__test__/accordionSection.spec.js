import React from 'react';
import { mount } from 'enzyme';
import AccordionSection from '../index';

describe('<AccordionSection />', () => {
    it('should set the right class names', () => {
        const component = mount(
            <AccordionSection />,
        );

        expect(component.find('li').prop('className')).toBe('rainbow-accordion-section_container');
    });
    it('should set the right class names when disabled is passed', () => {
        const component = mount(
            <AccordionSection disabled />,
        );

        expect(component.find('li').prop('className')).toBe('rainbow-accordion-section_container rainbow-accordion-section_container--disabled');
    });
});
