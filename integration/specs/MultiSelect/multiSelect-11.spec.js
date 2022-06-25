const PageMultiSelect = require('../../../src/components/MultiSelect/pageObject');

const MULTI_SELECT = '#multiselect-component-13';

describe('MultiSelect base', () => {
    beforeAll(async () => {
        await browser.url('/#!/MultiSelect/13');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(MULTI_SELECT);
        await component.waitForExist();
    });

    it('should not put the input element focused when clicked', async () => {
        const input = new PageMultiSelect(MULTI_SELECT);
        await input.click();
        await expect(await input.hasInputFocus()).toBe(false);
    });

    it('should not put the input element focused when the label element is clicked', async () => {
        const input = new PageMultiSelect(MULTI_SELECT);
        await input.clickLabel();
        await expect(await input.hasInputFocus()).toBe(false);
    });
});
