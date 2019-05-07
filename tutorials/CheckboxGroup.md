Here is an overview about how to use the CheckboxGroup page object:

    const PageCheckboxGroup = require('react-rainbow-components/components/CheckboxGroup/pageObject');

    const CHECKBOX_GROUP = '#checkbox-group-1';
    const TAB_KEY = '\uE004';
    const SPACE_KEY = '\uE00D';

    describe('CheckboxGroup page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(CHECKBOX_GROUP);
            component.waitForExist();
        });

        it('should set the focus on the checkbox clicked', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            const checkbox = checkboxGroup.getItem(0);
            checkbox.click();
            expect(checkbox.hasFocus()).toBe(true);
        });
        it('should lost the focus if another checkbox is clicked', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            const checkbox1 = checkboxGroup.getItem(0);
            const checkbox2 = checkboxGroup.getItem(1);
            checkbox1.click();
            checkbox2.click();
            expect(checkbox1.hasFocus()).toBe(false);
        });
        it('should lost the focus when the checkbox is selected and press the key TAB', () => {
            const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
            const checkbox = checkboxGroup.getItem(0);
            checkbox.click();
            browser.keys(TAB_KEY);
            expect(checkbox.hasFocus()).toBe(false);
        });
    });
