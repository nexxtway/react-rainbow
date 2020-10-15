const PageDrawer = require('../../../src/components/Drawer/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');

const BUTTON = '#contact-1';
const DRAWER = '#drawer-7';
const LOOKUP = '#contact-country-input';
const DATEPICKER = '#contact-birthday-input';

describe('Drawer advanced example', () => {
    beforeAll(() => {
        browser.url('/#!/Drawer/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON);
        component.waitForExist();
    });

    it('should return focus to the close button when tabbing all elements in drawer', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        expect(drawer.hasFocusCloseButton()).toBe(true);
    });
    it('should not close the drawer when is opened and press ESC if the lookup has value typed', () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        lookup.setQuery('can');
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(drawer.isOpen()).toBe(true);
    });
    it('should close the drawer when is opened and press ESC if the lookup value typed was clear', () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        lookup.click();
        lookup.setQuery('can');
        lookup.waitUntilOpen();
        lookup.clickCloseButton();
        browser.keys(ESCAPE_KEY);
        drawer.waitUntilClose();
        expect(drawer.isOpen()).toBe(false);
    });
    it('should not close the drawer when close the date picker input modal', () => {
        const drawer = new PageDrawer(DRAWER);
        const datePicker = new PageDatePicker(DATEPICKER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        datePicker.click();
        datePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        datePicker.waitUntilClose();
        expect(drawer.isOpen()).toBe(true);
    });
    it('should close the drawer when select an option and then press ESC', () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        lookup.click();
        lookup.setQuery('c');
        lookup.waitUntilOpen();
        const option = lookup.getOption(1);
        option.click();
        browser.keys(ESCAPE_KEY);
        drawer.waitUntilClose();
        expect(drawer.isOpen()).toBe(false);
    });
});
