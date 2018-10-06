import React from 'react';
import { mount } from 'enzyme';
import Accordion from './../index';
import AccordionSection from './../../AccordionSection';

describe('<Accordion />', () => {
    it('should set the right "state" when onToggleSection is passed and it is not a function', () => {
        const component = mount(
            <Accordion
                onToggleSection="string">
                <AccordionSection
                    name="accordion-test-1"
                    label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const buttonComponent = component.find('button.rainbow-accordion-section_summary-button-heading');
        buttonComponent.simulate('click');

        expect(component.state('activeNames')).toEqual('accordion-test-1');
    });
    it('should fire an event with the right arguments when click in the AccordionSection and multiple is not passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <Accordion
                onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection
                    name="accordion-test-1"
                    label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const buttonComponent = component.find('button.rainbow-accordion-section_summary-button-heading');
        buttonComponent.simulate('click');

        expect(handleToggleSectionMockFn).toHaveBeenCalledWith(expect.any(Object), 'accordion-test-1');
    });
    it('should call handleToggleSection with correct "argument" when click in the "second AccordionSection" and "multiple" is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1'];
        const component = mount(
            <div>
                <Accordion
                    multiple
                    activeSectionNames={activeNames}
                    onToggleSection={handleToggleSectionMockFn}>
                    <AccordionSection
                        name="accordion-test-1"
                        label="Rainbow Accordion">
                        AccordionSection-1
                    </AccordionSection>
                    <AccordionSection
                        name="accordion-test-2"
                        label="Rainbow Accordion">
                        AccordionSection-2
                    </AccordionSection>
                </Accordion>
            </div>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-1', 'accordion-test-2']);
    });
    it('should call handleToggleSection with correct "argument" when click in an expanded "first AccordionSection"', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = 'accordion-test-1';
        const component = mount(
            <div>
                <Accordion
                    activeSectionNames={activeNames}
                    onToggleSection={handleToggleSectionMockFn}>
                    <AccordionSection
                        name="accordion-test-1"
                        label="Rainbow Accordion">
                        AccordionSection-1
                    </AccordionSection>
                    <AccordionSection
                        name="accordion-test-2"
                        label="Rainbow Accordion">
                        AccordionSection-2
                    </AccordionSection>
                </Accordion>
            </div>,
        );
        const firstAccordionSection = component.find('ul').childAt(0);
        const firstAccordionSectionButton = firstAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        firstAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual('');
    });
    it('should call handleToggleSection with correct "argument" when click in the "second AccordionSection", "multiple" is passed and both "AccordionSection" are expanded', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1', 'accordion-test-2'];
        const component = mount(
            <div>
                <Accordion
                    multiple
                    activeSectionNames={activeNames}
                    onToggleSection={handleToggleSectionMockFn}>
                    <AccordionSection
                        name="accordion-test-1"
                        label="Rainbow Accordion">
                        AccordionSection-1
                    </AccordionSection>
                    <AccordionSection
                        name="accordion-test-2"
                        label="Rainbow Accordion">
                        AccordionSection-2
                    </AccordionSection>
                </Accordion>
            </div>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-1']);
    });
    it('should call handleToggleSection with correct "argument" when click in the "second AccordionSection", it is collapse for the first time and "multiple" is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const component = mount(
            <div>
                <Accordion
                    multiple
                    onToggleSection={handleToggleSectionMockFn}>
                    <AccordionSection
                        name="accordion-test-1"
                        label="Rainbow Accordion">
                        AccordionSection-1
                    </AccordionSection>
                    <AccordionSection
                        name="accordion-test-2"
                        label="Rainbow Accordion">
                        AccordionSection-2
                    </AccordionSection>
                </Accordion>
            </div>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');

        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-2']);
    });

