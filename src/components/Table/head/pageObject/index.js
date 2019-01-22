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

    getSortDirection() {
        const headerArrowClassName = $(this.rootElement).$('.rainbow-table_header-arrow').getAttribute('class');
        if (headerArrowClassName === 'rainbow-table_header-arrow rainbow-table_header-arrow--asc') {
            return 'asc';
        }
        return 'desc';
    }

    dragAndDrop(destination) {
        $(this.rootElement).dragAndDrop(destination, `${this.rootElement} .rainbow-table_header-resize-bar`);
    }

    getSelector() {
        return this.rootElement;
    }
}

module.exports = PageHeader;
