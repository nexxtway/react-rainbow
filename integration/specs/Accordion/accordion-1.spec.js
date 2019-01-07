const PageAccordion = require('../../../src/components/Accordion/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
} = require('../../constants');

const ACCORDION = '#accordion-1';

describe('Accordion whend multiple is not passed', () => {
    beforeEach(() => {
        browser.url('/#!/Accordion/1');
        browser.refresh();
    });
    it('should expand the accordion section when its button icon is clicked', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButtonIcon();
        expect(accordionSection.isExpanded()).toBe(true);
    });
    it('should collapse the accordion section when click twice on the button icon', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButtonIcon();
        accordionSection.clickButtonIcon();
        expect(accordionSection.isExpanded()).toBe(false);
    });
    it('should close the first accordion section and expand the second when the first is expanded and is clicked the button icon of the second', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButtonIcon();
        secondAccordionSection.clickButtonIcon();
        expect(firstAccordionSection.isExpanded()).toBe(false);
        expect(secondAccordionSection.isExpanded()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow down', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButtonIcon();
        browser.keys(ARROW_DOWN_KEY);
        expect(secondAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow up', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        firstAccordionSection.clickButtonIcon();
        browser.keys(ARROW_UP_KEY);
        expect(lastAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow up', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        secondAccordionSection.clickButtonIcon();
        browser.keys(ARROW_UP_KEY);
        expect(firstAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow down', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        lastAccordionSection.clickButtonIcon();
        browser.keys(ARROW_DOWN_KEY);
        expect(firstAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow right', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButtonIcon();
        browser.keys(ARROW_RIGHT_KEY);
        expect(secondAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow left', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        firstAccordionSection.clickButtonIcon();
        browser.keys(ARROW_LEFT_KEY);
        expect(lastAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow left', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        secondAccordionSection.clickButtonIcon();
        browser.keys(ARROW_LEFT_KEY);
        expect(firstAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow right', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        lastAccordionSection.clickButtonIcon();
        browser.keys(ARROW_RIGHT_KEY);
        expect(firstAccordionSection.hasFocusButtonIcon()).toBe(true);
    });
});
