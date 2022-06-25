/**
 * PageCodeInput page object class.
 * @class
 */
class PageCodeInput {
    /**
     * Create a new PageCodeInput page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageCodeInput root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    async type(key) {
        const focusedInput = await this.getFocusedInput();
        if (focusedInput) {
            await focusedInput.setValue(key);
        }
    }

    /**
     * Triggers a click over the focused input
     * @method
     * @param {string} inputIndex - The index of the input
     */
    async click() {
        const focusedInput = await this.getFocusedInput();
        if (focusedInput) {
            await focusedInput.click();
        }
    }

    /**
     * Triggers a click over the input via their index (position in the input array)
     * @method
     * @param {string} inputIndex - The index of the input
     */
    async clickInputAtIndex(inputIndex) {
        const input = await this.getInputAtIndex(inputIndex);
        if (input) {
            await input.click();
        }
    }

    /**
     * Returns the index of the current input focused or -1 if not found any
     * @method
     */
    async getFocusedIndex() {
        const focusedInput = await this.getFocusedInput();
        if (focusedInput) {
            return focusedInput.index;
        }
        return undefined;
    }

    /**
     * Returns the value of the current input focused or -1 if not found any
     * @method
     */
    async getFocusedValue() {
        const focusedInput = await this.getFocusedInput();
        if (focusedInput) {
            return focusedInput.getValue();
        }
        return undefined;
    }

    /**
     * Returns the value of the input via their index (position in the input array)
     * @method
     * @param {string} inputIndex - The index of the input
     */
    async getInputValueAtIndex(inputIndex) {
        const input = await this.getInputAtIndex(inputIndex);
        if (input) {
            return input.getValue();
        }
        return undefined;
    }

    async getFocusedInput() {
        const inputs = await $(this.rootElement).$$('input');
        const focusedInputs = await Promise.all(inputs.map(async input => input.isFocused()));
        return inputs.find((input, index) => focusedInputs[index]);
    }

    async getInputAtIndex(inputIndex) {
        const input = (await $(this.rootElement).$$('input'))[inputIndex];
        if (input) {
            return input;
        }
        return undefined;
    }
}

module.exports = PageCodeInput;
