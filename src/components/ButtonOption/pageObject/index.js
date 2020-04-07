/**
 * ButtonOption page object class.
 * @class
 */
class PageButtonOption {
    /**
     * Create a new ButtonOption page object.
     * @constructor
     * @param {string} rootElement - The selector of the Radio root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /** Click the ButtonOption.
     * @method
     */
    click() {
        $(this.rootElement).click();
    }

    /**
     * Returns true when the ButtonOption has the focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('input')
            .isFocused();
    }

    /**
     * Returns true when the ButtonOption is checked.
     * @method
     * @returns {bool}
     */
    isChecked() {
        return !!$(this.rootElement)
            .$('input')
            .isSelected();
    }
}

module.exports = PageButtonOption;
