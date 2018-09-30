Here is an overview about how to use the RadioGroup page object:

    const PageRadioGroup = require('react-rainbow-components/components/RadioGroup/pageObject');

    const RADIO_GROUP = '#radio-group-component-1';
    const ARROW_DOWN_KEY = '\uE015';

    describe('RadioGroup page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
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
        it('should focus the next item when press arrow down', () => {
            const radioGroup = new PageRadioGroup(RADIO_GROUP);
            radioGroup.clickItem(1);
            browser.keys(ARROW_DOWN_KEY);
            expect(radioGroup.hasFocusItem(2)).toBe(true);
        });
    });
