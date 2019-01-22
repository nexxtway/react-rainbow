const PageTable = require('../../../src/components/Table/pageObject');

const TABLE = '#table-2';

describe('Table with sorting example', () => {
    beforeEach(() => {
        browser.url('/#!/Table/3');
        browser.refresh();
    });

    it('should select the first header when clicked', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getHeaderItem(0);
        tableHeader.click();
        expect(tableHeader.isSelected()).toBe(true);
    });

    it('should not select the second header when clicked if it is not sortable', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getHeaderItem(1);
        tableHeader.click();
        expect(tableHeader.isSelected()).toBe(false);
    });
});
