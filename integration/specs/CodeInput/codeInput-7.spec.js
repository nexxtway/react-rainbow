const PageCodeInput = require('../../../src/components/CodeInput/pageObject');

const CODEINPUT = '#codeinput-7';

describe('CodeInput readOnly example', () => {
    beforeAll(() => {
        browser.url('/#!/CodeInput/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CODEINPUT);
        component.waitForExist();
    });
    it('should keep inputs unfocused when codeInput is readOnly and inputs are clicked', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(-1);
        codeInput.clickInputByIndex(1);
        codeInput.clickInputByIndex(2);
        expect(codeInput.getFocusedIndex()).toBe(-1);
    });
});
