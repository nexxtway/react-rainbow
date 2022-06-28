/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const PagePicklist = require('../../../src/components/Picklist/pageObject');
const {
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
    ARROW_UP_KEY,
    ARROW_DOWN_KEY,
    SPACE_KEY,
    ENTER_KEY,
    ESCAPE_KEY,
    TAB_KEY,
} = require('../../constants');

const PICKLIST = '#picklist-1';
const REACT_LOGO = 'img[alt="react-rainbow"]';

describe('Picklist base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Picklist/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(PICKLIST);
        await component.waitForExist();
    });
    it('should open menu and not set focus to input when click it', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await expect(await picklist.hasFocusInput()).toBe(false);
        await expect(await picklist.isMenuOpen()).toBe(false);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await expect(await picklist.isMenuOpen()).toBe(true);
        await expect(await picklist.hasFocusInput()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and click on input', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await picklist.clickInput();
        await expect(await picklist.isMenuOpen()).toBe(false);
        await expect(await picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press any arrow key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.focusInput();
        const keys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
        for (const key of keys) {
            await browser.keys(ESCAPE_KEY);
            await browser.keys(key);
            await picklist.waitUntilOpen();
            expect(await picklist.isMenuOpen()).toBe(true);
            expect(await picklist.hasFocusInput()).toBe(false);
        }
    });
    it('should close menu when it is open and and press tab key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(TAB_KEY);
        await expect(await picklist.isMenuOpen()).toBe(false);
    });
    it('should close menu when click outside it', async () => {
        const picklist = new PagePicklist(PICKLIST);
        const logoElement = $(REACT_LOGO);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await logoElement.click();
        await expect(await picklist.isMenuOpen()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and press esc key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await picklist.isMenuOpen()).toBe(false);
        await expect(await picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press space key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.focusInput();
        await browser.keys(SPACE_KEY);
        await picklist.waitUntilOpen();
        await expect(await picklist.isMenuOpen()).toBe(true);
        await expect(await picklist.hasFocusInput()).toBe(false);
    });
    it('should select Experimental Building option and set focus to input when menu is open and press enter key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('Experimental Building');
        await expect(await picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and set Experimental Building option active when click on input', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(0);
        await expect(await picklist.isMenuOpen()).toBe(true);
        await expect(await option.isActive()).toBe(true);
    });
    it('should select Empire State with keyboard', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active Empire State when press arrow down key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        const option = await picklist.getOption(1);
        await expect(await option.isActive()).toBe(true);
    });
    it('should set active Empire State when hover the option', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(1);
        await option.hover();
        await expect(await option.isActive()).toBe(true);
    });
    it('should select Empire State when hover the option and press enter key', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(1);
        await option.hover();
        await browser.keys(ENTER_KEY);
        await expect(await picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active the first option when other is active and close the menu and open it again', async () => {
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        const option = await picklist.getOption(0);
        await expect(await option.isActive()).toBe(true);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await option.isActive()).toBe(false);
        await browser.keys(ENTER_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await option.isActive()).toBe(true);
    });
});
