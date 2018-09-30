Here is an overview about how to use the CheckboxGroup page object:

    const PageCheckboxGroup = require('react-rainbow-components/components/CheckboxGroup/pageObject');

    const CHECKBOX_GROUP = '#checkbox-group-1';
    const TAB_KEY = '\uE004';
    const SPACE_KEY = '\uE00D';

    describe('CheckboxGroup page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });
        it('should set the focus on the checkbox clicked', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            checkboxGroup.clickItem(0);
            expect(checkboxGroup.hasFocusItem(0)).toBe(true);
        });
        it('should lost the focus if another checkbox is clicked', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            checkboxGroup.clickItem(0);
            checkboxGroup.clickItem(1);
            expect(checkboxGroup.hasFocusItem(0)).toBe(false);
        });
        it('should lost the focus when the checkbox is selected and press the key TAB', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            checkboxGroup.clickItem(0);
            browser.keys(TAB_KEY);
            expect(checkboxGroup.hasFocusItem(0)).toBe(false);
        });
    });
