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

    get root() {
        return $(this.rootElement);
    }

    get input() {
        return this.root.then(root => root.$('input'));
    }

    /** Click the ButtonOption.
     * @method
     */
    async click() {
        return (await this.root).click();
    }

    /**
     * Returns true when the ButtonOption has the focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        return (await this.input).isFocused();
    }

    /**
     * Returns true when the ButtonOption is checked.
     * @method
     * @returns {bool}
     */
    async isChecked() {
        return (await this.input).isSelected();
    }
}

module.exports = PageButtonOption;
