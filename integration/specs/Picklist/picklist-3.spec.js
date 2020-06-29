const PagePicklist = require('../../../src/components/Picklist/pageObject');
const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');
const { ARROW_UP_KEY, ARROW_DOWN_KEY } = require('../../constants');

const PICKLIST = '#picklist-3';
const INTERNALDROPDOWN =
    '//div[contains(@id, "listbox-") and @class="sc-cpHetk idpnYm" and @role="listbox"]';

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
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const option = picklistMenu.getOption(4);
        expect(option.isVisible()).toBe(false);
        picklistMenu.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(option.isVisible()).toBe(true);
    });
    it('should scroll up to see the first option', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        picklistMenu.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        const firstOption = picklistMenu.getOption(0);
        expect(firstOption.isVisible()).toBe(false);
        picklistMenu.getOption(2).hover();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(firstOption.isVisible()).toBe(true);
    });
    it('should scroll down when hover the down arrow', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const option = picklistMenu.getOption(6);
        expect(option.isVisible()).toBe(false);
        picklistMenu.hoverScrollDownArrow();
        option.waitUntilIsVisible();
        expect(option.isVisible()).toBe(true);
    });
    it.skip('should up down when hover the up arrow', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const firstOption = picklistMenu.getOption(0);
        const latestOption = picklistMenu.getOption(7);
        picklistMenu.hoverScrollDownArrow();
        latestOption.waitUntilIsVisible();
        expect(firstOption.isVisible()).toBe(false);
        picklistMenu.hoverScrollUpArrow();
        firstOption.waitUntilIsVisible();
        expect(firstOption.isVisible()).toBe(true);
    });
});
