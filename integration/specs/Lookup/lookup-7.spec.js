const PageLookup = require('../../../src/components/Lookup/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    ENTER_KEY,
} = require('../../constants');

const LOOKUP = '#lookup-7';

describe('Lookup with options type section example', () => {
    beforeAll(() => {
        browser.url('/#!/Lookup/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(LOOKUP);
        component.waitForExist();
    });

    it('should render the right amount of matches', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        expect(lookup.getOptionsLength()).toBe(4);
    });
    it('should select La Habana with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(lookup.getSelectedOptionLabel()).toBe('La Habana');
    });
    it('should select Barcelona with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        browser.keys(ENTER_KEY);
        expect(lookup.getSelectedOptionLabel()).toBe('Barcelona');
    });
});
