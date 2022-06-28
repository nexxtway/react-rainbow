const PageVisualPicker = require('../../../src/components/VisualPicker/pageObject');

const VISUAL_PICKER = '#visual-picker-component-3';

describe('VisualPicker with multiple option selection', () => {
    beforeAll(async () => {
        await browser.url('/#!/VisualPicker/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(VISUAL_PICKER);
        await component.waitForExist();
    });
    it(' set the focus on the item clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option = await visualPicker.getItem(0);
        await option.click();
        await expect(await option.hasFocus()).toBe(true);
    });
    it('should loose focus if another option is clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = await visualPicker.getItem(0);
        const option3 = await visualPicker.getItem(2);
        await option1.click();
        await option3.click();
        await expect(await option1.hasFocus()).toBe(false);
    });
    it('should set checked on the option when clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option = await visualPicker.getItem(0);
        await option.click();
        await expect(await option.isChecked()).toBe(true);
    });
    it('should not loose the checked if another option is clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = await visualPicker.getItem(0);
        const option3 = await visualPicker.getItem(2);
        await option1.click();
        await option3.click();
        await expect(await option1.isChecked()).toBe(true);
        await expect(await option3.isChecked()).toBe(true);
    });
});
