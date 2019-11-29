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
        accordion.clickFirstButton();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(accordion.getOpenSectionLabel()).toBe('Personal Profile');
        browser.refresh();
        addAdvancedSettings();
        accordion.clickFirstButton();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(accordion.getOpenSectionLabel()).toBe('Advanced Settings');
    });
});
