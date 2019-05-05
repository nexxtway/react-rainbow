Here is an overview about how to use the RadioGroup page object:

    const PageRadioGroup = require('react-rainbow-components/components/RadioGroup/pageObject');

    const RADIO_GROUP = '#radio-group-component-1';
    const ARROW_DOWN_KEY = '\uE015';

    describe('RadioGroup page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(RADIO_GROUP);
            component.waitForExist();
        });

        it('should focus the item clicked', () => {
            const radioGroup = new PageRadioGroup(RADIO_GROUP);
            const radio = radioGroup.getItem(1);
            radio.click();
            expect(radio.hasFocus()).toBe(true);
        });
        it('should lost the focus when press arrow down', () => {
            const radioGroup = new PageRadioGroup(RADIO_GROUP);
            const radio = radioGroup.getItem(1);
            radio.click();
            browser.keys(ARROW_DOWN_KEY);
            expect(radio.hasFocus()).toBe(false);
        });
        it('should focus the next item when press arrow down', () => {
            const radioGroup = new PageRadioGroup(RADIO_GROUP);
            const radio1 = radioGroup.getItem(1);
            const radio2 = radioGroup.getItem(2);
            radio1.click();
            browser.keys(ARROW_DOWN_KEY);
            expect(radio2.hasFocus()).toBe(true);
        });
    });
