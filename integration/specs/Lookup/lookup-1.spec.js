const PageLookup = require('../../../src/components/Lookup/pageObject');
const {
    ESCAPE_KEY,
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    ENTER_KEY,
} = require('../../constants');

const LOOKUP = '#lookup-1';
const REACT_LOGO = 'img[alt="react-rainbow"]';

describe('Lookup base example', () => {
    beforeAll(() => {
        browser.url('/#!/Lookup/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(LOOKUP);
        component.waitForExist();
    });

    it('should open the menu with empty message when type a value that does not match any option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('qwerty');
        lookup.waitUntilOpen();
        expect(lookup.isMenuOpen()).toBe(true);
        expect(lookup.isMenuEmpty()).toBe(true);
    });
    it('should close menu when click outside it', () => {
        const lookup = new PageLookup(LOOKUP);
        const logoElement = $(REACT_LOGO);
        lookup.click();
        lookup.setValue('qwerty');
        lookup.waitUntilOpen();
        expect(lookup.isMenuOpen()).toBe(true);
        logoElement.click();
        expect(lookup.isMenuOpen()).toBe(false);
    });
    it('should render the right amount of matches', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('lo');
        lookup.waitUntilOpen();
        expect(lookup.getMatchedOptionsAmount()).toBe(3);
    });
    it('should close the menu, return focus to input and reset its value when click the close button while menu is open', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('qwerty');
        lookup.waitUntilOpen();
        lookup.clickCloseButton();
        expect(lookup.isMenuOpen()).toBe(false);
        expect(lookup.hasFocusInput()).toBe(true);
        expect(lookup.getValue()).toBe('');
    });
    it('should close the menu, return focus to input and reset its value when press esc key while menu is open', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('lo');
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(lookup.isMenuOpen()).toBe(false);
        expect(lookup.hasFocusInput()).toBe(true);
        expect(lookup.getValue()).toBe('');
    });
    it('should select Barcelona with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('lo');
        lookup.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(lookup.getSelectedOptionLabel()).toBe('Barcelona');
    });
    it('should select London with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('lo');
        lookup.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        browser.keys(ENTER_KEY);
        expect(lookup.getSelectedOptionLabel()).toBe('London');
    });
    it('should set to active La Habana when hover the item', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('l');
        lookup.waitUntilOpen();
        const item3 = lookup.getItem(2);
        item3.hover();
        expect(item3.isActive()).toBe(true);
    });
    it('should select La Habana when click the item', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setValue('l');
        lookup.waitUntilOpen();
        const item3 = lookup.getItem(2);
        item3.click();
        expect(lookup.getSelectedOptionLabel()).toBe('La Habana');
    });
});
