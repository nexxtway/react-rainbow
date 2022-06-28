const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-1';

describe('ButtonGroupPicker base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonGroupPicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON_GROUP_PICKER);
        await component.waitForExist();
    });

    it('should focus the option clicked', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(1);
        await option.click();
        await expect(await option.hasFocus()).toBe(true);
    });

    it('should check the option clicked', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(1);
        await option.click();
        await expect(await option.isChecked()).toBe(true);
    });

    it('should focus the next option when press arrow down key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = await groupPicker.getItem(1);
        const option2 = await groupPicker.getItem(2);
        await option1.click();
        await browser.keys('ArrowDown');
        await expect(await option2.hasFocus()).toBe(true);
    });

    it('should check the next option when press arrow down key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = await groupPicker.getItem(1);
        const option2 = await groupPicker.getItem(2);
        await option1.click();
        await browser.keys('ArrowDown');
        await expect(await option2.isChecked()).toBe(true);
    });

    it('should uncheck the current option when press arrow down key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(1);
        await option.click();
        await browser.keys('ArrowDown');
        await expect(await option.isChecked()).toBe(false);
    });

    it('should check the previous option when press arrow left key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = await groupPicker.getItem(1);
        const option2 = await groupPicker.getItem(2);
        await option2.click();
        await browser.keys('ArrowLeft');
        await expect(await option1.isChecked()).toBe(true);
    });

    it('should check the next option when press arrow right key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = await groupPicker.getItem(1);
        const option2 = await groupPicker.getItem(2);
        await option1.click();
        await browser.keys('ArrowRight');
        await expect(await option2.isChecked()).toBe(true);
    });

    it('should uncheck the current option when press arrow left key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(1);
        await option.click();
        await browser.keys('ArrowLeft');
        await expect(await option.isChecked()).toBe(false);
    });

    it('should check the first option when last option is checked and press arrow right key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option0 = await groupPicker.getItem(0);
        const option2 = await groupPicker.getItem(2);
        await option2.click();
        await browser.keys('ArrowRight');
        await expect(await option0.isChecked()).toBe(true);
    });
});
