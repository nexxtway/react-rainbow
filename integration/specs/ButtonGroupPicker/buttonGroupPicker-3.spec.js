const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-3';

describe('ButtonGroupPicker base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonGroupPicker/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON_GROUP_PICKER);
        await component.waitForExist();
    });

    it('should not check the next option when multiple is true and press arrow down key', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option2 = await groupPicker.getItem(2);
        const option3 = await groupPicker.getItem(3);
        await option2.click();
        await browser.keys('ArrowDown');
        await expect(await option3.isChecked()).toBe(false);
    });

    it('should uncheck the current option when multiple is true and click a checked item', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(1);
        await option.click();
        await expect(await option.isChecked()).toBe(false);
    });

    it('should allow several options checked at the same time', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = await groupPicker.getItem(0);
        const option2 = await groupPicker.getItem(1);
        const option3 = await groupPicker.getItem(2);
        await option3.click();
        await expect(await option1.isChecked()).toBe(true);
        await expect(await option2.isChecked()).toBe(true);
        await expect(await option3.isChecked()).toBe(true);
    });
});
