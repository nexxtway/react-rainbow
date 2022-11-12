import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion from '../index';
import AccordionSection from '../../AccordionSection';

describe('<Accordion />', () => {
    it('should be visible the dialog when the button of the section is clicked', async () => {
        const { getByRole } = render(
            <Accordion onToggleSection="string">
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    <div role="dialog">AccordionSection-1</div>
                </AccordionSection>
            </Accordion>,
        );
        fireEvent.click(getByRole('button'));
        expect(getByRole('dialog')).toBeVisible();
    });
    it('should be visible the dialogues when multiple is passed and he button of the section is clicked', () => {
        const activeNames = ['accordion-test-1'];
        const { getAllByRole } = render(
            <Accordion multiple activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    <div role="dialog">AccordionSection-1</div>
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    <div role="dialog">AccordionSection-2</div>
                </AccordionSection>
            </Accordion>,
        );

        fireEvent.click(getAllByRole('button')[1]);
        const sections = getAllByRole('dialog');
        sections.forEach(section => {
            expect(section).toBeVisible();
        });
    });
    it('should not fire an event when click in the AccordionSection and disabled is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const { getByRole } = render(
            <Accordion onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection disabled name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        fireEvent.click(getByRole('button'));
        expect(handleToggleSectionMockFn).toHaveBeenCalledTimes(0);
    });
    it('should fire an event with the right arguments when click in the AccordionSection and multiple is not passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const { getByRole } = render(
            <Accordion onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        fireEvent.click(getByRole('button'));
        expect(handleToggleSectionMockFn).toHaveBeenCalledWith(
            expect.any(Object),
            'accordion-test-1',
        );
    });
    it('should fire an event with the right arguments when click in the second AccordionSection and multiple is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1'];
        const { getAllByRole } = render(
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
        fireEvent.click(getAllByRole('button')[1]);

        expect(handleToggleSectionMockFn).toHaveBeenCalledWith(expect.any(Object), [
            'accordion-test-1',
            'accordion-test-2',
        ]);
    });
    it('should fire an event with the right arguments when click in the expanded first AccordionSection', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = 'accordion-test-1';
        const { getAllByRole } = render(
            <Accordion activeSectionNames={activeNames} onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        fireEvent.click(getAllByRole('button')[0]);
        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual('');
    });
    it('should fire an event with the right arguments when click in the second AccordionSection, multiple is passed and both AccordionSection are expanded', () => {
        const handleToggleSectionMockFn = jest.fn();
        const activeNames = ['accordion-test-1', 'accordion-test-2'];
        const { getAllByRole } = render(
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
        fireEvent.click(getAllByRole('button')[1]);
        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-1']);
    });
    it('should fire an event with the right arguments when click in the second AccordionSection, it is collapsed for the first time and multiple is passed', () => {
        const handleToggleSectionMockFn = jest.fn();
        const { getAllByRole } = render(
            <Accordion multiple onToggleSection={handleToggleSectionMockFn}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
                <AccordionSection name="accordion-test-2" label="Rainbow Accordion">
                    AccordionSection-2
                </AccordionSection>
            </Accordion>,
        );
        fireEvent.click(getAllByRole('button')[1]);
        expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-2']);
    });
    it('should set ariaExpanded to true in button when the AccordionSection is expanded', () => {
        const activeNames = 'accordion-test-1';
        const { getByRole } = render(
            <Accordion activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });
    it('should set ariaExpanded to false in button when the AccordionSection is collapsed', () => {
        const { getByRole } = render(
            <Accordion>
                <AccordionSection label="Rainbow Accordion">AccordionSection-1</AccordionSection>
            </Accordion>,
        );
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });
    it('should set aria-hidden to false in container of the content when the content is expanded', () => {
        const activeNames = 'accordion-test-1';
        const { getByText } = render(
            <Accordion activeSectionNames={activeNames}>
                <AccordionSection name="accordion-test-1" label="Rainbow Accordion">
                    AccordionSection-1
                </AccordionSection>
            </Accordion>,
        );
        expect(getByText('AccordionSection-1')).toHaveAttribute('aria-hidden', 'false');
    });
});
