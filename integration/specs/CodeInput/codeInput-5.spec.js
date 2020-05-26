const PageCodeInput = require('../../../src/components/CodeInput/pageObject');

const CODEINPUT = '#codeinput-5';

describe('CodeInput disabled example', () => {
    beforeAll(() => {
        browser.url('/#!/CodeInput/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CODEINPUT);
        component.waitForExist();
    });
    it('should keep inputs unfocused when codeInput is disabled and inputs are clicked', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(undefined);
        codeInput.clickInputAtIndex(2);
        codeInput.clickInputAtIndex(3);
        expect(codeInput.getFocusedIndex()).toBe(undefined);
    });
});
