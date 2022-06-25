const PageLookup = require('../../../src/components/Lookup/pageObject');

const LOOKUP = '#lookup-1';
const REACT_LOGO = 'img[alt="react-rainbow"]';

describe('Lookup base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Lookup/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(LOOKUP);
        await component.waitForExist();
    });

    it('should open the menu with empty message when type value that does not match any option', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('qwerty');
        await lookup.waitUntilOpen();
        await expect(await lookup.isMenuOpen()).toBe(true);
        await expect(await lookup.isMenuEmpty()).toBe(true);
    });
    it('should close menu when click outside it', async () => {
        const lookup = new PageLookup(LOOKUP);
        const logoElement = $(REACT_LOGO);
        await lookup.click();
        await lookup.setQuery('qwerty');
        await lookup.waitUntilOpen();
        await expect(await lookup.isMenuOpen()).toBe(true);
        await logoElement.click();
        await expect(await lookup.isMenuOpen()).toBe(false);
    });
    it('should render the right amount of matches', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('lo');
        await lookup.waitUntilOpen();
        await expect(await lookup.getOptionsLength()).toBe(3);
    });
    it('should close the menu, return focus to input and reset its value when click the close button while menu is open', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('qwerty');
        await lookup.waitUntilOpen();
        await lookup.clickCloseButton();
        await expect(await lookup.isMenuOpen()).toBe(false);
        await expect(await lookup.hasFocusInput()).toBe(true);
        await expect(await lookup.getQuery()).toBe('');
    });
    it('should close the menu, return focus to input and reset its value when press esc key while menu is open', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('lo');
        await lookup.waitUntilOpen();
        await browser.keys('Escape');
        await expect(await lookup.isMenuOpen()).toBe(false);
        await expect(await lookup.hasFocusInput()).toBe(true);
        await expect(await lookup.getQuery()).toBe('');
    });
    it('should select Barcelona with keyboard', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('lo');
        await lookup.waitUntilOpen();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await lookup.getSelectedOptionLabel()).toBe('Barcelona');
    });
    it('should select London with keyboard', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('lo');
        await lookup.waitUntilOpen();
        await browser.keys('ArrowDown');
        await browser.keys('ArrowUp');
        await browser.keys('Enter');
        await expect(await lookup.getSelectedOptionLabel()).toBe('London');
    });
    it('should set to active La Habana when hover the option', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        const option3 = await lookup.getOption(2);
        await option3.hover();
        await expect(await option3.isActive()).toBe(true);
    });
    it('should select La Habana when click the option', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        const option3 = await lookup.getOption(2);
        await option3.click();
        await expect(await lookup.getSelectedOptionLabel()).toBe('La Habana');
    });
    it('should set as active the first option when other is active and close the menu and open it again', async () => {
        const lookup = new PageLookup(LOOKUP);
        const logoElement = $(REACT_LOGO);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option3 = await lookup.getOption(2);
        await option3.hover();
        await expect(await option3.isActive()).toBe(true);
        await logoElement.click();
        await lookup.click();
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await expect(await option3.isActive()).toBe(false);
        await expect(await option1.isActive()).toBe(true);
    });
    /*
    it('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option7 = lookup.getOption(6);
        expect(option7.isVisible()).toBe(false);
        lookup.getOption(5).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(option7.isVisible()).toBe(true);
    });
    */
    it('should scroll up to see the first option', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await (await lookup.getOption(4)).hover();
        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await (await lookup.getOption(2)).hover();
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await expect(await option1.isVisible()).toBe(true);
    });
    it('should set focus on input when it has an option selected and clicks the label', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await option1.click();
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(false);
        await lookup.clickLabel();
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(true);
    });
    it('should set focus on input when it has an option selected and clicks the input', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await option1.click();
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(false);
        await lookup.clickSelectedOptionInput();
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(true);
    });
    it('should set focus on remove selected option button when it has an option selected and press tab key', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await option1.click();
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(false);
        await browser.keys('Tab');
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(true);
        await expect(await lookup.hasFocusRemoveSelectedOptionButton()).toBe(false);
        await browser.keys('Tab');
        await expect(await lookup.hasFocusRemoveSelectedOptionButton()).toBe(true);
        await browser.keys('Tab');
        await expect(await lookup.hasFocusSelectedOptionInput()).toBe(false);
        await expect(await lookup.hasFocusRemoveSelectedOptionButton()).toBe(false);
        await browser.keys(['Shift', 'Tab']);
        await expect(await lookup.hasFocusRemoveSelectedOptionButton()).toBe(true);
    });
    it('should clear input value when click remove selected option button', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await option1.click();
        await lookup.clickRemoveSelectedOptionButton();
        await expect(await lookup.hasFocusInput()).toBe(true);
        await expect(await lookup.getQuery()).toBe('');
    });
});
