const PageLookup = require('../../../src/components/Lookup/pageObject');

const LOOKUP = '#lookup-5';
const REACT_LOGO = 'img[alt="react-rainbow"]';

describe('Lookup with options type section example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Lookup/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(LOOKUP);
        await component.waitForExist();
    });

    it('should render the right amount of matches', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        await expect(await lookup.getOptionsLength()).toBe(4);
    });
    it('should select La Habana with keyboard', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await lookup.getSelectedOptionLabel()).toBe('La Habana');
    });
    it('should select Barcelona with keyboard', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await browser.keys('ArrowUp');
        await browser.keys('Enter');
        await expect(await lookup.getSelectedOptionLabel()).toBe('Barcelona');
    });
    it('should set as active the first option that is not a header when other is active and close the menu and open it again', async () => {
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
    it('should scroll up to see the first option', async () => {
        const lookup = new PageLookup(LOOKUP);
        await lookup.click();
        await lookup.setQuery('a');
        await lookup.waitUntilOpen();
        const option1 = await lookup.getOption(0);
        await (await lookup.getOption(7)).hover();
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await browser.keys('ArrowUp');
        await expect(await option1.isVisible()).toBe(true);
    });
    /*
    it('should scroll down to see the next option focused when initially is not visible', () => {
        const lookup = new PageLookup(LOOKUP);
        lookup.click();
        lookup.setQuery('a');
        lookup.waitUntilOpen();
        const option7 = lookup.getOption(6);
        expect(option7.isVisible()).toBe(false);
        lookup.getOption(3).hover();
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(option7.isVisible()).toBe(true);
    });
    */
});
