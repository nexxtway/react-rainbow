const PageSelect = require('../../../src/components/Select/pageObject');

const SELECT = '#example-select-1';

describe('Select base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Select/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(SELECT);
        await component.waitForExist();
    });

    it('should put the select focused when clcik on it', async () => {
        const select = new PageSelect(SELECT);
        await select.click();
        await expect(await select.hasFocusSelect()).toBe(true);
    });
    it('should put the select focused when click on the label of the select', async () => {
        const select = new PageSelect(SELECT);
        await select.clickLabel();
        await expect(await select.hasFocusSelect()).toBe(true);
    });
});
