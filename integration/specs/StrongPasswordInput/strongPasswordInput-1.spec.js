const PageStrongPasswordInput = require('../../../src/components/StrongPasswordInput/pageObject');

const INPUT = '#strong-password-input-1';

describe('StrongPasswordInput base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/StrongPasswordInput/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(INPUT);
        await component.waitForExist();
    });

    it('should put the input element focused when is clicked', async () => {
        const input = new PageStrongPasswordInput(INPUT);
        await input.click();
        await expect(await input.hasFocusInput()).toBe(true);
    });
    it('should put the input element focused when the label element is clicked', async () => {
        const input = new PageStrongPasswordInput(INPUT);
        await input.clickLabel();
        await expect(await input.hasFocusInput()).toBe(true);
    });
});
