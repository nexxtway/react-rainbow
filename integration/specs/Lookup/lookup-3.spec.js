const PageLookup = require('../../../src/components/Lookup/pageObject');

const LOOKUP = '#lookup-3';

describe('Lookup small with icon and description example', () => {
    beforeAll(() => {
        browser.url('/#!/Lookup/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(LOOKUP);
        component.waitForExist();
    });
    /*
    it('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option5 = lookup.getOption(5);
        expect(option5.isVisible()).toBe(false);
        lookup.getOption(2).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(option5.isVisible()).toBe(true);
    });
    */
    it('should scroll up to see the first option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        lookup.getOption(2).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        lookup.getOption(2).hover();
        browser.keys('ArrowUp');
        browser.keys('ArrowUp');
        expect(option1.isVisible()).toBe(true);
    });
    /*
    it('should scroll down when hover the down arrow', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option = lookup.getOption(6);
        expect(option.isVisible()).toBe(false);
        lookup.hoverScrollDownArrow();
        option.waitUntilIsVisible();
        expect(option.isVisible()).toBe(true);
    });
    it('should scroll up when hover the up arrow', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const latestOption = lookup.getOption(7);
        expect(latestOption.isVisible()).toBe(false);
        const firstOption = lookup.getOption(0);
        expect(firstOption.isVisible()).toBe(true);
        lookup.hoverScrollDownArrow();
        latestOption.waitUntilIsVisible();
        expect(latestOption.isVisible()).toBe(true);
        lookup.hoverScrollUpArrow();
        firstOption.waitUntilIsVisible();
        expect(firstOption.isVisible()).toBe(true);
    });
    */
    it('should arrow down be visible when last option is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        expect(lookup.arrowDownExists()).toBe(true);
        lookup.getOption(2).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(lookup.arrowDownExists()).toBe(true);
    });
    it('should arrow up be visible when first option is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        expect(lookup.arrowUpExists()).toBe(false);
        const option3 = lookup.getOption(2);
        option3.hover();
        browser.keys('ArrowDown');
        expect(lookup.arrowUpExists()).toBe(true);
    });
    it('should arrow up and arrow down be visible both when first option and latest option is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option3 = lookup.getOption(2);
        option3.hover();
        browser.keys('ArrowDown');
        expect(lookup.arrowUpExists()).toBe(true);
        expect(lookup.arrowDownExists()).toBe(true);
    });
});
