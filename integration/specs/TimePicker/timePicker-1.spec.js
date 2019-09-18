const PageTimePicker = require('../../../src/components/TimePicker/pageObject');
const {
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
    ARROW_UP_KEY,
    ARROW_DOWN_KEY,
    SPACE_KEY,
    ENTER_KEY,
    ESCAPE_KEY,
    DELETE_KEY,
} = require('../../constants');

const TIME_PICKER = '#time-picker-1';

describe('TimePicker base example', () => {
    beforeAll(() => {
        browser.url('/#!/TimePicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TIME_PICKER);
        component.waitForExist();
    });
    it('should open the time selector when click on TimePicker component', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        expect(picklist.isTimePickerOpen()).toBe(true);
    });
    it('should open the time selector when click on the label of the TimePicker component', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.clickLabel();
        picklist.waitUntilOpen();
        expect(picklist.isTimePickerOpen()).toBe(true);
    });
    it('should close the time selector when press escape key while time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        expect(picklist.isTimePickerOpen()).toBe(true);
        browser.keys(ESCAPE_KEY);
        picklist.waitUntilClose();
        expect(picklist.isTimePickerOpen()).toBe(false);
    });
    it('should close the time selector when press ok button while time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        expect(picklist.isTimePickerOpen()).toBe(true);
        picklist.clickOkButton();
        picklist.waitUntilClose();
        expect(picklist.isTimePickerOpen()).toBe(false);
    });
    it('should close the time selector when press cancel button while time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        expect(picklist.isTimePickerOpen()).toBe(true);
        picklist.clickCancelButton();
        picklist.waitUntilClose();
        expect(picklist.isTimePickerOpen()).toBe(false);
    });
    it('should keep focus the TimePicker component when time selector is closed', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(picklist.hasFocusTimePicker()).toBe(true);
    });
    it('should open the time selector when space key is pressed while TimePicker is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.keys(SPACE_KEY);
        expect(picklist.isTimePickerOpen()).toBe(true);
    });
    it('should open the time selector when enter key is pressed while TimePicker is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.keys(ENTER_KEY);
        expect(picklist.isTimePickerOpen()).toBe(true);
    });
    it('should focus the hour input by default when the time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        expect(picklist.hasFocusHourInput()).toBe(true);
    });
    it('should focus the minutes input when the right key is pressed while hour input is focused and the time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.hasFocusMinutesInput()).toBe(true);
    });
    it('should focus am-pm selector when the right key is pressed while minutes input is focused and the time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.hasFocusAmPmSelect()).toBe(true);
    });
    it('should focus the minutes input when the left key is pressed while am-pm selector is focused and the time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_LEFT_KEY);
        expect(picklist.hasFocusMinutesInput()).toBe(true);
    });
    it('should keep the focus on am-pm selector when right key is pressed while am-pm selector is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.hasFocusAmPmSelect()).toBe(true);
    });
    it('should keep the focus hour input when left key is pressed while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_LEFT_KEY);
        expect(picklist.hasFocusHourInput()).toBe(true);
    });
    it('should select am input by default when any time is set yet and the time selector is open', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.isAmInputSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and down key is pressed', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.isPmInputSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and up key is pressed', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(picklist.isPmInputSelected()).toBe(true);
    });
    it('should not set any time on TimePicker input when hour input and minutes input has values and press cancel button', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('02');
        picklist.setMinutesValue('02');
        picklist.clickCancelButton();
        expect(picklist.getTimePickerValue()).toBe('--:-- --');
    });
    it('should not set any time on TimePicker when hour input and minutes input has values and press escape key', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('02');
        picklist.setMinutesValue('02');
        browser.keys(ESCAPE_KEY);
        expect(picklist.getTimePickerValue()).toBe('--:-- --');
    });
    it('should select am input by default when the hour input has a value less than 12 while am-pm selector is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('11');
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.isAmInputSelected()).toBe(true);
    });
    it('should select pm input by default when the hour input has a value greater than 11 while am-pm selector is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('14');
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.isPmInputSelected()).toBe(true);
    });
    it('should set hour input value to "02" when click twice on up button while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.clickUpButton();
        picklist.clickUpButton();
        expect(picklist.getHourValue()).toBe('02');
    });
    it('should set hour input value to "02" when press twice on up key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getHourValue()).toBe('02');
    });
    it('should set hour input value to "12" when press down key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.clickDownButton();
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "01" when hour input has "0" as value and press up button while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('0');
        picklist.clickUpButton();
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set hour input value to "01" when press up key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set hour input value to "01" when hour input has "0" as value and press up key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('0');
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set the right hour input value and focus minutes input when type "2" and hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('2');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "02" and hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('0');
        browser.keys('2');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "15" and hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('1');
        browser.keys('5');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('03');
    });
    it('should set the right hour input value and keep the focus on hour input when type "0" and hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('0');
        expect(picklist.hasFocusHourInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('00');
    });
    it('should set the right hour input value and keep the focus on hour input when type "1" and hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('1');
        expect(picklist.hasFocusHourInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set hour input value to "02" when click down button and then type "2" while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.clickDownButton();
        browser.keys('2');
        expect(picklist.getHourValue()).toBe('02');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys('0');
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "00" while hour input is focused and it has already a value set', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        picklist.clickUpButton();
        browser.keys(ARROW_UP_KEY);
        browser.keys('0');
        browser.keys('0');
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused and it has already a value set', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        picklist.clickDownButton();
        browser.keys(ARROW_UP_KEY);
        browser.keys('0');
        browser.keys(ARROW_RIGHT_KEY);
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "03" and focus the minutes iput when type "03" after press up button while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.clickUpButton();
        browser.keys('0');
        browser.keys('3');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getHourValue()).toBe('03');
    });
    it('should set minutes input value to "59" when press down key while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down key while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        picklist.clickDownButton();
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down button while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        picklist.clickDownButton();
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "02" when click the up button for 3 times while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        picklist.clickUpButton();
        picklist.clickUpButton();
        picklist.clickUpButton();
        expect(picklist.getMinutesValue()).toBe('02');
    });
    it('should set the right minutes input value and focus am-pm selector when type "6" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('6');
        expect(picklist.hasFocusAmPmSelect()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('06');
    });
    it('should set the right minutes input value and focus am-pm selector when type "09" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        browser.keys('9');
        expect(picklist.hasFocusAmPmSelect()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('09');
    });
    it('should set the right minutes input value and focus am-pm selector when type "56" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('5');
        browser.keys('6');
        expect(picklist.hasFocusAmPmSelect()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('56');
    });
    it('should set the right minutes input value and keep the focus on minutes input when type "5" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('5');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('05');
    });
    it('should set the right minutes input value and keep the focus on minutes input when type "3" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('3');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('03');
    });
    it('should set the right minutes input value and keep the focus on minutes input when type "0" and minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        expect(picklist.hasFocusMinutesInput()).toBe(true);
        expect(picklist.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up key while minutes input value is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button while minutes input value is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        picklist.clickUpButton();
        expect(picklist.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "02" when click up button and then type "2" while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        picklist.clickUpButton();
        browser.keys('2');
        expect(picklist.getMinutesValue()).toBe('02');
    });
    it('should reset hour input when has a value and press delete key while hour input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('02');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        expect(picklist.getHourValue()).toBe('');
    });
    it('should reset minutes input when has a value and press delete key while minutes input is focused', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setMinutesValue('56');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        expect(picklist.getMinutesValue()).toBe('');
    });
    it('should set hour input value to "01" when press up key after reset hour input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set hour input value to "01" when press up button after reset hour input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        picklist.clickUpButton();
        expect(picklist.getHourValue()).toBe('01');
    });
    it('should set hour input value to "12" when press down key after reset hour input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button after reset hour input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        picklist.clickDownButton();
        expect(picklist.getHourValue()).toBe('12');
    });
    it('should set minutes input value to "59" when press down key after reset minutes input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setMinutesValue('34');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button after reset minutes input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setMinutesValue('34');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        picklist.clickDownButton();
        expect(picklist.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "00" when press up key after reset minutes input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setMinutesValue('03');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(picklist.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button after reset minutes input', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setMinutesValue('03');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        picklist.clickUpButton();
        expect(picklist.getMinutesValue()).toBe('00');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press ok button', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('13');
        picklist.setMinutesValue('61');
        picklist.clickOkButton();
        expect(picklist.getTimePickerValue()).toBe('01:06 PM');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press enter key', () => {
        const picklist = new PageTimePicker(TIME_PICKER);
        picklist.click();
        picklist.waitUntilOpen();
        picklist.setHourValue('02');
        picklist.setMinutesValue('02');
        browser.keys(ENTER_KEY);
        expect(picklist.getTimePickerValue()).toBe('02:02 AM');
    });
});
