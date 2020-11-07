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
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        expect(timePicker.isOpen()).toBe(true);
    });
    it('should open the time selector when click on the label of the TimePicker component', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickLabel();
        timePicker.waitUntilOpen();
        expect(timePicker.isOpen()).toBe(true);
    });
    it('should close the time selector when press escape key while time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        expect(timePicker.isOpen()).toBe(true);
        browser.keys(ESCAPE_KEY);
        timePicker.waitUntilClose();
        expect(timePicker.isOpen()).toBe(false);
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
    it('should close the time selector when press cancel button while time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        expect(timePicker.isOpen()).toBe(true);
        timePicker.clickCancelButton();
        timePicker.waitUntilClose();
        expect(timePicker.isOpen()).toBe(false);
    });
    it('should keep focus the TimePicker component when time selector is closed', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(timePicker.hasFocusTimeInput()).toBe(true);
    });
    it('should open the time selector when space key is pressed while TimePicker is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        timePicker.waitUntilClose();
        browser.keys(SPACE_KEY);
        timePicker.waitUntilOpen();
        expect(timePicker.isOpen()).toBe(true);
    });
    it('should open the time selector when enter key is pressed while TimePicker is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.keys(ENTER_KEY);
        expect(timePicker.isOpen()).toBe(true);
    });
    it('should focus the hour input by default when the time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        expect(timePicker.hasFocusHourInput()).toBe(true);
    });
    it('should focus the minutes input when the right key is pressed while hour input is focused and the time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
    });
    it('should focus am-pm selector when the right key is pressed while minutes input is focused and the time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.hasFocusAmPmSelect()).toBe(true);
    });
    it('should focus the minutes input when the left key is pressed while am-pm selector is focused and the time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_LEFT_KEY);
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
    });
    it('should keep the focus on am-pm selector when right key is pressed while am-pm selector is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.hasFocusAmPmSelect()).toBe(true);
    });
    it('should keep the focus hour input when left key is pressed while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_LEFT_KEY);
        expect(timePicker.hasFocusHourInput()).toBe(true);
    });
    it('should select am input by default when any time is set yet and the time selector is open', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.isAmSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and down key is pressed', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.isPmSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and up key is pressed', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.isPmSelected()).toBe(true);
    });
    it('should not set any time on TimePicker input when hour input and minutes input has values and press cancel button', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('02');
        timePicker.setMinutesValue('02');
        timePicker.clickCancelButton();
        expect(timePicker.getTimeValue()).toBe('--:-- --');
    });
    it('should not set any time on TimePicker when hour input and minutes input has values and press escape key', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('02');
        timePicker.setMinutesValue('02');
        browser.keys(ESCAPE_KEY);
        expect(timePicker.getTimeValue()).toBe('--:-- --');
    });
    it('should select am input by default when the hour input has a value less than 12 while am-pm selector is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('11');
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.isAmSelected()).toBe(true);
    });
    it('should select pm input by default when the hour input has a value greater than 11 while am-pm selector is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('14');
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.isPmSelected()).toBe(true);
    });
    it('should set hour input value to "02" when click twice on up button while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.clickUpButton();
        timePicker.clickUpButton();
        expect(timePicker.getHourValue()).toBe('02');
    });
    it('should set hour input value to "02" when press twice on up key while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.getHourValue()).toBe('02');
    });
    it('should set hour input value to "12" when press down key while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.clickDownButton();
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "01" when hour input has "0" as value and press up button while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('0');
        timePicker.clickUpButton();
        expect(timePicker.getHourValue()).toBe('01');
    });
    it('should set the right hour input value and focus minutes input when type "2" and hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('2');
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
        expect(timePicker.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "02" and hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('0');
        browser.keys('2');
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
        expect(timePicker.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "15" and hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('1');
        browser.keys('5');
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
        expect(timePicker.getHourValue()).toBe('03');
    });
    it('should set the right hour input value and keep the focus on hour input when type "0"', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('0');
        expect(timePicker.hasFocusHourInput()).toBe(true);
        expect(timePicker.getHourValue()).toBe('00');
    });
    it('should set the right hour input value and keep the focus on hour input when type "1"', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('1');
        expect(timePicker.hasFocusHourInput()).toBe(true);
        expect(timePicker.getHourValue()).toBe('01');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('0');
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "00" while hour input is focused and it has already a value set', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        timePicker.clickUpButton();
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.getHourValue()).toBe('03');
        browser.keys('0');
        browser.keys('0');
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused and it has already a value set', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_UP_KEY);
        timePicker.clickDownButton();
        browser.keys(ARROW_UP_KEY);
        browser.keys('0');
        browser.keys(ARROW_RIGHT_KEY);
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set minutes input value to "59" when press down key while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down key while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down button while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
        expect(timePicker.getMinutesValue()).toBe('00');
        timePicker.clickDownButton();
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        timePicker.clickDownButton();
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "02" when click the up button for 3 times while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        timePicker.clickUpButton();
        timePicker.clickUpButton();
        timePicker.clickUpButton();
        expect(timePicker.getMinutesValue()).toBe('02');
    });
    it('should set the right minutes input value and focus am-pm selector when type "6" and minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('6');
        expect(timePicker.hasFocusAmPmSelect()).toBe(true);
        expect(timePicker.getMinutesValue()).toBe('06');
    });
    it('should set the right minutes input value and focus am-pm selector when type "09" and minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('0');
        browser.keys('9');
        expect(timePicker.hasFocusAmPmSelect()).toBe(true);
        expect(timePicker.getMinutesValue()).toBe('09');
    });
    it('should set the right minutes input value and focus am-pm selector when type "56" and minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('5');
        browser.keys('6');
        expect(timePicker.hasFocusAmPmSelect()).toBe(true);
        expect(timePicker.getMinutesValue()).toBe('56');
    });
    it('should set the right minutes input value and keep the focus on minutes input when type "5" and minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('5');
        expect(timePicker.hasFocusMinutesInput()).toBe(true);
        expect(timePicker.getMinutesValue()).toBe('05');
    });
    it('should set minutes input value to "00" when press up key while minutes input value is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button while minutes input value is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        timePicker.clickUpButton();
        expect(timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "02" when click up button and then type "2" while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys(ARROW_RIGHT_KEY);
        timePicker.clickUpButton();
        browser.keys('2');
        expect(timePicker.getMinutesValue()).toBe('02');
    });
    it('should reset hour input when has a value and press delete key while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('02');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        expect(timePicker.getHourValue()).toBe('');
    });
    it('should reset minutes input when has a value and press delete key while minutes input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setMinutesValue('56');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        expect(timePicker.getMinutesValue()).toBe('');
    });
    it('should set hour input value to "01" when press up key after reset hour input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.getHourValue()).toBe('01');
    });
    it('should set hour input value to "12" when press down key after reset hour input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button after reset hour input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('05');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        timePicker.clickDownButton();
        expect(timePicker.getHourValue()).toBe('12');
    });
    it('should set minutes input value to "59" when press down key after reset minutes input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setMinutesValue('34');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button after reset minutes input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setMinutesValue('34');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        timePicker.clickDownButton();
        expect(timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "00" when press up key after reset minutes input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setMinutesValue('03');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button after reset minutes input', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setMinutesValue('03');
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(DELETE_KEY);
        timePicker.clickUpButton();
        expect(timePicker.getMinutesValue()).toBe('00');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press ok button', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('13');
        timePicker.setMinutesValue('26');
        timePicker.clickOkButton();
        expect(timePicker.getTimeValue()).toBe('01:26 PM');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press enter key', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('02');
        timePicker.setMinutesValue('02');
        browser.keys(ENTER_KEY);
        expect(timePicker.getTimeValue()).toBe('02:02 AM');
    });
    it('should set hour input value to "12" when hour input has "0" as value and press down button while hour input is focused', () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        timePicker.setHourValue('0');
        timePicker.clickDownButton();
        expect(timePicker.getHourValue()).toBe('12');
    });
});
