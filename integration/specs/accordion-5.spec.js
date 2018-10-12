const PageAccordion = require('./../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-multiple-1';

describe('Accordion whend multiple is passed', () => {
    beforeEach(() => {
        browser.url('/#!/Accordion/5');
        browser.refresh();
    });
    it('should collapse the accordion section when the accordion section is expanded and click on the button icon', () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = accordion.getItem(0);
        accordionSection.clickButtonIcon();
        expect(accordionSection.isExpanded()).toBe(false);
    });
    it('should expand all accordion section when the first and second accordion section are expanded and click on the third button icon', () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = accordion.getItem(0);
        const secondAccordionSection = accordion.getItem(1);
        const thirdAccordionSection = accordion.getItem(2);
        thirdAccordionSection.clickButtonIcon();
        expect(firstAccordionSection.isExpanded()).toBe(true);
        expect(secondAccordionSection.isExpanded()).toBe(true);
        expect(thirdAccordionSection.isExpanded()).toBe(true);
    });
});
