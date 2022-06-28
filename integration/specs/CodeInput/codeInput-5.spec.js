const PageCodeInput = require('../../../src/components/CodeInput/pageObject');

const CODEINPUT = '#codeinput-5';

describe('CodeInput disabled example', () => {
    beforeAll(async () => {
        await browser.url('/#!/CodeInput/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CODEINPUT);
        await component.waitForExist();
    });
    it('should keep inputs unfocused when codeInput is disabled and inputs are clicked', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(undefined);
        await codeInput.clickInputAtIndex(2);
        await codeInput.clickInputAtIndex(3);
        await expect(await codeInput.getFocusedIndex()).toBe(undefined);
    });
});
