const PageCheckboxToggle = require('../../../src/components/CheckboxToggle/pageObject');

const CHECKBOX_TOGGLE = '#checkbox-toggle-component-1';

describe('CheckboxToggle base example', () => {
    it('should check the input element when click on the button', async () => {
        await browser.url('/#!/CheckboxToggle/1');
        const component = await $(CHECKBOX_TOGGLE);
        await component.waitForExist();

        const checkboxToggle = new PageCheckboxToggle(CHECKBOX_TOGGLE);
        await checkboxToggle.click();
        await expect(await checkboxToggle.isChecked()).toBe(true);
    });
});
