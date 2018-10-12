Here is an overview about how to use the Accordion page object:

    const PageAccordion = require('react-rainbow-components/components/Accordion/pageObject');

    const ACCORDION = '#accordion-1';

    describe('Accordion page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });
        it('should expand the accordion section when the accordion section is collapsed and click on the button icon', () => {
            const accordion = new PageAccordion(ACCORDION);
            const accordionSection = accordion.getItem(0);
            accordionSection.clickButtonIcon();
            expect(accordionSection.isExpanded()).toBe(true);
        });
        it('should put the button icon focused when click on it', () => {
            const accordion = new PageAccordion(ACCORDION);
            const accordionSection = accordion.getItem(0);
            accordionSection.clickButtonIcon();
            expect(accordionSection.hasFocusButtonIcon()).toBe(true);
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
    });
