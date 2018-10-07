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
    it('should set the right class names when custom class name is passed', () => {
        const component = mount(
            <AccordionSection className="my-custom-class-name" />,
        );

        expect(component.find('li').prop('className')).toBe('rainbow-accordion-section_container my-custom-class-name');
    });
    it('should not fire an event when click in the AccordionSection if disabled is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <AccordionSection onToggleSection={handleToggleSectionMockFn} disabled />,
        );
        const buttonComponent = component.find('ButtonIcon');
        buttonComponent.simulate('click');

        expect(handleToggleSectionMockFn).toHaveBeenCalledTimes(0);
    });
});
