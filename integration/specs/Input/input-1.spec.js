const PageInput = require('../../../src/components/Input/pageObject');

const INPUT = '#input-component-1';

describe('Input base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Input/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(INPUT);
        await component.waitForExist();
    });

    it('should put the input element focused when is clicked', async () => {
        const input = new PageInput(INPUT);
        await input.click();
        await expect(await input.hasFocusInput()).toBe(true);
    });
    it('should put the input element focused when the label element is clicked', async () => {
        const input = new PageInput(INPUT);
        await input.clickLabel();
        await expect(await input.hasFocusInput()).toBe(true);
    });
});
