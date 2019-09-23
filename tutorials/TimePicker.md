Here is an overview about how to use the TimePicker page object:

    const PageTimePicker = require('react-rainbow-components/components//TimePicker/pageObject');

    const TIME_PICKER = '#time-picker-1';

    describe('TimePicker base example', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(TIME_PICKER);
            component.waitForExist();
        });
        it('should open the time selector when click on TimePicker component', () => {
            const timePicker = new PageTimePicker(TIME_PICKER);
            timePicker.clickTimeInput();
            timePicker.waitUntilOpen();
            expect(timePicker.isOpen()).toBe(true);
        });
        it('should close the time selector when press ok button while time selector is open', () => {
            const timePicker = new PageTimePicker(TIME_PICKER);
            timePicker.clickTimeInput();
            timePicker.waitUntilOpen();
            expect(timePicker.isOpen()).toBe(true);
            timePicker.clickOkButton();
            timePicker.waitUntilClose();
            expect(timePicker.isOpen()).toBe(false);
        });
        it('should set the right time on TimePicker input when hour input and minutes input has values and press ok button', () =>  {
            const timePicker = new PageTimePicker(TIME_PICKER);
            timePicker.clickTimeInput();
            timePicker.waitUntilOpen();
            timePicker.setHourValue('13');
            timePicker.setMinutesValue('26');
            timePicker.clickOkButton();
            expect(timePicker.getTimeValue()).toBe('01:26 PM');
        });
    });
