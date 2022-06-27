const PageDrawer = require('../../../src/components/Drawer/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');
const PagePicklist = require('../../../src/components/Picklist/pageObject');

const BUTTON = '#contact-1';
const DRAWER = '#drawer-7';
const LOOKUP = '#contact-country-input';
const DATEPICKER = '#contact-birthday-input';
const BUTTONMENU = '#edit-profile-photo';
const PICKLIST = '#building-input';

describe('Drawer advanced example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Drawer/7');
    });

    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON);
        await component.waitForExist();
    });

    it('should return focus to the close button when tabbing all elements in drawer', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await expect(await drawer.hasFocusCloseButton()).toBe(true);
    });

    it('should not close the drawer when is opened and press ESC if the lookup has value typed', async () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await lookup.setQuery('can');
        await lookup.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await drawer.isOpen()).toBe(true);
    });

    it('should close the drawer when is opened and press ESC if the lookup value typed was clear', async () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await lookup.click();
        await lookup.setQuery('can');
        await lookup.waitUntilOpen();
        await lookup.clickCloseButton();
        await browser.keys(ESCAPE_KEY);
        await drawer.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(false);
    });

    it('should not close the drawer when close the date picker input modal', async () => {
        const drawer = new PageDrawer(DRAWER);
        const datePicker = new PageDatePicker(DATEPICKER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await datePicker.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(true);
    });

    it('should close the drawer when select an option and then press ESC', async () => {
        const drawer = new PageDrawer(DRAWER);
        const lookup = new PageLookup(LOOKUP);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await lookup.click();
        await lookup.setQuery('c');
        await lookup.waitUntilOpen();
        const option = await lookup.getOption(1);
        await option.click();
        await browser.keys(ESCAPE_KEY);
        await drawer.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(false);
    });

    it('should not close the drawer when click in the MenuItem of ButtonMenu', async () => {
        const drawer = new PageDrawer(DRAWER);
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(0);
        await menuItem.click();
        await expect(await drawer.isOpen()).toBe(true);
    });

    it('should not close the drawer when Picklist is open and press Esc key', async () => {
        const drawer = new PageDrawer(DRAWER);
        const picklist = new PagePicklist(PICKLIST);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await drawer.isOpen()).toBe(true);
    });
});
