const PageCheckboxToggle = require('../../../src/components/CheckboxToggle/pageObject');

const CHECKBOX_TOGGLE = '#checkbox-toggle-component-1';

describe('CheckboxToggle base example', () => {
    it('should check the input element when click on the button', () => {
        browser.url('/#!/CheckboxToggle/1');
        const checkboxToggle = new PageCheckboxToggle(CHECKBOX_TOGGLE);
        checkboxToggle.click();
        expect(checkboxToggle.isChecked()).toBe(true);
    });
});
