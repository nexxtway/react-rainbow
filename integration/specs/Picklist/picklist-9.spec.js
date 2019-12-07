const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

const PICKLIST = '#picklist-9';

const addNewBuildings = () => $('#button-icon_add-new-buildings').click();

describe('Picklist with PicklistOption changed dynamically', () => {
    beforeAll(() => {
        browser.url('/#!/Picklist/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(PICKLIST);
        component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
        browser.refresh();
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('One World Trade Center');
    });
    it('should select the second option with keyboard after it is added and removed dynamically a new element', () => {
        const picklist = new PagePicklist(PICKLIST);
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('One World Trade Center');
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
});
