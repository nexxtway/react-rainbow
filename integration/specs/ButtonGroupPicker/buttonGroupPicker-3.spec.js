const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-3';

describe('ButtonGroupPicker base example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonGroupPicker/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON_GROUP_PICKER);
        component.waitForExist();
    });

    it('should not check the next option when multiple is true and press arrow down key', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option2 = groupPicker.getItem(2);
        const option3 = groupPicker.getItem(3);
        option2.click();
        browser.keys('ArrowDown');
        expect(option3.isChecked()).toBe(false);
    });

    it('should uncheck the current option when multiple is true and click a checked item', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(1);
        option.click();
        expect(option.isChecked()).toBe(false);
    });

    it('should allow several options checked at the same time', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option1 = groupPicker.getItem(0);
        const option2 = groupPicker.getItem(1);
        const option3 = groupPicker.getItem(2);
        option3.click();
        expect(option1.isChecked()).toBe(true);
        expect(option2.isChecked()).toBe(true);
        expect(option3.isChecked()).toBe(true);
    });
});
