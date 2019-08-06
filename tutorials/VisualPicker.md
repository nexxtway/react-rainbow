Here is an overview about how to use the VisualPicker page object

    const PageVisualPicker = require('../../../src/comonents/VisualPicker/pageObject');

    const VISUAL_PICKER = '#visual-picker-component-1';

    describe('VisualPicker page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(VISUAL_PICKER);
            component.waitForExist();
        });

        it(' set the focus on the item clicked', () => {
            const visualPicker = new PageVisualPicker(VISUAL_PICKER);
            const option = visualPicker.getItem(0);
            option.click();
            expect(option.hasFocus()).toBe(true);
        });

        it('should set checked on the option when clicked', () => {
            const visualPicker = new PageVisualPicker(VISUAL_PICKER);
            const option = visualPicker.getItem(0);
            option.click();
            expect(option.isChecked()).toBe(true);
        });
    });
