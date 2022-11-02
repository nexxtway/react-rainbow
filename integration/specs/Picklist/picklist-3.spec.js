const PagePicklist = require('../../../src/components/Picklist/pageObject');
const { ARROW_UP_KEY, ARROW_DOWN_KEY } = require('../../constants');

const PICKLIST = '#picklist-3';

describe('Picklist with multiple options', () => {
    beforeEach(async () => {
        await browser.url('/#!/Picklist/3');
        const component = await $(PICKLIST);
        await component.waitForExist();
    });

    it('should scroll down to see the next option focused when initially is not visible', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(4);
        await expect(await option.isVisible()).toBe(false);
        await (await picklist.getOption(3)).hover();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await option.isVisible()).toBe(true);
    });
    it('should scroll up to see the first option', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await (await picklist.getOption(3)).hover();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        const firstOption = await picklist.getOption(0);
        await expect(await firstOption.isVisible()).toBe(false);
        await (await picklist.getOption(2)).hover();
        await browser.keys(ARROW_UP_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await firstOption.isVisible()).toBe(true);
    });
    it('should scroll down when hover the down arrow', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(6);
        await expect(await option.isVisible()).toBe(false);
        await picklist.hoverScrollDownArrow();
        await option.waitUntilIsVisible();
        await expect(await option.isVisible()).toBe(true);
    });
    it('should scroll up when hover the up arrow', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const firstOption = await picklist.getOption(0);
        const latestOption = await picklist.getOption(7);
        await latestOption.scrollIntoView();
        await expect(await firstOption.isVisible()).toBe(false);
        await picklist.hoverScrollUpArrow();
        await firstOption.waitUntilIsVisible();
        await expect(await firstOption.isVisible()).toBe(true);
    });
    it('should not close when click on search input', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await picklist.clickSearch();
        await browser.pause(5000);
        await expect(await picklist.isMenuOpen()).toBe(true);
    });
});
