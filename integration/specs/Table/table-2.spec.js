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

    it('should resize the first header when it`s resizeBar is moved', () => {
        const table = new PageTable(TABLE);
        const tableHeader = table.getHeaderItem(0);
        const initialWidth = tableHeader.getSize().width;
        browser.actions()
            .mouseMove(tableHeader.getResizeBar())
            .mouseDown()
            .moveMove(table.getHeaderItem(2))
            .mouseUp()
            .perform();
        browser.pause(8000);
        const newWidth = tableHeader.getSize.width;
        console.log('widths: ', initialWidth, newWidth);
        expect(newWidth).toBe(initialWidth);
    });
});
