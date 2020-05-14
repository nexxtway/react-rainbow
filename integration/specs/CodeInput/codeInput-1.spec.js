const PageCodeInput = require('../../../src/components/CodeInput/pageObject');
const { DELETE_KEY, TAB_KEY } = require('../../constants');

const CODEINPUT = '#codeinput-1';

const awaitForUpdate = () => {
    browser.pause(99);
};

describe('CodeInput base example', () => {
    beforeAll(() => {
        browser.url('/#!/CodeInput/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CODEINPUT);
        component.waitForExist();
    });
    it('should have focus on the first input on load', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
    });
    it('should change focus to the second input when the first input its filled with a number', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '2']);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(1);
    });
    it('should remove value from first input when first input is selected, has a value and "Backspace" key is pressed', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '2']);
        awaitForUpdate();
        expect(codeInput.getInputValueByIndex(0)).toBe('2');
        browser.keys(DELETE_KEY);
        awaitForUpdate();
        expect(codeInput.getInputValueByIndex(0)).toBe('');
    });
    it('should return focus to the first input and clear his value when the first input has a value, the second input is empty, is focused and "Backspace" key is pressed', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '2']);
        awaitForUpdate();
        expect(codeInput.getInputValueByIndex(0)).toBe('2');
        expect(codeInput.getFocusedIndex()).toBe(1);
        browser.keys(DELETE_KEY);
        awaitForUpdate();
        expect(codeInput.getInputValueByIndex(0)).toBe('');
    });
    it('should keep focus on the first input when input is empty and "Backspace" key is pressed', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
        expect(codeInput.getInputValueByIndex(0)).toBe('');
        browser.keys(DELETE_KEY);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep focus on the last input when the last input value is filled with a number', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '2']);
        awaitForUpdate();
        browser.keys(['', '2']);
        awaitForUpdate();
        browser.keys(['', '2']);
        awaitForUpdate();
        browser.keys(['', '2']);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(3);
    });
    it('should keep focus in the current input when we type a letter', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
        browser.keys(['', 'A']);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep current input focus when unfocused inputs are clicked', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
        codeInput.clickInputByIndex(2);
        expect(codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep focus on the second input when any input is clicked and the first input has a number already', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '2']);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(1);
        codeInput.clickInputByIndex(0);
        expect(codeInput.getFocusedIndex()).toBe(1);
    });
    it('should leave focus on all inputs when "Tab" key is pressed', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
        browser.keys(TAB_KEY);
        expect(codeInput.getFocusedIndex()).toBe(-1);
    });
    it('should return focus to the active input when "Tab" key is pressed and then any of the non active inputs is clicked', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        expect(codeInput.getFocusedIndex()).toBe(0);
        browser.keys(TAB_KEY);
        awaitForUpdate();
        expect(codeInput.getFocusedIndex()).toBe(-1);
        codeInput.clickInputByIndex(3);
        expect(codeInput.getFocusedIndex()).toBe(0);
    });
    it('should have all inputs filled when we type 4 numbers in a row and codeInput has a length of 4', () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        browser.keys(['', '1']);
        awaitForUpdate();
        browser.keys(['', '2']);
        awaitForUpdate();
        browser.keys(['', '3']);
        awaitForUpdate();
        browser.keys(['', 'B']);
        awaitForUpdate();
        browser.keys(['', '4']);
        expect(codeInput.getInputValueByIndex(0)).toBe('1');
        expect(codeInput.getInputValueByIndex(1)).toBe('2');
        expect(codeInput.getInputValueByIndex(2)).toBe('3');
        expect(codeInput.getInputValueByIndex(3)).toBe('4');
    });
});
