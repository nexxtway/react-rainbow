Here is an overview about how to use the CheckboxToggle page object:

    const PageCheckboxToggle = require('react-rainbow-components/components/CheckboxToggle/pageObject');

    const CHECKBOX_TOGGLE = '#checkbox-toggle-component-1';

    describe('CheckboxToggle page object basic usage', () => {
        it('should check the input element when click on the button', () => {
            browser.url('/url/to/testing/page');
            const checkboxToggle = new PageCheckboxToggle(CHECKBOX_TOGGLE);
            checkboxToggle.click();
            expect(checkboxToggle.isChecked()).toBe(true);
        });
    });
