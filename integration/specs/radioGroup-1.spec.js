const PageRadioGroup = require('./../../src/components/RadioGroup/pageObject');

const RADIO_GROUP = '#radio-group-component-1';
const ARROW_DOWN_KEY = '\uE015';

describe('RadioGroup base example', () => {
    beforeEach(() => {
        browser.url('/#!/RadioGroup/1');
        browser.refresh();
    });
    it('should focus the item clicked', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        expect(radioGroup.hasFocusItem(1)).toBe(true);
    });
    it('should lose the focus when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(radioGroup.hasFocusItem(1)).toBe(false);
    });
    it('should focus the next item press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(radioGroup.hasFocusItem(2)).toBe(true);
    });
    it('should check the item clicked', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        expect(radioGroup.isChecked(1)).toBe(true);
    });
    it('should uncheck the item when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(radioGroup.isChecked(1)).toBe(false);
    });
    it('should check the next item when press arrow down', () => {
        const radioGroup = new PageRadioGroup(RADIO_GROUP);
        radioGroup.clickItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(radioGroup.isChecked(2)).toBe(true);
    });
});
