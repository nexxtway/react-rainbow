import getFormattedMonth from './../getFormattedMonth';

describe('getFormattedMonth', () => {
    it('should return the right month', () => {
        const date = new Date(2019, 2, 21);
        expect(getFormattedMonth(date)).toBe('March');
    });
    it('should return an empty string when pass an invalid date', () => {
        expect(getFormattedMonth('29-08-2003')).toBe('');
        expect(getFormattedMonth('wrong date')).toBe('');
    });
});
