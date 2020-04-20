const PageButtonGroupPicker = require('../../../src/components/ButtonGroupPicker/pageObject');

const BUTTON_GROUP_PICKER = '#button-group-picker-component-5';

describe('ButtonGroupPicker base example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonGroupPicker/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON_GROUP_PICKER);
        component.waitForExist();
    });

    it('should not check the disabled option when clicked', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(0);
        option.click();
        expect(option.isChecked()).toBe(false);
    });

    it('should not focus the disabled option when clicked', () => {
        const groupPicker = new PageButtonGroupPicker(BUTTON_GROUP_PICKER);
        const option = groupPicker.getItem(0);
        option.click();
        expect(option.hasFocus()).toBe(false);
    });
});
