const PageAccordion = require('../../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-11';

const addAdvancedSettings = () => $('#button-icon_add-new-advanced-settings').click();

describe('Accordion with AccordionOption changed dynamically', () => {
    beforeAll(async () => {
        await browser.url('/#!/Accordion/11');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(ACCORDION);
        await component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstSection = await accordion.getItem(0);
        await firstSection.clickButton();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        const secondSection = await accordion.getItem(1);
        await expect(await secondSection.isExpanded()).toBe(true);
        await expect(await secondSection.getLabel()).toBe('Personal Profile');
        await browser.refresh();
        await addAdvancedSettings();
        await firstSection.clickButton();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await secondSection.isExpanded()).toBe(true);
        await expect(await secondSection.getLabel()).toBe('Advanced Settings');
    });
    it('should select the second option with keyboard after it is added and removed dynamically a new element', async () => {
        const accordion = new PageAccordion(ACCORDION);
        await addAdvancedSettings();
        const firstSection = await accordion.getItem(0);
        await firstSection.clickButton();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        const secondSection = await accordion.getItem(1);
        await expect(await secondSection.isExpanded()).toBe(true);
        await expect(await secondSection.getLabel()).toBe('Advanced Settings');
        await addAdvancedSettings();
        await firstSection.clickButton();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await secondSection.isExpanded()).toBe(true);
        await expect(await secondSection.getLabel()).toBe('Personal Profile');
    });
});
