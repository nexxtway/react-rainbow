const PageLookup = require('../../../src/components/Lookup/pageObject');
const { ARROW_DOWN_KEY, ARROW_UP_KEY, ENTER_KEY } = require('../../constants');

const LOOKUP = '#lookup-5';
const REACT_LOGO = 'img[alt="react-rainbow"]';

describe('Lookup with options type section example', () => {
    beforeAll(() => {
        browser.url('/#!/Lookup/5');
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
    it('should set as active the first option that is not a header when other is active and close the menu and open it again', () => {
        const lookup = new PageLookup(LOOKUP);
        const logoElement = $(REACT_LOGO);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option3 = lookup.getOption(2);
        option3.hover();
        expect(option3.isActive()).toBe(true);
        logoElement.click();
        lookup.click();
        lookup.waitUntilOpen();
        const option2 = lookup.getOption(1);
        expect(option3.isActive()).toBe(false);
        expect(option2.isActive()).toBe(true);
    });
    it('should scroll up to see the first option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        lookup.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        lookup.getOption(2).hover();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(option1.isVisible()).toBe(true);
    });
    it.skip('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option7 = lookup.getOption(6);
        expect(option7.isVisible()).toBe(false);
        lookup.getOption(3).hover();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(option7.isVisible()).toBe(true);
    });
});
