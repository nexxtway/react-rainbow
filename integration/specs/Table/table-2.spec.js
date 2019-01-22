const PageTable = require('../../../src/components/Table/pageObject');

const TABLE = '#table-2';

describe('Table with sorting example', () => {
    beforeEach(() => {
        browser.url('/#!/Table/3');
        browser.refresh();
    });

    it('should select the first header when clicked', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getItem(0);
        tableHeader.click();
        expect(tableHeader.isSelected()).toBe(true);
    });

    it('should not select the second header when clicked', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getItem(1);
        tableHeader.click();
        expect(tableHeader.isSelected()).toBe(false);
    });

    it('should set sortDirection to "asc" when clicked once', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getItem(1);
        tableHeader.click();
        expect(tableHeader.getSortDirection()).toBe('asc');
    });

    it('should change the sortDirection when clicked twice', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getItem(0);
        tableHeader.click();
        const firstSortDirection = tableHeader.getSortDirection();
        tableHeader.click();
        const secondSortDirection = tableHeader.getSortDirection();
        expect(firstSortDirection === secondSortDirection).toBe(false);
    });

    it('should resize the first header when it`s resizeBar is moved', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getItem(0);
        tableHeader.dragAndDrop(table.getItem(2).getSelector());
        expect(tableHeader.isSelected()).toBe(false);
    });
});
