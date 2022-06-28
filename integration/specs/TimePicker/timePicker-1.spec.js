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
    BACKSPACE_KEY,
} = require('../../constants');

const TIME_PICKER = '#time-picker-1';

describe('TimePicker base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/TimePicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TIME_PICKER);
        await component.waitForExist();
    });
    it('should open the time selector when click on TimePicker component', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
    });
    it('should open the time selector when click on the label of the TimePicker component', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickLabel();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
    });
    it('should close the time selector when press escape key while time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
        await browser.keys(ESCAPE_KEY);
        await timePicker.waitUntilClose();
        await expect(await timePicker.isOpen()).toBe(false);
    });
    it('should close the time selector when press ok button while time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
        await timePicker.clickOkButton();
        await timePicker.waitUntilClose();
        await expect(await timePicker.isOpen()).toBe(false);
    });
    it('should close the time selector when press cancel button while time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
        await timePicker.clickCancelButton();
        await timePicker.waitUntilClose();
        await expect(await timePicker.isOpen()).toBe(false);
    });
    it('should keep focus the TimePicker component when time selector is closed', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await timePicker.hasFocusTimeInput()).toBe(true);
    });
    it('should open the time selector when space key is pressed while TimePicker is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await timePicker.waitUntilClose();
        await browser.keys(SPACE_KEY);
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
    });
    it('should open the time selector when enter key is pressed while TimePicker is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await timePicker.waitUntilClose();
        await browser.keys(ENTER_KEY);
        await timePicker.waitUntilOpen();
        await expect(await timePicker.isOpen()).toBe(true);
    });
    it('should focus the hour input by default when the time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await expect(await timePicker.hasFocusHourInput()).toBe(true);
    });
    it('should focus the minutes input when the right key is pressed while hour input is focused and the time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
    });
    it('should focus am-pm selector when the right key is pressed while minutes input is focused and the time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.hasFocusAmPmSelect()).toBe(true);
    });
    it('should focus the minutes input when the left key is pressed while am-pm selector is focused and the time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
    });
    it('should keep the focus on am-pm selector when right key is pressed while am-pm selector is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.hasFocusAmPmSelect()).toBe(true);
    });
    it('should keep the focus hour input when left key is pressed while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await timePicker.hasFocusHourInput()).toBe(true);
    });
    it('should select am input by default when any time is set yet and the time selector is open', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.isAmSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and down key is pressed', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.isPmSelected()).toBe(true);
    });
    it('should select pm input when am input is selected and up key is pressed', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.isPmSelected()).toBe(true);
    });
    it('should not set any time on TimePicker input when hour input and minutes input has values and press cancel button', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('02');
        await timePicker.setMinutesValue('02');
        await timePicker.clickCancelButton();
        await expect(await timePicker.getTimeValue()).toBe('--:-- --');
    });
    it('should not set any time on TimePicker when hour input and minutes input has values and press escape key', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('02');
        await timePicker.setMinutesValue('02');
        await browser.keys(ESCAPE_KEY);
        await expect(await timePicker.getTimeValue()).toBe('--:-- --');
    });
    it('should select am input by default when the hour input has a value less than 12 while am-pm selector is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('11');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.isAmSelected()).toBe(true);
    });
    it('should select pm input by default when the hour input has a value greater than 11 while am-pm selector is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('14');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.isPmSelected()).toBe(true);
    });
    it('should set hour input value to "02" when click twice on up button while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.clickUpButton();
        await timePicker.clickUpButton();
        await expect(await timePicker.getHourValue()).toBe('02');
    });
    it('should set hour input value to "02" when press twice on up key while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_UP_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.getHourValue()).toBe('02');
    });
    it('should set hour input value to "12" when press down key while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.clickDownButton();
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "01" when hour input has "0" as value and press up button while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('0');
        await timePicker.clickUpButton();
        await expect(await timePicker.getHourValue()).toBe('01');
    });
    it('should set the right hour input value and focus minutes input when type "2" and hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('2');
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
        await expect(await timePicker.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "02" and hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('0');
        await browser.keys('2');
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
        await expect(await timePicker.getHourValue()).toBe('02');
    });
    it('should set the right hour input value and focus minutes input when type "15" and hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('1');
        await browser.keys('5');
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
        await expect(await timePicker.getHourValue()).toBe('03');
    });
    it('should set the right hour input value and keep the focus on hour input when type "0"', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('0');
        await expect(await timePicker.hasFocusHourInput()).toBe(true);
        await expect(await timePicker.getHourValue()).toBe('00');
    });
    it('should set the right hour input value and keep the focus on hour input when type "1"', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('1');
        await expect(await timePicker.hasFocusHourInput()).toBe(true);
        await expect(await timePicker.getHourValue()).toBe('01');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('0');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "00" while hour input is focused and it has already a value set', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_UP_KEY);
        await timePicker.clickUpButton();
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.getHourValue()).toBe('03');
        await browser.keys('0');
        await browser.keys('0');
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when type "0" and press right key while hour input is focused and it has already a value set', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_UP_KEY);
        await timePicker.clickDownButton();
        await browser.keys(ARROW_UP_KEY);
        await browser.keys('0');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set minutes input value to "59" when press down key while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down key while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('0');
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when type "0" and press down button while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('0');
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
        await expect(await timePicker.getMinutesValue()).toBe('00');
        await timePicker.clickDownButton();
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await timePicker.clickDownButton();
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "02" when click the up button for 3 times while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await timePicker.clickUpButton();
        await timePicker.clickUpButton();
        await timePicker.clickUpButton();
        await expect(await timePicker.getMinutesValue()).toBe('02');
    });
    it('should set the right minutes input value and focus am-pm selector when type "6" and minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('6');
        await expect(await timePicker.hasFocusAmPmSelect()).toBe(true);
        await expect(await timePicker.getMinutesValue()).toBe('06');
    });
    it('should set the right minutes input value and focus am-pm selector when type "09" and minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('0');
        await browser.keys('9');
        await expect(await timePicker.hasFocusAmPmSelect()).toBe(true);
        await expect(await timePicker.getMinutesValue()).toBe('09');
    });
    it('should set the right minutes input value and focus am-pm selector when type "56" and minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('5');
        await browser.keys('6');
        await expect(await timePicker.hasFocusAmPmSelect()).toBe(true);
        await expect(await timePicker.getMinutesValue()).toBe('56');
    });
    it('should set the right minutes input value and keep the focus on minutes input when type "5" and minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('5');
        await expect(await timePicker.hasFocusMinutesInput()).toBe(true);
        await expect(await timePicker.getMinutesValue()).toBe('05');
    });
    it('should set minutes input value to "00" when press up key while minutes input value is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button while minutes input value is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await timePicker.clickUpButton();
        await expect(await timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "02" when click up button and then type "2" while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys(ARROW_RIGHT_KEY);
        await timePicker.clickUpButton();
        await browser.keys('2');
        await expect(await timePicker.getMinutesValue()).toBe('02');
    });
    it('should reset hour input when has a value and press delete key while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('02');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(DELETE_KEY);
        await expect(await timePicker.getHourValue()).toBe('');
    });
    it('should reset minutes input when has a value and press delete key while minutes input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setMinutesValue('56');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(DELETE_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('');
    });
    it('should set hour input value to "01" when press up key after reset hour input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('05');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.getHourValue()).toBe('01');
    });
    it('should set hour input value to "12" when press down key after reset hour input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('05');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set hour input value to "12" when press down button after reset hour input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('05');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await timePicker.clickDownButton();
        await expect(await timePicker.getHourValue()).toBe('12');
    });
    it('should set minutes input value to "59" when press down key after reset minutes input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setMinutesValue('34');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "59" when press down button after reset minutes input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setMinutesValue('34');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await timePicker.clickDownButton();
        await expect(await timePicker.getMinutesValue()).toBe('59');
    });
    it('should set minutes input value to "00" when press up key after reset minutes input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setMinutesValue('03');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await timePicker.getMinutesValue()).toBe('00');
    });
    it('should set minutes input value to "00" when press up button after reset minutes input', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setMinutesValue('03');
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(BACKSPACE_KEY);
        await timePicker.clickUpButton();
        await expect(await timePicker.getMinutesValue()).toBe('00');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press ok button', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('13');
        await timePicker.setMinutesValue('26');
        await timePicker.clickOkButton();
        await expect(await timePicker.getTimeValue()).toBe('01:26 PM');
    });
    it('should set the right time on TimePicker input when hour input and minutes input has values and press enter key', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('02');
        await timePicker.setMinutesValue('02');
        await browser.keys(ENTER_KEY);
        await expect(await timePicker.getTimeValue()).toBe('02:02 AM');
    });
    it('should set hour input value to "12" when hour input has "0" as value and press down button while hour input is focused', async () => {
        const timePicker = new PageTimePicker(TIME_PICKER);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await timePicker.setHourValue('0');
        await timePicker.clickDownButton();
        await expect(await timePicker.getHourValue()).toBe('12');
    });
});
