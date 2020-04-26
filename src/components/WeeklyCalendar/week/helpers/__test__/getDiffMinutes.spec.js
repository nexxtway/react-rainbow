import { getDiffMinutes } from '..';

describe('getDiffMinutes', () => {
    it('should return 0 when is the same time', () => {
        const date = new Date();
        expect(getDiffMinutes(date, date)).toBe(0);
    });
    it('should return 60 when the diff is of a hour', () => {
        const date1 = new Date();
        date1.setHours(0, 0, 0, 0);
        const date2 = new Date();
        date2.setHours(1, 0, 0, 0);
        expect(getDiffMinutes(date1, date2)).toBe(60);
    });
    it('should return 1440 when the diff is of a day', () => {
        const date1 = new Date('2020/01/01');
        const date2 = new Date('2020/01/02');
        expect(getDiffMinutes(date1, date2)).toBe(1440);
    });
});
