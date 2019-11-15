const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

const PICKLIST = '#picklist-9';

const addNewBuildings = () => $('#button-icon_add-new-buildings').click();

describe('Picklist with PicklistOption changed dynamically', () => {
    it('should select Columbia Center with keyboard when children are changed dynamically', () => {
        browser.url('/#!/Picklist/9');
        const component = $(PICKLIST);
        component.waitForExist();
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
});
