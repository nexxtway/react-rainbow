const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

const PICKLIST = '#picklist-9';

const addNewBuildings = () => $('#button-icon_add-new-buildings').click();

describe('Picklist with PicklistOption changed dynamically', () => {
    beforeAll(async () => {
        await browser.url('/#!/Picklist/9');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(PICKLIST);
        await component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('Empire State');
        await browser.refresh();
        await addNewBuildings();
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('One World Trade Center');
    });
    it('should select the second option with keyboard after it is added and removed dynamically a new element', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await addNewBuildings();
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('One World Trade Center');
        await addNewBuildings();
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
});
