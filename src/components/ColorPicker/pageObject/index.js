/**
 * PageWeekDayPicker page object class.
 * @class
 */
class PageColorPicker {
    /**
     * Create a new PageColorPicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageColorPicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Return the saturation pointer button element.
     * @method
     * @returns {object}
     */
    getSaturationPointer() {
        return $(this.rootElement).$('button');
    }

    /**
     * Return the hue input element for index.
     * @method
     * @returns {object}
     */
    getHueInput() {
        return $(this.rootElement).$('input[type=range]');
    }

    /**
     * Return the hex input element.
     * @method
     * @returns {object}
     */
    getHexInput() {
        return $(this.rootElement).$('input[type=text]');
    }

    /**
     * Return the rgba input element for index.
     * @method
     * @param {number} index
     * @returns {object}
     */
    getRgbaInput(index) {
        return $(this.rootElement).$$('input[type=number]')[index];
    }

    /**
     * Return the default colors input element.
     * @method
     * @returns {object}
     */
    getDefaultColorsInput() {
        return $(this.rootElement).$('input[type=radio]');
    }

    /**
     * Returns the default colors label element.
     * @method
     * @returns {object}
     */
    getDefaultColorsLabel() {
        const id = this.getDefaultColorsInput().getAttribute('id');
        return $(this.rootElement).$(`label[for="${id}"]`);
    }

    /**
     * Return hex color from hex input.
     * @method
     * @returns {string}
     */
    getColor() {
        return this.getHexInput().getValue();
    }

    /**
     * Return hex color from hex input.
     * @method
     * @returns {string}
     */
    getAlpha() {
        return this.getRgbaInput(3).getValue();
    }

    /**
     * Returns true when the saturation pointer button element has focus.
     * @method
     * @returns {bool}
     */
    isSaturationFocused() {
        const buttonEl = this.getSaturationPointer();
        return buttonEl.isExisting() && buttonEl.isFocused();
    }

    /**
     * Returns true when the hue input element has focus.
     * @method
     * @returns {bool}
     */
    isHueFocused() {
        const rangeEl = this.getHueInput();
        return rangeEl.isExisting() && rangeEl.isFocused();
    }

    /**
     * Returns true when the alpha input element has focus.
     * @method
     * @returns {bool}
     */
    isAlphaFocused() {
        const rangeEl = $(this.rootElement).$$('input[type=range]')[1];
        return rangeEl.isExisting() && rangeEl.isFocused();
    }

    /**
     * Returns true when the hex input element has focus.
     * @method
     * @returns {bool}
     */
    isHexFocused() {
        const inputEl = this.getHexInput();
        return inputEl.isExisting() && inputEl.isFocused();
    }

    /**
     * Returns true when the rgba input element has focus.
     * @method
     * * @param {number} index
     * @returns {bool}
     */
    isRgbaFocused(index = 0) {
        const inputEl = this.getRgbaInput(index);
        return inputEl.isExisting() && inputEl.isFocused();
    }

    /**
     * Returns true when the default colors input element has focus.
     * @method
     * @returns {bool}
     */
    isDefaultColorsFocused() {
        const inputEl = this.getDefaultColorsInput();
        return inputEl.isExisting() && inputEl.isFocused();
    }
}

module.exports = PageColorPicker;
