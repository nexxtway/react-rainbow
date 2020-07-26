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
    it('should scroll up to see the first option', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        picklist.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        const firstOption = picklist.getOption(0);
        expect(firstOption.isVisible()).toBe(false);
        picklist.getOption(2).hover();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(firstOption.isVisible()).toBe(true);
    });
    it('should scroll down when hover the down arrow', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(6);
        expect(option.isVisible()).toBe(false);
        picklist.hoverScrollDownArrow();
        option.waitUntilIsVisible();
        expect(option.isVisible()).toBe(true);
    });
    it.skip('should scroll up when hover the up arrow', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const firstOption = picklist.getOption(0);
        const latestOption = picklist.getOption(7);
        picklist.hoverScrollDownArrow();
        latestOption.waitUntilIsVisible();
        expect(firstOption.isVisible()).toBe(false);
        picklist.hoverScrollUpArrow();
        firstOption.waitUntilIsVisible();
        expect(firstOption.isVisible()).toBe(true);
    });
});
