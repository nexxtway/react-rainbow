const PageRadioButtonGroup = require('../../../src/components/RadioButtonGroup/pageObject');
const { ARROW_DOWN_KEY } = require('../../constants');

const RADIO_BUTTON_GROUP = '#radio-button-group-component-1';

describe('RadioButtonGroup base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/RadioButtonGroup/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(RADIO_BUTTON_GROUP);
        await component.waitForExist();
    });

    it('should focus the item clicked', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await expect(await radio.hasFocus()).toBe(true);
    });
    it('should lose the focus when press arrow down', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await radio.hasFocus()).toBe(false);
    });
    it('should focus the next item when press arrow down', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio1 = await radioGroup.getItem(1);
        const radio2 = await radioGroup.getItem(2);
        await radio1.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await radio2.hasFocus()).toBe(true);
    });
    it('should check the item clicked', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await expect(await radio.isChecked()).toBe(true);
    });
    it('should uncheck the item when press arrow down', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = await radioGroup.getItem(1);
        await radio.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await radio.isChecked()).toBe(false);
    });
    it('should check the next item when press arrow down', async () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio1 = await radioGroup.getItem(1);
        const radio2 = await radioGroup.getItem(2);
        await radio1.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await radio2.isChecked()).toBe(true);
    });
});
