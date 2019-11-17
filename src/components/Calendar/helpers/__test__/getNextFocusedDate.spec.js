import getNextFocusedDate from '../getNextFocusedDate';

jest.mock('../getFirstDayMonth.js', () => jest.fn(() => '2020-01-01'));

describe('getNextFocusedDate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should return the first day of current month when dates are not set', () => {
        expect(getNextFocusedDate(undefined, undefined)).toBe('2020-01-01');
        expect(getNextFocusedDate(null, null)).toBe('2020-01-01');
    });
    it('should return the first day of the second date when dates are not in the same month or year', () => {
        const date1 = new Date(2019, 10, 10);
        const date2 = new Date(2019, 11, 10);
        const date3 = new Date(2020, 10, 10);
        expect(getNextFocusedDate(date1, date2)).toBe('2020-01-01');
        expect(getNextFocusedDate(date1, date3)).toBe('2020-01-01');
        expect(getNextFocusedDate(date2, date3)).toBe('2020-01-01');
    });
    it('should return the first date passed when dates are in the same month and year', () => {
        const date1 = new Date(2019, 10, 10);
        const date2 = new Date(2019, 10, 20);
        expect(getNextFocusedDate(date1, date2)).toEqual(date1);
    });
});
