const PagePicklist = require('../../../src/components/Picklist/pageObject');
const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');
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
const INTERNALDROPDOWN =
    '//div[contains(@id, "listbox-") and @class="sc-cpHetk idpnYm" and @role="listbox"]';
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
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        expect(picklist.hasFocusInput()).toBe(false);
        expect(picklistMenu.isMenuOpen()).toBe(false);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        expect(picklistMenu.isMenuOpen()).toBe(true);
        expect(picklist.hasFocusInput()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and click on input', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        picklist.clickInput();
        expect(picklistMenu.isMenuOpen()).toBe(false);
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press any arrow key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.focusInput();
        const keys = [ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
        keys.forEach(key => {
            browser.keys(ESCAPE_KEY);
            browser.keys(key);
            picklistMenu.waitUntilOpen();
            expect(picklistMenu.isMenuOpen()).toBe(true);
            expect(picklist.hasFocusInput()).toBe(false);
        });
    });
    it('should close menu when it is open and and press tab key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        browser.keys(TAB_KEY);
        expect(picklistMenu.isMenuOpen()).toBe(false);
    });
    it('should close menu when click outside it', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        const logoElement = $(REACT_LOGO);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        logoElement.click();
        expect(picklistMenu.isMenuOpen()).toBe(false);
    });
    it('should close menu and set focus to input when menu is open and press esc key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(picklistMenu.isMenuOpen()).toBe(false);
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and lose input focus when it is focused and press space key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.focusInput();
        browser.keys(SPACE_KEY);
        picklistMenu.waitUntilOpen();
        expect(picklistMenu.isMenuOpen()).toBe(true);
        expect(picklist.hasFocusInput()).toBe(false);
    });
    it('should select Experimental Building option and set focus to input when menu is open and press enter key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Experimental Building');
        expect(picklist.hasFocusInput()).toBe(true);
    });
    it('should open menu and set Experimental Building option active when click on input', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const option = picklistMenu.getOption(0);
        expect(picklistMenu.isMenuOpen()).toBe(true);
        expect(option.isActive()).toBe(true);
    });
    it('should select Empire State with keyboard', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active Empire State when press arrow down key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        const option = picklistMenu.getOption(1);
        expect(option.isActive()).toBe(true);
    });
    it('should set active Empire State when hover the option', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const option = picklistMenu.getOption(1);
        option.hover();
        expect(option.isActive()).toBe(true);
    });
    it('should select Empire State when hover the option and press enter key', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        const option = picklistMenu.getOption(1);
        option.hover();
        browser.keys(ENTER_KEY);
        expect(picklist.getSelectedOptionLabel()).toBe('Empire State');
    });
    it('should set active the first option when other is active and close the menu and open it again', () => {
        const picklist = new PagePicklist(PICKLIST);
        const picklistMenu = new PageInternalDropdown(INTERNALDROPDOWN);
        picklist.clickInput();
        picklistMenu.waitUntilOpen();
        let option = picklistMenu.getOption(0);
        expect(option.isActive()).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        browser.keys(ARROW_DOWN_KEY);
        picklistMenu.waitUntilOpen();
        option = picklistMenu.getOption(0);
        expect(option.isActive()).toBe(true);
    });
});
