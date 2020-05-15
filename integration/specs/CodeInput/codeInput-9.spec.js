const PageCodeInput = require('../../../src/components/CodeInput/pageObject');

const CODEINPUT = '#codeinput-9';

describe('CodeInput readOnly example', () => {
    beforeAll(() => {
        browser.url('/#!/CodeInput/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CODEINPUT);
        component.waitForExist();
    });
    it('should keep inputs unfocused when codeInput is disabled and inputs are clicked', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(undefined);
        codeInput.clickInputAtIndex(1);
        codeInput.clickInputAtIndex(2);
        expect(codeInput.getFocusedIndex()).toBe(undefined);
    });
});
