const PageRadioGroup = require('../../../src/components/RadioGroup/pageObject');

const RADIO_GROUP = '#radio-group-component-1';

describe('RadioGroup base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/RadioGroup/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(RADIO_GROUP);
        await component.waitForExist();
    });

    it('should focus the item clicked', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await expect(await radio.hasFocus()).toBe(true);
    });
    it('should lose the focus when press arrow down', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        // TODO: Use constant once PR merged
        await browser.keys('ArrowDown');
        await expect(await radio.hasFocus()).toBe(false);
    });
    it('should focus the next item when press arrow down', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio1 = await radioGroup.getItem(1);
        const radio2 = await radioGroup.getItem(2);
        await radio1.click();
        // TODO: Use constant once PR merged
        await browser.keys('ArrowDown');
        await expect(await radio2.hasFocus()).toBe(true);
    });
    it('should check the item clicked', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await expect(await radio.isChecked()).toBe(true);
    });
    it('should uncheck the item when press arrow down', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        // TODO: Use constant once PR merged
        await browser.keys('ArrowDown');
        await expect(await radio.isChecked()).toBe(false);
    });
    it('should check the next item when press arrow down', async () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        const radio1 = await radioGroup.getItem(1);
        const radio2 = await radioGroup.getItem(2);
        await radio1.click();
        // TODO: Use constant once PR merged
        await browser.keys('ArrowDown');
        await expect(await radio2.isChecked()).toBe(true);
    });
});
