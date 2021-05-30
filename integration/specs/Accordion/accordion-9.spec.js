const PageAccordion = require('../../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-9';

const addAdvancedSettings = () => $('#button-icon_add-new-advanced-settings').click();

describe('Accordion with AccordionOption changed dynamically', () => {
    beforeAll(() => {
        browser.url('/#!/Accordion/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(ACCORDION);
        component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstSection = accordion.getItem(0);
        firstSection.clickButton();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        const secondSection = accordion.getItem(1);
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Personal Profile');
        browser.refresh();
        addAdvancedSettings();
        firstSection.clickButton();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Advanced Settings');
    });
    it('should select the second option with keyboard after it is added and removed dynamically a new element', () => {
        const accordion = new PageAccordion(ACCORDION);
        addAdvancedSettings();
        const firstSection = accordion.getItem(0);
        firstSection.clickButton();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        const secondSection = accordion.getItem(1);
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Advanced Settings');
        addAdvancedSettings();
        firstSection.clickButton();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Personal Profile');
    });
});
