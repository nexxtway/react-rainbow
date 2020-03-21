const PageDrawer = require('../../../src/components/Drawer/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');

const BUTTON = '#button-1';
const DRAWER = '#drawer-1';

describe('Drawer base example', () => {
    beforeAll(() => {
        browser.url('/#!/Drawer/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON);
        component.waitForExist();
    });

    it('should open the drawer', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        expect(drawer.isOpen()).toBe(true);
    });
    it('should return focus to trigger element when close drawer with ESC key', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(triggerButton.isFocused()).toBe(true);
    });
    it('should focus the close button when the drawer is opened and press TAB', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        browser.keys(TAB_KEY);
        expect(drawer.hasFocusCloseButton()).toBe(true);
    });
    it('should return focus to trigger element when close drawer with close button', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        drawer.clickCloseButton();
        drawer.waitUntilClose();
        expect(triggerButton.isFocused()).toBe(true);
    });
    it('should close the drawer when click outside', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        drawer.clickBackDrop();
        drawer.waitUntilClose();
        expect(triggerButton.isFocused()).toBe(true);
    });
    it('should close the drawer when is opened and click the close button', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        drawer.clickCloseButton();
        drawer.waitUntilClose();
        expect(drawer.isOpen()).toBe(false);
    });
    it('should close the drawer when is opened and press ESC', () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        drawer.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        drawer.waitUntilClose();
        expect(drawer.isOpen()).toBe(false);
    });
});
