const PageAccordion = require('../../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-1';

describe('Accordion whend multiple is not passed', () => {
    beforeAll(async () => {
        await browser.url('/#!/Accordion/1');
    });

    beforeEach(async () => {
        await browser.refresh();
        const component = await $(ACCORDION);
        await component.waitForExist();
    });

    it('should expand the accordion section when its button icon is clicked', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = await accordion.getItem(0);
        await accordionSection.clickButton();
        await expect(await accordionSection.isExpanded()).toBe(true);
    });
    it('should collapse the accordion section when click twice on the button icon', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = await accordion.getItem(0);
        await accordionSection.clickButton();
        await accordionSection.clickButton();
        await expect(await accordionSection.isExpanded()).toBe(false);
    });
    it('should close the first accordion section and expand the second when the first is expanded and is clicked the button icon of the second', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        await firstAccordionSection.clickButton();
        await secondAccordionSection.clickButton();
        await expect(await firstAccordionSection.isExpanded()).toBe(false);
        await expect(await secondAccordionSection.isExpanded()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow down', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        await firstAccordionSection.clickButton();
        await browser.keys('ArrowDown');
        await expect(await secondAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow up', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const lastAccordionSection = await accordion.getItem(2);
        await firstAccordionSection.clickButton();
        await browser.keys('ArrowUp');
        await expect(await lastAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow up', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        await secondAccordionSection.clickButton();
        await browser.keys('ArrowUp');
        await expect(await firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow down', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const lastAccordionSection = await accordion.getItem(2);
        await lastAccordionSection.clickButton();
        await browser.keys('ArrowDown');
        await expect(await firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the next button icon when the first button icon is focused and press arrow right', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        await firstAccordionSection.clickButton();
        await browser.keys('ArrowRight');
        await expect(await secondAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the last button icon when the first button icon is focused and press arrow left', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const lastAccordionSection = await accordion.getItem(2);
        await firstAccordionSection.clickButton();
        await browser.keys('ArrowLeft');
        await expect(await lastAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the previous button icon when the second button icon is focused and press arrow left', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        await secondAccordionSection.clickButton();
        await browser.keys('ArrowLeft');
        await expect(await firstAccordionSection.hasFocusButton()).toBe(true);
    });
    it('should move focus to the first button icon when the last button icon is focused and press arrow right', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const lastAccordionSection = await accordion.getItem(2);
        await lastAccordionSection.clickButton();
        await browser.keys('ArrowRight');
        await expect(await firstAccordionSection.hasFocusButton()).toBe(true);
    });
});
