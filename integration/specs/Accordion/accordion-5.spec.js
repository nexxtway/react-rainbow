const PageAccordion = require('../../../src/components/Accordion/pageObject');

const ACCORDION = '#accordion-multiple-1';

describe('Accordion when multiple is passed', () => {
    beforeAll(async () => {
        await browser.url('/#!/Accordion/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(ACCORDION);
        await component.waitForExist();
    });

    it('should collapse the accordion section when the accordion section is expanded and click on the button icon', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const accordionSection = await accordion.getItem(0);
        await accordionSection.clickButton();
        await expect(await accordionSection.isExpanded()).toBe(false);
    });
    it('should expand all accordion section when the first and second accordion section are expanded and click on the third button icon', async () => {
        const accordion = new PageAccordion(ACCORDION);
        const firstAccordionSection = await accordion.getItem(0);
        const secondAccordionSection = await accordion.getItem(1);
        const thirdAccordionSection = await accordion.getItem(2);
        await thirdAccordionSection.clickButton();
        await expect(await firstAccordionSection.isExpanded()).toBe(true);
        await expect(await secondAccordionSection.isExpanded()).toBe(true);
        await expect(await thirdAccordionSection.isExpanded()).toBe(true);
    });
});
