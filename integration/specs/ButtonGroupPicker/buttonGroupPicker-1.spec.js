const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-1';

describe('ButtonGroupPicker base example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonGroupPicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON_GROUP_PICKER);
        component.waitForExist();
    });

    it('should focus the option clicked', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(1);
        option.click();
        expect(option.hasFocus()).toBe(true);
    });

    it('should check the option clicked', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(1);
        option.click();
        expect(option.isChecked()).toBe(true);
    });

    it('should focus the next option when press arrow down key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = groupPicker.getItem(1);
        const option2 = groupPicker.getItem(2);
        option1.click();
        browser.keys('ArrowDown');
        expect(option2.hasFocus()).toBe(true);
    });

    it('should check the next option when press arrow down key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = groupPicker.getItem(1);
        const option2 = groupPicker.getItem(2);
        option1.click();
        browser.keys('ArrowDown');
        expect(option2.isChecked()).toBe(true);
    });

    it('should uncheck the current option when press arrow down key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(1);
        option.click();
        browser.keys('ArrowDown');
        expect(option.isChecked()).toBe(false);
    });

    it('should check the previous option when press arrow left key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = groupPicker.getItem(1);
        const option2 = groupPicker.getItem(2);
        option2.click();
        browser.keys('ArrowLeft');
        expect(option1.isChecked()).toBe(true);
    });

    it('should check the next option when press arrow right key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = groupPicker.getItem(1);
        const option2 = groupPicker.getItem(2);
        option1.click();
        browser.keys('ArrowRight');
        expect(option2.isChecked()).toBe(true);
    });

    it('should uncheck the current option when press arrow left key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(1);
        option.click();
        browser.keys('ArrowLeft');
        expect(option.isChecked()).toBe(false);
    });

    it('should check the first option when last option is checked and press arrow right key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option0 = groupPicker.getItem(0);
        const option2 = groupPicker.getItem(2);
        option2.click();
        browser.keys('ArrowRight');
        expect(option0.isChecked()).toBe(true);
    });
});
