import { getFirstDayOfWeek } from '..';

describe('getFirstDayOfWeek', () => {
    it('should return 2020/04/05 when 2020/04/08', () => {
        const values = [
            new Date(2020, 3, 8),
            new Date('04/08/2020'),
            '04/08/2020',
            '04-08-2020',
            '2020/04/08',
        ];
        values.forEach(date => {
            const week = getFirstDayOfWeek(date);
            expect(week.getUTCFullYear()).toBe(2020);
            expect(week.getMonth()).toBe(3);
            expect(week.getDate()).toBe(5);
        });
    });
    it('should return the firs date of the current week when date passed is invalid', () => {
        const currentWeek = getFirstDayOfWeek(new Date());
        currentWeek.setHours(0, 0, 0, 0);
        expect(getFirstDayOfWeek('29-23-2033').getTime()).toBe(currentWeek.getTime());
        expect(getFirstDayOfWeek('wrong date').getTime()).toBe(currentWeek.getTime());
    });
    it('should return Infinity or -Infinity when call for that value ', () => {
        expect(getFirstDayOfWeek(Infinity)).toBe(Infinity);
        expect(getFirstDayOfWeek(-Infinity)).toBe(-Infinity);
    });
});
