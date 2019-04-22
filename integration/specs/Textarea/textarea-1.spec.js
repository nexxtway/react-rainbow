const PageTextarea = require('../../../src/components/Textarea/pageObject');

const TEXTAREA = '#example-textarea-1';

describe('Textarea base example', () => {
    beforeAll(() => {
        browser.url('/#!/Textarea/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TEXTAREA);
        component.waitForExist();
    });

    it('should put the textarea focused when clcik on it', () => {
        const textarea = new PageTextarea(TEXTAREA);
        textarea.click();
        expect(textarea.hasFocusTextarea()).toBe(true);
    });
    it('should put the textarea focused when click on the label of the textarea', () => {
        const textarea = new PageTextarea(TEXTAREA);
        textarea.clickLabel();
        expect(textarea.hasFocusTextarea()).toBe(true);
    });
});
