const PageAccordion = require('./../../src/components/Accordion/pageObject');
const {
    SPACE_KEY,
    ENTER_KEY,
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
    TAB_KEY,
} = require('./../constants');

const ACCORDION = '#accordion-1';

describe('Accordion whend multiple is not passed', () => {
    beforeEach(() => {
        browser.url('/#!/Accordion/1');
        browser.refresh();
    });
    it('should expand the accordion section when the accordion section is collapsed and click on the button icon', () => {
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
    it('should close the firstaccordoin section and expand the second accordion section when the first accordion section is expanded and click on the second button icon', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        firstAccordionSection.clickButtonIcon();
        secondAccordionSection.clickButtonIcon();
        expect(firstAccordionSection.isExpanded()).toBe(false);
        expect(secondAccordionSection.isExpanded()).toBe(true);
    });
    it('should put the button icon focused when click on it', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButtonIcon();
        expect(accordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should lost the focus on button icon when it is focused and click on accordionSection', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButtonIcon();
        accordionSection.click();
        expect(accordionSection.hasFocusButtonIcon()).toBe(false);
    });
    it('should put the button icon focused when click on accordionSection and press the key "tab"', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.click();
        browser.keys(TAB_KEY);
        expect(accordionSection.hasFocusButtonIcon()).toBe(true);
    });
    it('should expand the accordion section when the button icon is focused and press Space', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.click();
        browser.keys(TAB_KEY);
        browser.keys(SPACE_KEY);
        expect(accordionSection.isExpanded()).toBe(true);
    });
    it('should expand the accordion section when the button icon is focused and press Enter', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.click();
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(accordionSection.isExpanded()).toBe(true);
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
