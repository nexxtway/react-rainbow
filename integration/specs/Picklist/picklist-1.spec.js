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
    beforeAll(() => {
        browser.url('/#!/Picklist/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(PICKLIST);
        component.waitForExist();
    });
    it('should open menu and not set focus to input when click it', () => {
        const picklist = new PagePicklist(PICKLIST);
        expect(picklist.hasFocusInput()).toBe(false);
        expect(picklist.isMenuOpen()).toBe(false);
        picklist.clickInput();
        picklist.waitUntilOpen();
        expect(picklist.isMenuOpen()).toBe(true);
        expect(picklist.hasFocusInput()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and click on input', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        picklist.clickInput();
        expect(picklist.isMenuOpen()).toBe(false);
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press any arrow key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.focusInput();
        const keys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
        keys.forEach(key => {
            browser.keys(ESCAPE_KEY);
            browser.keys(key);
            picklist.waitUntilOpen();
            expect(picklist.isMenuOpen()).toBe(true);
            expect(picklist.hasFocusInput()).toBe(false);
        });
    });
    it('should close menu when it is open and and press tab key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(TAB_KEY);
        expect(picklist.isMenuOpen()).toBe(false);
    });
    it('should close menu when click outside it', () => {
        const picklist = new PagePicklist(PICKLIST);
        const logoElement = $(REACT_LOGO);
        picklist.clickInput();
        picklist.waitUntilOpen();
        logoElement.click();
        expect(picklist.isMenuOpen()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and press esc key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(picklist.isMenuOpen()).toBe(false);
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press space key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.focusInput();
        browser.keys(SPACE_KEY);
        picklist.waitUntilOpen();
        expect(picklist.isMenuOpen()).toBe(true);
        expect(picklist.hasFocusInput()).toBe(false);
    });
    it('should select Experimental Building option and set focus to input when menu is open and press enter key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Experimental Building');
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and set Experimental Building option active when click on input', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(0);
        expect(picklist.isMenuOpen()).toBe(true);
        expect(option.isActive()).toBe(true);
    });
    it('should select Empire State with keyboard', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active Empire State when press arrow down key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        const option = picklist.getOption(1);
        expect(option.isActive()).toBe(true);
    });
    it('should set active Empire State when hover the option', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(1);
        option.hover();
        expect(option.isActive()).toBe(true);
    });
    it('should select Empire State when hover the option and press enter key', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(1);
        option.hover();
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active the first option when other is active and close the menu and open it again', () => {
        const picklist = new PagePicklist(PICKLIST);
        picklist.clickInput();
        picklist.waitUntilOpen();
        const option = picklist.getOption(0);
        expect(option.isActive()).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(option.isActive()).toBe(false);
        browser.keys(ENTER_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(option.isActive()).toBe(true);
    });
});
