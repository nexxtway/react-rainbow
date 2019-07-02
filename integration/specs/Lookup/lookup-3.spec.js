const PageLookup = require('../../../src/components/Lookup/pageObject');
const { ARROW_DOWN_KEY, ARROW_UP_KEY } = require('../../constants');

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

    it('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option5 = lookup.getOption(4);
        expect(option5.isVisible()).toBe(false);
        lookup.getOption(2).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(option5.isVisible()).toBe(true);
    });
    it('should scroll up to see the first option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        lookup.getOption(2).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        lookup.getOption(2).hover();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(option1.isVisible()).toBe(true);
    });
});
