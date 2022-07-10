const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-7';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/7');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should set range initial date and end date button elements as selected', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(2);
        await calendar.clickDay(16);
        await expect(await calendar.isDaySelected(2)).toBe(true);
        await expect(await calendar.isDaySelected(16)).toBe(true);
    });
    it('should set range initial and end dates when using keyboard navigation', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickSelectYear();
        await browser.keys('Escape');
        await browser.keys('Tab');
        await browser.keys('ArrowLeft');
        await browser.keys('Enter');
        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await expect(await calendar.isDaySelected(2)).toBe(true);
        await expect(await calendar.isDaySelected(16)).toBe(true);
    });
});
