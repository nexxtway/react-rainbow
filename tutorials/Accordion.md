Here is an overview about how to use the Accordion page object:

    const PageAccordion = require('react-rainbow-components/components/Accordion/pageObject');

    const ACCORDION = '#accordion-1';
    const ARROW_LEFT_KEY = '\uE012';

    describe('Accordion page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(ACCORDION);
            component.waitForExist();
        });

        it('should expand the accordion section when its button icon is clicked', () => {
            const accordion = new PageAccordion(ACCORDION);
            const accordionSection = accordion.getItem(0);
            accordionSection.clickButtonIcon();
            expect(accordionSection.isExpanded()).toBe(true);
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
        it('should move focus to the last button icon when the first button icon is focused and press arrow left', () => {
            const accordion = new PageAccordion(ACCORDION);
            const firstAccordionSection = accordion.getItem(0);
            const lastAccordionSection = accordion.getItem(2);
            firstAccordionSection.clickButtonIcon();
            browser.keys(ARROW_LEFT_KEY);
            expect(lastAccordionSection.hasFocusButtonIcon()).toBe(true);
        });
    });
