const PageLookup = require('../../../src/components/Lookup/pageObject');

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
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        expect(lookup.isMenuOpen()).toBe(true);
        expect(lookup.isMenuEmpty()).toBe(true);
    });
    it('should close menu when click outside it', () => {
        const lookup = new PageLookup(LOOKUP);
        const logoElement = $(REACT_LOGO);
        lookup.click();
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        expect(lookup.isMenuOpen()).toBe(true);
        logoElement.click();
        expect(lookup.isMenuOpen()).toBe(false);
    });
    it('should render the right amount of matches', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('lo');
        lookup.waitUntilOpen();
        expect(lookup.getOptionsLength()).toBe(3);
    });
    it('should close the menu, return focus to input and reset its value when click the close button while menu is open', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        lookup.clickCloseButton();
        expect(lookup.isMenuOpen()).toBe(false);
        expect(lookup.hasFocusInput()).toBe(true);
        expect(lookup.getQuery()).toBe('');
    });
    it('should close the menu, return focus to input and reset its value when press esc key while menu is open', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('lo');
        lookup.waitUntilOpen();
        browser.keys('Escape');
        expect(lookup.isMenuOpen()).toBe(false);
        expect(lookup.hasFocusInput()).toBe(true);
        expect(lookup.getQuery()).toBe('');
    });
    it('should select Barcelona with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('lo');
        lookup.waitUntilOpen();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        expect(lookup.getSelectedOptionLabel()).toBe('Barcelona');
    });
    it('should select London with keyboard', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('lo');
        lookup.waitUntilOpen();
        browser.keys('ArrowDown');
        browser.keys('ArrowUp');
        browser.keys('Enter');
        expect(lookup.getSelectedOptionLabel()).toBe('London');
    });
    it('should set to active La Habana when hover the option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        const option3 = lookup.getOption(2);
        option3.hover();
        expect(option3.isActive()).toBe(true);
    });
    it('should select La Habana when click the option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        const option3 = lookup.getOption(2);
        option3.click();
        expect(lookup.getSelectedOptionLabel()).toBe('La Habana');
    });
    it('should set as active the first option when other is active and close the menu and open it again', () => {
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
        const option1 = lookup.getOption(0);
        expect(option3.isActive()).toBe(false);
        expect(option1.isActive()).toBe(true);
    });
    it('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option7 = lookup.getOption(7);
        expect(option7.isVisible()).toBe(false);
        lookup.getOption(5).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(option7.isVisible()).toBe(true);
    });
    it('should scroll up to see the first option', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        lookup.getOption(4).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        lookup.getOption(2).hover();
        browser.keys('ArrowUp');
        browser.keys('ArrowUp');
        expect(option1.isVisible()).toBe(true);
    });
    it('should set focus on input when it has an option selected and clicks the label', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        option1.click();
        expect(lookup.hasFocusSelectedOptionInput()).toBe(false);
        lookup.clickLabel();
        expect(lookup.hasFocusSelectedOptionInput()).toBe(true);
    });
    it('should set focus on input when it has an option selected and clicks the input', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        option1.click();
        expect(lookup.hasFocusSelectedOptionInput()).toBe(false);
        lookup.clickSelectedOptionInput();
        expect(lookup.hasFocusSelectedOptionInput()).toBe(true);
    });
    it('should set focus on remove selected option button when it has an option selected and press tab key', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        option1.click();
        expect(lookup.hasFocusSelectedOptionInput()).toBe(false);
        browser.keys('Tab');
        expect(lookup.hasFocusSelectedOptionInput()).toBe(true);
        expect(lookup.hasFocusRemoveSelectedOptionButton()).toBe(false);
        browser.keys('Tab');
        expect(lookup.hasFocusRemoveSelectedOptionButton()).toBe(true);
        browser.keys('Tab');
        expect(lookup.hasFocusSelectedOptionInput()).toBe(false);
        expect(lookup.hasFocusRemoveSelectedOptionButton()).toBe(false);
        browser.keys(['Shift', 'Tab']);
        expect(lookup.hasFocusRemoveSelectedOptionButton()).toBe(true);
    });
    it('should clear input value when click remove selected option button', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option1 = lookup.getOption(0);
        option1.click();
        lookup.clickRemoveSelectedOptionButton();
        expect(lookup.hasFocusInput()).toBe(true);
        expect(lookup.getQuery()).toBe('');
    });
});
