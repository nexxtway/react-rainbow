const PageTable = require('../../../src/components/Table/pageObject');
const { SHIFT_KEY_UNICODE } = require('../../constants');
const holdDownKey = require('../../helpers/holdDownKey');
const releaseKey = require('../../helpers/releaseKey');

const TABLE = '#table-7';

describe('Table with selected rows', () => {
    beforeAll(async () => {
        await browser.url('/#!/Table/7');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TABLE);
        await component.waitForExist();
    });
    it('should have the right rows selected initially', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await expect(await row1.isRowSelected()).toBe(true);
        await expect(await row2.isRowSelected()).toBe(false);
        await expect(await row3.isRowSelected()).toBe(true);
        await expect(await row4.isRowSelected()).toBe(false);
        await expect(await row5.isRowSelected()).toBe(false);
        await expect(await row6.isRowSelected()).toBe(false);
        await expect(await row7.isRowSelected()).toBe(false);
    });
    it('should deselect all selected row when have rows selected initially', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await table.deselectAllRows();
        await expect(await row1.isRowSelected()).toBe(false);
        await expect(await row2.isRowSelected()).toBe(false);
        await expect(await row3.isRowSelected()).toBe(false);
        await expect(await row4.isRowSelected()).toBe(false);
        await expect(await row5.isRowSelected()).toBe(false);
        await expect(await row6.isRowSelected()).toBe(false);
        await expect(await row7.isRowSelected()).toBe(false);
    });
    it('should set the right rows to disabled when the maximum amount of selectable rows are selected', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await row5.selectRow();
        await row6.selectRow();
        await expect(await row1.isRowSelected()).toBe(true);
        await expect(await row2.isRowSelected()).toBe(false);
        await expect(await row3.isRowSelected()).toBe(true);
        await expect(await row4.isRowSelected()).toBe(false);
        await expect(await row5.isRowSelected()).toBe(true);
        await expect(await row6.isRowSelected()).toBe(true);
        await expect(await row7.isRowSelected()).toBe(false);

        await expect(await row1.isRowSelectionDisabled()).toBe(false);
        await expect(await row2.isRowSelectionDisabled()).toBe(true);
        await expect(await row3.isRowSelectionDisabled()).toBe(false);
        await expect(await row4.isRowSelectionDisabled()).toBe(true);
        await expect(await row5.isRowSelectionDisabled()).toBe(false);
        await expect(await row6.isRowSelectionDisabled()).toBe(false);
        await expect(await row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should select the maximum amount of selectable rows and disable the rest when select all rows', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await table.deselectAllRows();
        await table.selectAllRows();

        await expect(await row1.isRowSelected()).toBe(true);
        await expect(await row2.isRowSelected()).toBe(true);
        await expect(await row3.isRowSelected()).toBe(true);
        await expect(await row4.isRowSelected()).toBe(true);
        await expect(await row5.isRowSelected()).toBe(false);
        await expect(await row6.isRowSelected()).toBe(false);
        await expect(await row7.isRowSelected()).toBe(false);

        await expect(await row1.isRowSelectionDisabled()).toBe(false);
        await expect(await row2.isRowSelectionDisabled()).toBe(false);
        await expect(await row3.isRowSelectionDisabled()).toBe(false);
        await expect(await row4.isRowSelectionDisabled()).toBe(false);
        await expect(await row5.isRowSelectionDisabled()).toBe(true);
        await expect(await row6.isRowSelectionDisabled()).toBe(true);
        await expect(await row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should select the maximum amount of selectable rows and disable the rest when select the first and sixth row while press shift key', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await table.deselectAllRows();
        await row1.selectRow();
        await holdDownKey(SHIFT_KEY_UNICODE);
        await row6.selectRow();
        await releaseKey(SHIFT_KEY_UNICODE);
        await expect(await row1.isRowSelected()).toBe(true);
        await expect(await row2.isRowSelected()).toBe(true);
        await expect(await row3.isRowSelected()).toBe(true);
        await expect(await row4.isRowSelected()).toBe(true);
        await expect(await row5.isRowSelected()).toBe(false);
        await expect(await row6.isRowSelected()).toBe(false);
        await expect(await row7.isRowSelected()).toBe(false);

        await expect(await row1.isRowSelectionDisabled()).toBe(false);
        await expect(await row2.isRowSelectionDisabled()).toBe(false);
        await expect(await row3.isRowSelectionDisabled()).toBe(false);
        await expect(await row4.isRowSelectionDisabled()).toBe(false);
        await expect(await row5.isRowSelectionDisabled()).toBe(true);
        await expect(await row6.isRowSelectionDisabled()).toBe(true);
        await expect(await row7.isRowSelectionDisabled()).toBe(true);
    });
    it('should set disabled rows to enable when all maximum amount of rows are selected and deselect one', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row2 = await table.getRow(1);
        const row3 = await table.getRow(2);
        const row4 = await table.getRow(3);
        const row5 = await table.getRow(4);
        const row6 = await table.getRow(5);
        const row7 = await table.getRow(6);
        await row5.selectRow();
        await row6.selectRow();

        await expect(await row1.isRowSelectionDisabled()).toBe(false);
        await expect(await row2.isRowSelectionDisabled()).toBe(true);
        await expect(await row3.isRowSelectionDisabled()).toBe(false);
        await expect(await row4.isRowSelectionDisabled()).toBe(true);
        await expect(await row5.isRowSelectionDisabled()).toBe(false);
        await expect(await row6.isRowSelectionDisabled()).toBe(false);
        await expect(await row7.isRowSelectionDisabled()).toBe(true);

        await row5.deselectRow();
        await expect(await row1.isRowSelectionDisabled()).toBe(false);
        await expect(await row2.isRowSelectionDisabled()).toBe(false);
        await expect(await row3.isRowSelectionDisabled()).toBe(false);
        await expect(await row4.isRowSelectionDisabled()).toBe(false);
        await expect(await row5.isRowSelectionDisabled()).toBe(false);
        await expect(await row6.isRowSelectionDisabled()).toBe(false);
        await expect(await row7.isRowSelectionDisabled()).toBe(false);
    });
});
