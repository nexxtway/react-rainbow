const PageCodeInput = require('../../../src/components/CodeInput/pageObject');
const { BACKSPACE_KEY, TAB_KEY } = require('../../constants');

const CODEINPUT = '#codeinput-1';

describe('CodeInput base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/CodeInput/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CODEINPUT);
        await component.waitForExist();
    });
    it('should have focus on the first input on load', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should change focus to the second input when the first input its filled with a number', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('2');
        await expect(await codeInput.getFocusedIndex()).toBe(1);
    });
    it('should remove value from first input when first input is selected, has a value and "Backspace" key is pressed', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('2');
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('2');
        await browser.keys(BACKSPACE_KEY);
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('');
    });
    it('should return focus to the first input and clear his value when the first input has a value, the second input is empty, is focused and "Backspace" key is pressed', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('2');
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('2');
        await expect(await codeInput.getFocusedIndex()).toBe(1);
        await browser.keys(BACKSPACE_KEY);
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('');
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep focus on the first input when input is empty and "Backspace" key is pressed', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('');
        await browser.keys(BACKSPACE_KEY);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep focus on the last input when the last input value is filled with a number', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('2');
        await codeInput.type('2');
        await codeInput.type('2');
        await codeInput.type('2');
        await expect(await codeInput.getFocusedIndex()).toBe(3);
    });
    it('should keep focus in the current input when we type a letter', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await codeInput.type('A');
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep value empty in the current input when we type a letter', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await codeInput.type('A');
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('');
    });
    it('should keep current input focus when unfocused inputs are clicked', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await codeInput.clickInputAtIndex(2);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should keep focus on the second input when any input is clicked and the first input has a number already', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('2');
        await expect(await codeInput.getFocusedIndex()).toBe(1);
        await codeInput.clickInputAtIndex(0);
        await expect(await codeInput.getFocusedIndex()).toBe(1);
    });
    it('should leave focus on all inputs when "Tab" key is pressed', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await browser.keys(TAB_KEY);
        await expect(await codeInput.getFocusedIndex()).toBe(undefined);
    });
    it('should return focus to the active input when "Tab" key is pressed and then any of the non active inputs is clicked', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
        await browser.keys(TAB_KEY);
        await expect(await codeInput.getFocusedIndex()).toBe(undefined);
        await codeInput.clickInputAtIndex(3);
        await expect(await codeInput.getFocusedIndex()).toBe(0);
    });
    it('should have all inputs filled when we type 4 numbers in a row and codeInput has a length of 4', async () => {
        const codeInput = new PageCodeInput(CODEINPUT);
        await codeInput.type('1');
        await codeInput.type('2');
        await codeInput.type('3');
        await codeInput.type('4');
        await expect(await codeInput.getInputValueAtIndex(0)).toBe('1');
        await expect(await codeInput.getInputValueAtIndex(1)).toBe('2');
        await expect(await codeInput.getInputValueAtIndex(2)).toBe('3');
        await expect(await codeInput.getInputValueAtIndex(3)).toBe('4');
    });
});
