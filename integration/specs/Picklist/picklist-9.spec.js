const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ESCAPE_KEY, ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

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
    it('should render the right amount of options when children are changed dynamically', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        expect(picklist.getOptionsLength()).toBe(2);
        browser.keys(ESCAPE_KEY);
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        expect(picklist.getOptionsLength()).toBe(5);
    });
    it('should select Columbia Center with keyboard when children are changed dynamically', () => {
        const picklist = new PagePicklist(PICKLIST);
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Columbia Center');
    });
    it('should select Empire State when hover the option while children are changed dynamically', () => {
        const picklist = new PagePicklist(PICKLIST);
        addNewBuildings();
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(4);
        option.hover();
        expect(option.isActive()).toBe(true);
        option.click();
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
});
