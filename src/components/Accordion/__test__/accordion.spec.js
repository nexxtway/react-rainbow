import React from 'react';
import { mount } from 'enzyme';
import Accordion from './../index';
import AccordionSection from '../../AccordionSection';
import StyledContent from '../../AccordionSection/styled/content';

describe('<Accordion />', () => {
    it('should set the right "state" when onToggleSection is passed and it is not a function', () => {
        const component = mount(
            <Accordion onToggleSection="string">
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const buttonComponent = component.find('ButtonIcon');
        buttonComponent.simulate('click');

        expect(component.state('activeNames')).toEqual('accordion-test-1');
    });
    it('should set the right "state" when multiple is passed', () => {
        const activeNames = ['accordion-test-1'];
        const component = mount(
            <Accordion multiple activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('ButtonIcon');
        secondAccordionSectionButton.simulate('click');

        expect(component.state('activeNames')).toEqual(['accordion-test-1', 'accordion-test-2']);
    });
    it('should not fire an event when click in the AccordionSection and disabled is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <Accordion onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection disabled name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const buttonComponent = component.find('ButtonIcon');
        buttonComponent.simulate('click');

        expect(handleToggleSectionMockFn).toHaveBeenCalledTimes(0);
    });
    it('should fire an event with the right arguments when click in the AccordionSection and multiple is not passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <Accordion onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const buttonComponent = component.find('ButtonIcon');
        buttonComponent.simulate('click');

        expect(handleToggleSectionMockFn).toHaveBeenCalledWith(
            expect.any(Object),
            'accordion-test-1',
        );
    });
    it('should fire an event with the right arguments when click in the second AccordionSection and multiple is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1'];
        const component = mount(
            <Accordion
                multiple
                activeSectionNames={activeNames}
                onToggleSection={handleToggleSectionMockFn}
            >
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('ButtonIcon');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn).toHaveBeenCalledWith(expect.any(Object), [
            'accordion-test-1',
            'accordion-test-2',
        ]);
    });
    it('should fire an event with the right arguments when click in the expanded first AccordionSection', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = 'accordion-test-1';
        const component = mount(
            <Accordion activeSectionNames={activeNames} onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const firstAccordionSection = component.find('ul').childAt(0);
        const firstAccordionSectionButton = firstAccordionSection.find('ButtonIcon');
        firstAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual('');
    });
    it('should fire an event with the right arguments when click in the second AccordionSection, multiple is passed and both AccordionSection are expanded', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1', 'accordion-test-2'];
        const component = mount(
            <Accordion
                multiple
                activeSectionNames={activeNames}
                onToggleSection={handleToggleSectionMockFn}
            >
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('ButtonIcon');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-1']);
    });
    it('should fire an event with the right arguments when click in the second AccordionSection, it is collapsed for the first time and multiple is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <Accordion multiple onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('ButtonIcon');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-2']);
    });
    it('should set ariaExpanded to true in button when the AccordionSection is expanded', () => {
        const activeNames = 'accordion-test-1';
        const component = mount(
            <Accordion activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const button = component.find('ButtonIcon');

        expect(button.prop('ariaExpanded')).toBe(true);
    });
    it('should set ariaExpanded to false in button when the AccordionSection is collapsed', () => {
        const component = mount(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">AccordionSection-1</AccordionSection>
            </Accordion>,
        );
        const button = component.find('ButtonIcon');

        expect(button.prop('ariaExpanded')).toBe(false);
    });
    it('should set aria-hidden to false in container of the content when the content is expanded', () => {
        const activeNames = 'accordion-test-1';
        const component = mount(
            <Accordion activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const contentContainer = component.find(StyledContent);

        expect(contentContainer.prop('aria-hidden')).toBe(false);
    });
});
