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

    type(key) {
        const focusedInput = this.getFocusedInput();
        if (focusedInput) {
            focusedInput.setValue(key);
        }
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
    clickInputAtIndex(inputIndex) {
        const input = this.getInputAtIndex(inputIndex);
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
        return undefined;
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
        return undefined;
    }

    /**
     * Returns the value of the input via their index (position in the input array)
     * @method
     * @param {string} inputIndex - The index of the input
     */
    getInputValueAtIndex(inputIndex) {
        const input = this.getInputAtIndex(inputIndex);
        if (input) {
            return input.getValue();
        }
        return undefined;
    }

    getFocusedInput() {
        const inputs = $(this.rootElement).$$('input');
        return inputs.filter(input => input.isFocused()).shift();
    }

    getInputAtIndex(inputIndex) {
        const input = $(this.rootElement).$$('input')[inputIndex];
        if (input) {
            return input;
        }
        return undefined;
    }
}

module.exports = PageCodeInput;
