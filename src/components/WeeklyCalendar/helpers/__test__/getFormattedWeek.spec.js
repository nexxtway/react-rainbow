import { getFormattedWeek } from '..';

describe('getFormattedWeek', () => {
    it('should return Apr 5 - 11, 2020 when date is 2020/04/05', () => {
        const date = new Date(2020, 3, 5);
        expect(getFormattedWeek(date)).toBe('Apr 5 - 11, 2020');
    });
    it('should return Mar 29 - Apr 4, 2020 when date is 2020/03/29', () => {
        const date = new Date(2020, 2, 29);
        expect(getFormattedWeek(date)).toBe('Mar 29 - Apr 4, 2020');
    });
    it('should return Dec 29, 2019 - Jan 4, 2020 when date is 2019/11/29', () => {
        const date = new Date(2019, 11, 29);
        expect(getFormattedWeek(date)).toBe('Dec 29, 2019 - Jan 4, 2020');
    });
});
