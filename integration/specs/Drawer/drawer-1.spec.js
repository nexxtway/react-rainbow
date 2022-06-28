const PageDrawer = require('../../../src/components/Drawer/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');

const BUTTON = '#button-1';
const DRAWER = '#drawer-1';

describe('Drawer base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Drawer/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON);
        await component.waitForExist();
    });

    it('should open the drawer', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await expect(await drawer.isOpen()).toBe(true);
    });
    it('should return focus to trigger element when close drawer with ESC key', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await triggerButton.isFocused()).toBe(true);
    });
    it('should focus the close button when the drawer is opened and press TAB', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await browser.keys(TAB_KEY);
        await expect(await drawer.hasFocusCloseButton()).toBe(true);
    });
    it('should return focus to trigger element when close drawer with close button', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await drawer.clickCloseButton();
        await drawer.waitUntilClose();
        await expect(await triggerButton.isFocused()).toBe(true);
    });
    it('should close the drawer when click outside', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await drawer.clickBackDrop();
        await drawer.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(false);
    });
    it('should close the drawer when is opened and click the close button', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await drawer.clickCloseButton();
        await drawer.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(false);
    });
    it('should close the drawer when is opened and press ESC', async () => {
        const drawer = new PageDrawer(DRAWER);
        const triggerButton = await $(BUTTON);
        await triggerButton.click();
        await drawer.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await drawer.waitUntilClose();
        await expect(await drawer.isOpen()).toBe(false);
    });
});
