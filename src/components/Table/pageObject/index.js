const PageTableRow = require('./row');

const HEAD_CHECKBOX_LABEL_SELECTOR = 'label[data-id="table-input-checkbox_label"]';
const HEAD_CHECKBOX_INPUT_SELECTOR = 'input[type="checkbox"]';

/**
 * Table page object class.
 * @class
 */
class PageTable {
    /**
     * Create a new Table page object.
     * @constructor
     * @param {string} rootElement - The selector of the Table root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the head checkbox to select the maximum selectable rows.
     * @method
     */
    selectAllRows() {
        const headCheckbox = $(this.rootElement)
            .$('thead')
            .$(HEAD_CHECKBOX_INPUT_SELECTOR);
        if (!headCheckbox.isSelected() && !headCheckbox.getAttribute('indeterminate')) {
            $(this.rootElement)
                .$('thead')
                .$(HEAD_CHECKBOX_LABEL_SELECTOR)
                .click();
        }
    }

    /**
     * Clicks the head checkbox to deselect all selected rows.
     * @method
     */
    deselectAllRows() {
        const headCheckbox = $(this.rootElement)
            .$('thead')
            .$(HEAD_CHECKBOX_INPUT_SELECTOR);
        if (headCheckbox.isSelected() || headCheckbox.getAttribute('indeterminate')) {
            $(this.rootElement)
                .$('thead')
                .$(HEAD_CHECKBOX_LABEL_SELECTOR)
                .click();
        }
    }

    /**
     * Returns a new Row page object of the row in the position passed.
     * @method
     * @param {number} rowPosition - The base 0 index of the row item.
     */
    getRow(rowPosition) {
        const rows = $(this.rootElement).$$('tbody > tr[data-id="table_body-row"]');
        if (rows[rowPosition]) {
            return new PageTableRow(
                `${this.rootElement} tr[data-id="table_body-row"]:nth-child(${rowPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Wait until the data is loaded.
     * @method
     */
    waitUntilDataIsLoaded() {
        browser.waitUntil(
            () =>
                !$(this.rootElement)
                    .$('div[data-id="table_body--loading"]')
                    .isDisplayed() &&
                $(this.rootElement)
                    .$('tr[data-id="table_body-row"]')
                    .isDisplayed(),
        );
    }
}

module.exports = PageTable;
