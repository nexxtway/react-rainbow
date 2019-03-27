import getLastDayMonth from './../get-last-day-month';

describe('get-last-day-month', () => {
    it('should return a Date of 2019/03/31 when 2019/03/01', () => {
        const date = new Date(2019, 2, 1);
        expect(getLastDayMonth(date).getDate()).toBe(31);
        expect(getLastDayMonth(date).getMonth()).toBe(2);
        expect(getLastDayMonth(date).getUTCFullYear()).toBe(2019);
    });
});
