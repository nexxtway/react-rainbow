/**
 * Table Header page object class.
 * @class
 */
class PageHeader {
    /**
     * Create a new Header page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalItem root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the header.
     * @method
     */
    click() {
        $(this.rootElement).$('.rainbow-table_header-container').click();
    }

    /**
     * Returns true when the header has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement).$('.rainbow-table_header-container').hasFocus();
    }

    /**
     * Returns true when the header is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return $(this.rootElement).getAttribute('class') === 'rainbow-table_header rainbow-table_header--sortable rainbow-table_header--selected';
    }

    dragAndDrop(xOffset, yOffset) {
        // $(this.rootElement)
        // .dragAndDrop(`${this.rootElement} .rainbow-table_header-resize-bar`, destination);
        const resizeBar = $(`${this.rootElement} .rainbow-table_header-resize-bar`);
        resizeBar.moveTo(xOffset, yOffset);
    }

    getSize() {
        return $(this.rootElement).getElementSize();
    }

    getSelector() {
        return this.rootElement;
    }

    getResizeBar() {
        return $(`${this.rootElement} .rainbow-table_header-resize-bar`);
    }
}

module.exports = PageHeader;
