/* eslint-disable no-return-await */
/**
 * PageColorPicker page object class.
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
    async getSaturationPointer() {
        return $(this.rootElement).$('button');
    }

    /**
     * Triggers a click over the saturation pointer button element.
     * @method
     */
    async clickSaturation() {
        await (await this.getSaturationPointer()).click();
    }

    /**
     * Return the hue input element.
     * @method
     * @returns {object}
     */
    async getHueInput() {
        return $(this.rootElement).$('input[type=range]');
    }

    /**
     * Triggers a click over the hue input element.
     * @method
     */
    async clickHue() {
        await (await this.getHueInput()).click();
    }

    /**
     * Return the hex input element.
     * @method
     * @returns {object}
     */
    async getHexInput() {
        return $(this.rootElement).$('input[type=text]');
    }

    /**
     * Return the rgba input element for index.
     * @method
     * @param {number} index
     * @returns {object}
     */
    async getRgbaInput(index) {
        return (await $(this.rootElement).$$('input[type=number]'))[index];
    }

    /**
     * Return the default colors input element.
     * @method
     * @returns {object}
     */
    async getDefaultColorsInput() {
        return $(this.rootElement).$('input[type=radio]');
    }

    /**
     * Returns the default colors label element.
     * @method
     * @returns {object}
     */
    async getDefaultColorsLabel() {
        const id = await (await this.getDefaultColorsInput()).getAttribute('id');
        return $(this.rootElement).$(`label[for="${id}"]`);
    }

    /**
     * Triggers a click over the default colors label element.
     * @method
     */
    async clickDefaultColors() {
        await (await this.getDefaultColorsLabel()).click();
    }

    /**
     * Return hex color from hex input.
     * @method
     * @returns {string}
     */
    async getColor() {
        return (await this.getHexInput()).getValue();
    }

    /**
     * Return hex color from hex input.
     * @method
     * @returns {string}
     */
    async getAlpha() {
        return (await this.getRgbaInput(3)).getValue();
    }

    /**
     * Returns true when the saturation pointer button element has focus.
     * @method
     * @returns {bool}
     */
    async isSaturationFocused() {
        const buttonEl = await this.getSaturationPointer();
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the hue input element has focus.
     * @method
     * @returns {bool}
     */
    async isHueFocused() {
        const rangeEl = await this.getHueInput();
        return (await rangeEl.isExisting()) && (await rangeEl.isFocused());
    }

    /**
     * Returns true when the alpha input element has focus.
     * @method
     * @returns {bool}
     */
    async isAlphaFocused() {
        const rangeEl = (await $(this.rootElement).$$('input[type=range]'))[1];
        return (await rangeEl.isExisting()) && (await rangeEl.isFocused());
    }

    /**
     * Returns true when the hex input element has focus.
     * @method
     * @returns {bool}
     */
    async isHexFocused() {
        const inputEl = await this.getHexInput();
        return (await inputEl.isExisting()) && (await inputEl.isFocused());
    }

    /**
     * Returns true when the rgba input element has focus.
     * @method
     * * @param {number} index
     * @returns {bool}
     */
    async isRgbaFocused(index = 0) {
        const inputEl = await this.getRgbaInput(index);
        return (await inputEl.isExisting()) && (await inputEl.isFocused());
    }

    /**
     * Returns true when the default colors input element has focus.
     * @method
     * @returns {bool}
     */
    async isDefaultColorsFocused() {
        const inputEl = await this.getDefaultColorsInput();
        return (await inputEl.isExisting()) && (await inputEl.isFocused());
    }
}

module.exports = PageColorPicker;
