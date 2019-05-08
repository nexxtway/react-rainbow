const CHECKBOX_LABEL_SELECTOR = '.rainbow-table_cell-checkbox label';
const CHECKBOX_INPUT_SELECTOR = '.rainbow-table_cell-checkbox input';

/**
 * Row page object class.
 * @class
 */
class PageTableRow {
    /**
     * Create a new Row page object.
     * @constructor
     * @param {string} rootElement - The selector of the Row root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the row to select.
     * @method
     */
    selectRow() {
        if (!this.isRowSelected()) {
            $(this.rootElement)
                .$(CHECKBOX_LABEL_SELECTOR)
                .click();
        }
    }

    /**
     * Clicks the row to select.
     * @method
     */
    deselectRow() {
        if (this.isRowSelected()) {
            $(this.rootElement)
                .$(CHECKBOX_LABEL_SELECTOR)
                .click();
        }
    }

    /**
     * Returns true when the row is selected.
     * @method
     * @returns {bool}
     */
    isRowSelected() {
        return $(this.rootElement)
            .$(CHECKBOX_INPUT_SELECTOR)
            .isSelected();
    }

    /**
     * Returns true when the row input is disabled.
     * @method
     * @returns {bool}
     */
    isRowSelectionDisabled() {
        return !$(this.rootElement)
            .$(CHECKBOX_INPUT_SELECTOR)
            .isEnabled();
    }
}

module.exports = PageTableRow;
