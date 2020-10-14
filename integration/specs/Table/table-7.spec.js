const PageTable = require('../../../src/components/Table/pageObject');
const { SHIFT_KEY } = require('../../constants');
const holdDownKey = require('../../helpers/holdDownKey');
const releaseKey = require('../../helpers/releaseKey');

const TABLE = '#table-7';

describe('Table with selected rows', () => {
    beforeAll(() => {
        browser.url('/#!/Table/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TABLE);
        component.waitForExist();
    });
    it('should have the right rows selected initially', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        expect(row1.isRowSelected()).toBe(true);
        expect(row2.isRowSelected()).toBe(false);
        expect(row3.isRowSelected()).toBe(true);
        expect(row4.isRowSelected()).toBe(false);
        expect(row5.isRowSelected()).toBe(false);
        expect(row6.isRowSelected()).toBe(false);
        expect(row7.isRowSelected()).toBe(false);
    });
    it('should deselect all selected row when have rows selected initially', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        table.deselectAllRows();
        expect(row1.isRowSelected()).toBe(false);
        expect(row2.isRowSelected()).toBe(false);
        expect(row3.isRowSelected()).toBe(false);
        expect(row4.isRowSelected()).toBe(false);
        expect(row5.isRowSelected()).toBe(false);
        expect(row6.isRowSelected()).toBe(false);
        expect(row7.isRowSelected()).toBe(false);
    });
    it('should set the right rows to disabled when the maximum amount of selectable rows are selected', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        row5.selectRow();
        row6.selectRow();
        expect(row1.isRowSelected()).toBe(true);
        expect(row2.isRowSelected()).toBe(false);
        expect(row3.isRowSelected()).toBe(true);
        expect(row4.isRowSelected()).toBe(false);
        expect(row5.isRowSelected()).toBe(true);
        expect(row6.isRowSelected()).toBe(true);
        expect(row7.isRowSelected()).toBe(false);

        expect(row1.isRowSelectionDisabled()).toBe(false);
        expect(row2.isRowSelectionDisabled()).toBe(true);
        expect(row3.isRowSelectionDisabled()).toBe(false);
        expect(row4.isRowSelectionDisabled()).toBe(true);
        expect(row5.isRowSelectionDisabled()).toBe(false);
        expect(row6.isRowSelectionDisabled()).toBe(false);
        expect(row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should select the maximum amount of selectable rows and disable the rest when select all rows', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        table.deselectAllRows();
        table.selectAllRows();

        expect(row1.isRowSelected()).toBe(true);
        expect(row2.isRowSelected()).toBe(true);
        expect(row3.isRowSelected()).toBe(true);
        expect(row4.isRowSelected()).toBe(true);
        expect(row5.isRowSelected()).toBe(false);
        expect(row6.isRowSelected()).toBe(false);
        expect(row7.isRowSelected()).toBe(false);

        expect(row1.isRowSelectionDisabled()).toBe(false);
        expect(row2.isRowSelectionDisabled()).toBe(false);
        expect(row3.isRowSelectionDisabled()).toBe(false);
        expect(row4.isRowSelectionDisabled()).toBe(false);
        expect(row5.isRowSelectionDisabled()).toBe(true);
        expect(row6.isRowSelectionDisabled()).toBe(true);
        expect(row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should select the maximum amount of selectable rows and disable the rest when select the first and sixth row while press shift key', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        table.deselectAllRows();
        row1.selectRow();
        holdDownKey(SHIFT_KEY);
        row6.selectRow();
        releaseKey(SHIFT_KEY);
        expect(row1.isRowSelected()).toBe(true);
        expect(row2.isRowSelected()).toBe(true);
        expect(row3.isRowSelected()).toBe(true);
        expect(row4.isRowSelected()).toBe(true);
        expect(row5.isRowSelected()).toBe(false);
        expect(row6.isRowSelected()).toBe(false);
        expect(row7.isRowSelected()).toBe(false);

        expect(row1.isRowSelectionDisabled()).toBe(false);
        expect(row2.isRowSelectionDisabled()).toBe(false);
        expect(row3.isRowSelectionDisabled()).toBe(false);
        expect(row4.isRowSelectionDisabled()).toBe(false);
        expect(row5.isRowSelectionDisabled()).toBe(true);
        expect(row6.isRowSelectionDisabled()).toBe(true);
        expect(row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should set disabled rows to enable when all maximum amount of rows are selected and deselect one', () => {
        const table = new PageTable(TABLE);
        const row1 = table.getRow(0);
        const row2 = table.getRow(1);
        const row3 = table.getRow(2);
        const row4 = table.getRow(3);
        const row5 = table.getRow(4);
        const row6 = table.getRow(5);
        const row7 = table.getRow(6);
        row5.selectRow();
        row6.selectRow();

        expect(row1.isRowSelectionDisabled()).toBe(false);
        expect(row2.isRowSelectionDisabled()).toBe(true);
        expect(row3.isRowSelectionDisabled()).toBe(false);
        expect(row4.isRowSelectionDisabled()).toBe(true);
        expect(row5.isRowSelectionDisabled()).toBe(false);
        expect(row6.isRowSelectionDisabled()).toBe(false);
        expect(row7.isRowSelectionDisabled()).toBe(true);

        row5.deselectRow();
        expect(row1.isRowSelectionDisabled()).toBe(false);
        expect(row2.isRowSelectionDisabled()).toBe(false);
        expect(row3.isRowSelectionDisabled()).toBe(false);
        expect(row4.isRowSelectionDisabled()).toBe(false);
        expect(row5.isRowSelectionDisabled()).toBe(false);
        expect(row6.isRowSelectionDisabled()).toBe(false);
        expect(row7.isRowSelectionDisabled()).toBe(false);
    });
});
