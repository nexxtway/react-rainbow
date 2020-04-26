import { getLastDayOfWeek } from '..';

describe('getLastDayOfWeek', () => {
    it('should return 2020/04/11 when 2020/04/05', () => {
        const values = [
            new Date(2020, 3, 5),
            new Date('04/05/2020'),
            '04/05/2020',
            '04-05-2020',
            '2020/04/05',
        ];
        values.forEach(date => {
            const week = getLastDayOfWeek(date);
            expect(week.getUTCFullYear()).toBe(2020);
            expect(week.getMonth()).toBe(3);
            expect(week.getDate()).toBe(11);
        });
    });
});
