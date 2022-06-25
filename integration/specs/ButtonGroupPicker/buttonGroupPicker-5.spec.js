const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-5';

describe('ButtonGroupPicker base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonGroupPicker/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON_GROUP_PICKER);
        await component.waitForExist();
    });

    it('should not check the disabled option when clicked', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(0);
        await option.click();
        await expect(await option.isChecked()).toBe(false);
    });

    it('should not focus the disabled option when clicked', async () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = await groupPicker.getItem(0);
        await option.click();
        await expect(await option.hasFocus()).toBe(false);
    });
});
