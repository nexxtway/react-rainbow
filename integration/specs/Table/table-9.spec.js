const PageTable = require('../../../src/components/Table/pageObject');

const TABLE = '#table-9';

describe('Table with radio buttons selection', () => {
    beforeAll(async () => {
        await browser.url('/#!/Table/9');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TABLE);
        await component.waitForExist();
    });
    it('should select a row', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        await expect(await row1.isRowSelected()).toBe(false);
        await row1.selectRow();
        await expect(await row1.isRowSelected()).toBe(true);
    });
    it('should select a new row and deselect the previous', async () => {
        const table = new PageTable(TABLE);
        const row1 = await table.getRow(0);
        const row4 = await table.getRow(4);
        await row1.selectRow();
        await expect(await row1.isRowSelected()).toBe(true);
        await expect(await row4.isRowSelected()).toBe(false);
        await row4.selectRow();
        await expect(await row1.isRowSelected()).toBe(false);
        await expect(await row4.isRowSelected()).toBe(true);
    });
});
