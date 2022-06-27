/* eslint-disable no-return-await */
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
    async selectAllRows() {
        const headCheckbox = await $(this.rootElement)
            .$('thead')
            .$(HEAD_CHECKBOX_INPUT_SELECTOR);
        if (
            !(await headCheckbox.isSelected()) &&
            !(await headCheckbox.getAttribute('indeterminate'))
        ) {
            await $(this.rootElement)
                .$('thead')
                .$(HEAD_CHECKBOX_LABEL_SELECTOR)
                .click();
        }
    }

    /**
     * Clicks the head checkbox to deselect all selected rows.
     * @method
     */
    async deselectAllRows() {
        const headCheckbox = await $(this.rootElement)
            .$('thead')
            .$(HEAD_CHECKBOX_INPUT_SELECTOR);
        if (
            (await headCheckbox.isSelected()) ||
            (await headCheckbox.getAttribute('indeterminate'))
        ) {
            await $(this.rootElement)
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
    async getRow(rowPosition) {
        const rows = await $(this.rootElement).$$('tbody > tr[data-id="table_body-row"]');
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
    async waitUntilDataIsLoaded() {
        await browser.waitUntil(
            async () =>
                !(await $(this.rootElement)
                    .$('div[data-id="table_body--loading"]')
                    .isDisplayed()) &&
                (await $(this.rootElement)
                    .$('tr[data-id="table_body-row"]')
                    .isDisplayed()),
        );
    }
}

module.exports = PageTable;
