const PageTextarea = require('../../../src/components/Textarea/pageObject');

const TEXTAREA = '#example-textarea-1';

describe('Textarea base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Textarea/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TEXTAREA);
        await component.waitForExist();
    });

    it('should put the textarea focused when clcik on it', async () => {
        const textarea = new PageTextarea(TEXTAREA);
        await textarea.click();
        await expect(await textarea.hasFocusTextarea()).toBe(true);
    });
    it('should put the textarea focused when click on the label of the textarea', async () => {
        const textarea = new PageTextarea(TEXTAREA);
        await textarea.clickLabel();
        await expect(await textarea.hasFocusTextarea()).toBe(true);
    });
});
