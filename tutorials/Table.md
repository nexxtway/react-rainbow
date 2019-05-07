Here is an overview about how to use the Table page object:

    const PageTable = require('react-rainbow-components/components/Table/pageObject');

    const TABLE = '#table-1';

    describe('Table page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(TABLE);
            component.waitForExist();
        });

        it('should select and then deselect a row', () => {
            const table = new PageTable(TABLE);
            const row5 = table.getRow(4);
            expect(row5.isRowSelected()).toBe(false);
            row5.selectRow();
            expect(row5.isRowSelected()).toBe(true);
            row5.deselectRow();
            expect(row5.isRowSelected()).toBe(false);
        });
        it('should select all rows', () => {
            const table = new PageTable(TABLE);
            const row1 = table.getRow(0);
            const row2 = table.getRow(1);
            const row3 = table.getRow(2);

            expect(row1.isRowSelected()).toBe(false);
            expect(row2.isRowSelected()).toBe(false);
            expect(row3.isRowSelected()).toBe(false);

            table.selectAllRows();

            expect(row1.isRowSelected()).toBe(true);
            expect(row2.isRowSelected()).toBe(true);
            expect(row3.isRowSelected()).toBe(true);
        });
    });
