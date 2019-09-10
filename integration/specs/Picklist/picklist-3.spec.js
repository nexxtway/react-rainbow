const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ARROW_UP_KEY, ARROW_DOWN_KEY } = require('../../constants');

const PICKLIST = '#picklist-3';

describe('Picklist with multiple options', () => {
    beforeAll(() => {
        browser.url('/#!/Picklist/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(PICKLIST);
        component.waitForExist();
    });
    it('should scroll down to see the next option focused when initially is not visible', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(4);
        expect(option.isVisible()).toBe(false);
        picklist.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(option.isVisible()).toBe(true);
    });
    it('should scroll down when hover the down arrow', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(6);
        expect(option.isVisible()).toBe(false);
        picklist.hoverScrollDownArrow();
        option.waitUntilDisplayed();
        expect(option.isVisible()).toBe(true);
    });
});
