const PageTable = require('../../../src/components/Table/pageObject');

const TABLE = '#table-9';

describe('Table with radio buttons selection', () => {
    beforeAll(() => {
        browser.url('/#!/Table/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TABLE);
        component.waitForExist();
    });
    it('should select a row', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        expect(row1.isRowSelected()).toBe(false);
        row1.selectRow();
        expect(row1.isRowSelected()).toBe(true);
    });
    it('should select a new row and deselect the previous', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row4 = table.getRow(4);
        row1.selectRow();
        expect(row1.isRowSelected()).toBe(true);
        expect(row4.isRowSelected()).toBe(false);
        row4.selectRow();
        expect(row1.isRowSelected()).toBe(false);
        expect(row4.isRowSelected()).toBe(true);
    });
});
