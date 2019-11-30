const PageAccordion = require('../../../src/components/Accordion/pageObject');
const { ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

const ACCORDION = '#accordion-9';

const addAdvancedSettings = () => $('#button-icon_add-new-advanced-settings').click();

describe('Accordion with AccordionOption changed dynamically', () => {
    it('should select the new option with keyboard after it is added dynamically', () => {
        browser.url('/#!/Accordion/9');
        const component = $(ACCORDION);
        component.waitForExist();
        const accordion = new PageAccordion(ACCORDION);
        const firstSection = accordion.getItem(0);
        firstSection.clickButtonIcon();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        const secondSection = accordion.getItem(1);
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Personal Profile');
        browser.refresh();
        addAdvancedSettings();
        firstSection.clickButtonIcon();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(secondSection.isExpanded()).toBe(true);
        expect(secondSection.getLabel()).toBe('Advanced Settings');
    });
});
