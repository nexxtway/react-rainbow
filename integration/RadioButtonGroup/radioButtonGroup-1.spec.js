const PageRadioButtonGroup = require('../../../src/components/RadioButtonGroup/pageObject');
const { ARROW_DOWN_KEY } = require('../../constants');

const RADIO_BUTTON_GROUP = '#radio-button-group-component-1';

describe('RadioButtonGroup base example', () => {
    beforeAll(() => {
        browser.url('/#!/RadioButtonGroup/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(RADIO_BUTTON_GROUP);
        component.waitForExist();
    });

    it('should focus the item clicked', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        expect(radio.hasFocus()).toBe(true);
    });
    it('should lose the focus when press arrow down', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio.hasFocus()).toBe(false);
    });
    it('should focus the next item when press arrow down', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio1 = radioGroup.getItem(1);
        const radio2 = radioGroup.getItem(2);
        radio1.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio2.hasFocus()).toBe(true);
    });
    it('should check the item clicked', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        expect(radio.isChecked()).toBe(true);
    });
    it('should uncheck the item when press arrow down', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio = radioGroup.getItem(1);
        radio.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio.isChecked()).toBe(false);
    });
    it('should check the next item when press arrow down', () => {
        const radioGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
        const radio1 = radioGroup.getItem(1);
        const radio2 = radioGroup.getItem(2);
        radio1.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(radio2.isChecked()).toBe(true);
    });
});
