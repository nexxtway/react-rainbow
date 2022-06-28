const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-9';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/9');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should set range initial date and end date button elements as selected', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(2);
        await calendar.clickRightMonthDay(16);
        await expect(await calendar.isLeftMonthDaySelected(2)).toBe(true);
        await expect(await calendar.isRightMonthDaySelected(16)).toBe(true);
    });
    it('should set range initial and end dates when using keyboard navigation', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthSelectYear();
        await browser.keys('Escape');
        await browser.keys('Tab');
        await browser.keys('ArrowUp');
        await browser.keys('Enter');
        await browser.keys('PageDown');
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await calendar.isLeftMonthDaySelected(16)).toBe(true);
        await expect(await calendar.isRightMonthDaySelected(23)).toBe(true);
    });
});
