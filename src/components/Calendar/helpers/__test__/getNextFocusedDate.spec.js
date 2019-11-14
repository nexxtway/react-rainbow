import getNextFocusedDate from '../getNextFocusedDate';
import getFirstDayMonth from '../getFirstDayMonth';

describe('getNextFocusedDate', () => {
    it('should return the first day of current month when dates are not set', () => {
        const result = getFirstDayMonth(new Date());
        expect(getNextFocusedDate(undefined, undefined)).toEqual(result);
        expect(getNextFocusedDate(null, null)).toEqual(result);
    });
    it('should return the first day of the second date when dates are not in the same month or year', () => {
        const date1 = new Date(2019, 10, 10);
        const date2 = new Date(2019, 11, 10);
        const date3 = new Date(2020, 10, 10);
        const results = [new Date(2019, 11, 1), new Date(2020, 10, 1)];
        expect(getNextFocusedDate(date1, date2)).toEqual(results[0]);
        expect(getNextFocusedDate(date1, date3)).toEqual(results[1]);
        expect(getNextFocusedDate(date2, date3)).toEqual(results[1]);
    });
    it('should return the first date passed when dates are in the same month and year', () => {
        const date1 = new Date(2019, 10, 10);
        const date2 = new Date(2019, 10, 20);
        expect(getNextFocusedDate(date1, date2)).toEqual(date1);
    });
});
