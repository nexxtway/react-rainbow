Here is an overview about how to use the Textarea page object:

    const PageTextarea = require('react-rainbow-components/components/Textarea/pageObject');

    const TEXTAREA = '#textarea-1';

    describe('Textarea page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
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
