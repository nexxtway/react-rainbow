Here is an overview about how to use the RadioButtonGroup page object:

    const PageRadioButtonGroup = require('react-rainbow-components/components/RadioButtonGroup/pageObject');

    const RADIO_BUTTON_GROUP = '#radio-button-group-component-1';
    const ARROW_DOWN_KEY = '\uE015';

    describe('RadioButtonGroup page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(RADIO_BUTTON_GROUP);
            component.waitForExist();
        });

        it('should focus the item clicked', () => {
            const RadioButtonGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
            const radio = RadioButtonGroup.getItem(1);
            radio.click();
            expect(radio.hasFocus()).toBe(true);
        });
        it('should lost the focus when press arrow down', () => {
            const RadioButtonGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
            const radio = RadioButtonGroup.getItem(1);
            radio.click();
            browser.keys(ARROW_DOWN_KEY);
            expect(radio.hasFocus()).toBe(false);
        });
        it('should focus the next item when press arrow down', () => {
            const RadioButtonGroup = new PageRadioButtonGroup(RADIO_BUTTON_GROUP);
            const radio1 = RadioButtonGroup.getItem(1);
            const radio2 = RadioButtonGroup.getItem(2);
            radio1.click();
            browser.keys(ARROW_DOWN_KEY);
            expect(radio2.hasFocus()).toBe(true);
        });
    });
