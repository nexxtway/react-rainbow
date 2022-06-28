const PageVisualPicker = require('../../../src/components/VisualPicker/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const VISUAL_PICKER = '#visual-picker-component-1';

describe('VisualPicker with single option selection', () => {
    beforeAll(async () => {
        await browser.url('/#!/VisualPicker/1');
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
        const option2 = await visualPicker.getItem(1);
        await option1.click();
        await option2.click();
        await expect(await option1.hasFocus()).toBe(false);
    });
    it('should set checked on the option when clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option = await visualPicker.getItem(0);
        await option.click();
        await expect(await option.isChecked()).toBe(true);
    });
    it('should not be checked if another option is clicked', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = await visualPicker.getItem(0);
        const option2 = await visualPicker.getItem(1);
        await option1.click();
        await option2.click();
        await expect(await option1.isChecked()).toBe(false);
    });
    it(' should check the next option when press left arrow key', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = await visualPicker.getItem(0);
        const option2 = await visualPicker.getItem(1);
        await option2.click();
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await option1.isChecked()).toBe(true);
        await expect(await option2.isChecked()).toBe(false);
    });
    it(' should check the next option when press right arrow key', async () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = await visualPicker.getItem(0);
        const option2 = await visualPicker.getItem(1);
        await option1.click();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await option1.isChecked()).toBe(false);
        await expect(await option2.isChecked()).toBe(true);
    });
});
