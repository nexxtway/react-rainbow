const PageAccordion = require('../../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-1';

describe('Accordion whend multiple is not passed', () => {
    beforeAll(() => {
        browser.url('/#!/Accordion/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(ACCORDION);
        component.waitForExist();
    });

    it('should expand the accordion section when its button icon is clicked', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButton();
        expect(accordionSection.isExpanded()).toBe(true);
    });
    it('should collapse the accordion section when click twice on the button icon', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButton();
        accordionSection.clickButton();
        expect(accordionSection.isExpanded()).toBe(false);
    });
    it('should close the first accordion section and expand the second when the first is expanded and is clicked the button icon of the second', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButton();
        secondAccordionSection.clickButton();
        expect(firstAccordionSection.isExpanded()).toBe(false);
        expect(secondAccordionSection.isExpanded()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow down', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButton();
        browser.keys('ArrowDown');
        expect(secondAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow up', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        firstAccordionSection.clickButton();
        browser.keys('ArrowUp');
        expect(lastAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow up', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        secondAccordionSection.clickButton();
        browser.keys('ArrowUp');
        expect(firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow down', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        lastAccordionSection.clickButton();
        browser.keys('ArrowDown');
        expect(firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow right', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButton();
        browser.keys('ArrowRight');
        expect(secondAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow left', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        firstAccordionSection.clickButton();
        browser.keys('ArrowLeft');
        expect(lastAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow left', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        secondAccordionSection.clickButton();
        browser.keys('ArrowLeft');
        expect(firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow right', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const lastAccordionSection = accordion.getItem(2);
        lastAccordionSection.clickButton();
        browser.keys('ArrowRight');
        expect(firstAccordionSection.hasFocusButton()).toBe(true);
    });
});
