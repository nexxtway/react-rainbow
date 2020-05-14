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

    /**
     * Triggers a click over the focused input
     * @method
     * @param {string} inputIndex - The index of the input
     */
    click() {
        const focusedInput = this.getFocusedInput();
        if (focusedInput) {
            focusedInput.click();
        }
    }

    /**
     * Triggers a click over the input via their index (position in the input array)
     * @method
     * @param {string} inputIndex - The index of the input
     */
    clickInputByIndex(inputIndex) {
        const input = this.getInputByIndex(inputIndex);
        if (input) {
            input.click();
        }
    }

    /**
     * Returns the index of the current input focused or -1 if not found any
     * @method
     */
    getFocusedIndex() {
        const focusedInput = this.getFocusedInput();
        if (focusedInput) {
            return focusedInput.index;
        }
        return -1;
    }

    /**
     * Returns the value of the current input focused or -1 if not found any
     * @method
     */
    getFocusedValue() {
        const focusedInput = this.getFocusedInput();
        if (focusedInput) {
            return focusedInput.getValue();
        }
        return -1;
    }

    /**
     * Returns the value of the input via their index (position in the input array)
     * @method
     * @param {string} inputIndex - The index of the input
     */
    getInputValueByIndex(inputIndex) {
        const input = this.getInputByIndex(inputIndex);
        if (input) {
            return input.getValue();
        }
        return -1;
    }

    getFocusedInput() {
        const inputs = $(this.rootElement).$$('input');
        return inputs.filter(input => input.isFocused()).shift();
    }

    getInputByIndex(inputIndex) {
        const inputs = $(this.rootElement).$$('input');
        return inputs.filter((elem, index) => index === inputIndex).shift();
    }
}

module.exports = PageCodeInput;