/* when any <AccordionSection /> is expanded by default */
    it('should set aria-expanded to "true" in "button" when click in AccordionSection', () => {
        const component = mount(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const buttonClicked = component.find('button.rainbow-accordion-section_summary-button-heading');

        expect(buttonClicked.prop('aria-expanded')).toBe(true);
    });
    it('should set isExpanded to "true" in "ArrowIcon" when click in AccordionSection', () => {
        const component = mount(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const ArrowIcon = component.find('RightArrow');

        expect(ArrowIcon.prop('isExpanded')).toBe(true);
    });
    it('should set aria-hidden to "false" in "container of the content" when click in AccordionSection', () => {
        const component = mount(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const contentContainer = component.find('div.rainbow-accordion-section_content');

        expect(contentContainer.prop('aria-hidden')).toBe(false);
    });
    it('should set isTrue to "true" in "container of the content`s RenderIf" when click in AccordionSection', () => {
        const component = mount(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const accordionSection = component.find('section').childAt(1);
        const renderIf = accordionSection.find('RenderIf');

        expect(renderIf.prop('isTrue')).toBe(true);
    });

/* when <AccordionSection /> is expanded by default */
    it('should set aria-expanded to "false" in "button" when click in an expanded AccordionSection', () => {
        const activeNames = 'accordion-test-1';
        const component = mount(
        <Accordion activeSectionNames={activeNames}>
            <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                AccordionSection-1
            </AccordionSection>
        </Accordion>,
    );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const buttonClicked = component.find('button.rainbow-accordion-section_summary-button-heading');

        expect(buttonClicked.prop('aria-expanded')).toBe(false);
    });
    it('should set isExpanded to "false" in "ArrowIcon" when click in an expanded AccordionSection', () => {
        const activeNames = 'accordion-test-1';
        const component = mount(
        <Accordion activeSectionNames={activeNames}>
            <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                AccordionSection-1
            </AccordionSection>
        </Accordion>,
    );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const ArrowIcon = component.find('RightArrow');

        expect(ArrowIcon.prop('isExpanded')).toBe(false);
    });
    it('should set isTrue to "false" in "container of the content`s RenderIf" when click in an expanded AccordionSection', () => {
        const activeNames = 'accordion-test-1';
        const component = mount(
        <Accordion activeSectionNames={activeNames}>
            <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                AccordionSection-1
            </AccordionSection>
        </Accordion>,
    );
        const button = component.find('button.rainbow-accordion-section_summary-button-heading');
        button.simulate('click');
        const accordionSection = component.find('section').childAt(1);
        const renderIf = accordionSection.find('RenderIf');

        expect(renderIf.prop('isTrue')).toBe(false);
    });

/* when multiple and any <AccordionSection /> is expanded by default */
    it('should set aria-expanded to "true" in "button of the second AccordionSection" when click in the "second AccordionSection" and multiple is passed', () => {
        const component = mount(
            <Accordion multiple>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const secondAccordionSectionButtonClicked = secondAccordionSectionClicked.find('button.rainbow-accordion-section_summary-button-heading');

        expect(secondAccordionSectionButtonClicked.prop('aria-expanded')).toBe(true);
    });
    it('should set isExpanded to "true" in "ArrowIcon" in the second AccordionSection when click in the "second AccordionSection" and multiple is passed', () => {
        const component = mount(
            <Accordion multiple>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const rightArrowSecondAccordionSection = secondAccordionSectionClicked.find('RightArrow');

        expect(rightArrowSecondAccordionSection.prop('isExpanded')).toBe(true);
    });
    it('should set aria-hidden to "false" in "container of the content" in the second AccordionSection when click in the "second AccordionSection" and multiple is passed', () => {
        const component = mount(
            <Accordion multiple>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );

        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const contentContainerSecondAccordionSection = secondAccordionSectionClicked.find('div.rainbow-accordion-section_content');

        expect(contentContainerSecondAccordionSection.prop('aria-hidden')).toBe(false);
    });
    it('should set isTrue to "true" in "container of the content`s RenderIf" in the second AccordionSection when click in the "second AccordionSection" and multiple is passed', () => {
        const component = mount(
            <Accordion multiple>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        const secondAccordionSection = component.find('ul').childAt(1);
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const renderIfContainerSecondAccordionSection = secondAccordionSectionClicked.find('section').childAt(1);
        const renderIfSecondAccordionSection = renderIfContainerSecondAccordionSection.find('RenderIf');

        expect(renderIfSecondAccordionSection.prop('isTrue')).toBe(true);
    });

/* when multiple and <AccordionSection /> is expanded by default */
    it('should set aria-expanded to "false" in "button of the second AccordionSection" when click in the "expanded second AccordionSection" and multiple is passed', () => {
        const activeNames = ['accordion-test-2'];
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
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const secondAccordionSectionButtonClicked = secondAccordionSectionClicked.find('button.rainbow-accordion-section_summary-button-heading');

        expect(secondAccordionSectionButtonClicked.prop('aria-expanded')).toBe(false);
    });
    it('should set isExpanded to "false" in "ArrowIcon of the second AccordionSection" when click in the "expanded second AccordionSection" and multiple is passed', () => {
        const activeNames = ['accordion-test-2'];
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
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const secondAccordionSectionButtonClicked = secondAccordionSectionClicked.find('RightArrow');

        expect(secondAccordionSectionButtonClicked.prop('isExpanded')).toBe(false);
    });
    it('should set isTrue to "false" in "container of the content`s RenderIf" in the second AccordionSection when click in the "second AccordionSection" and multiple is passed', () => {
        const activeNames = ['accordion-test-2'];
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
        const secondAccordionSectionButton = secondAccordionSection.find('button.rainbow-accordion-section_summary-button-heading');
        secondAccordionSectionButton.simulate('click');
        const secondAccordionSectionClicked = component.find('ul').childAt(1);
        const renderIfContainerSecondAccordionSection = secondAccordionSectionClicked.find('section').childAt(1);
        const renderIfSecondAccordionSection = renderIfContainerSecondAccordionSection.find('RenderIf');

        expect(renderIfSecondAccordionSection.prop('isTrue')).toBe(false);
    });
});
