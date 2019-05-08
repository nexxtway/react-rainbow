/**
 * Star page object class.
 * @class
 */
class PageRatingStar {
    /**
     * Create a new Star page object.
     * @constructor
     * @param {string} rootElement - The selector of the Star root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /** Click the star.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('input[type="radio"]')
            .click();
    }

    /** Hover the star.
     * @method
     */
    hover() {
        return $(this.rootElement)
            .$('input[type="radio"]')
            .hover();
    }

    /**
     * Returns true when the star is checked.
     * @method
     * @returns {bool}
     */
    isChecked() {
        return !!$(this.rootElement)
            .$('input[type="radio"]')
            .getAttribute('checked');
    }
}

module.exports = PageRatingStar;
