const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-11';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/11');
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
        await browser.keys('ArrowLeft');
        await browser.keys('Enter');
        await browser.keys('PageDown');
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await calendar.isLeftMonthDaySelected(15)).toBe(true);
        await expect(await calendar.isRightMonthDaySelected(22)).toBe(true);
    });
    it('should disable all days beyond the first disabled day when selecting range', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickRightMonthDay(14);
        await expect(await calendar.isRightMonthDayEnabled(23)).toBe(false);
        await expect(await calendar.isRightMonthDayEnabled(24)).toBe(false);
    });
});
