import { getCurrentWeek } from '..';

describe('getCurrentWeek', () => {
    it('should return 2020/04/05 when 2020/04/08', () => {
        const values = [
            new Date(2020, 3, 8),
            new Date('04/08/2020'),
            '04/08/2020',
            '04-08-2020',
            '2020/04/08',
        ];
        values.forEach(date => {
            const week = getCurrentWeek(date);
            expect(week.getUTCFullYear()).toBe(2020);
            expect(week.getMonth()).toBe(3);
            expect(week.getDate()).toBe(5);
        });
    });
    it('should return first day of minDate when passed and currentWeek is below', () => {
        const values = ['03/21/2018', '02/21/2018', '08/21/2018'];

        values.forEach(date => {
            const week = getCurrentWeek(date, '01/21/2019');
            expect(week.getUTCFullYear()).toBe(2019);
            expect(week.getMonth()).toBe(0);
            expect(week.getDate()).toBe(20);
        });
    });
    it('should return first day of maxDate when passed and currentWeek is beyond', () => {
        const values = ['03/21/2019', '02/21/2019', '08/21/2019'];

        values.forEach(date => {
            const week = getCurrentWeek(date, undefined, '01/21/2019');
            expect(week.getUTCFullYear()).toBe(2019);
            expect(week.getMonth()).toBe(0);
            expect(week.getDate()).toBe(20);
        });
    });
    it('should return first day of currentWeek when is between minDate and maxDate', () => {
        const values = ['03/21/2019', '02/21/2019', '08/21/2019'];
        const results = [
            { date: 17, month: 2, year: 2019 },
            { date: 17, month: 1, year: 2019 },
            { date: 18, month: 7, year: 2019 },
        ];

        values.forEach((date, index) => {
            const week = getCurrentWeek(date, '01/21/2018', '01/21/2020');
            expect(week.getUTCFullYear()).toBe(results[index].year);
            expect(week.getMonth()).toBe(results[index].month);
            expect(week.getDate()).toBe(results[index].date);
        });
    });
});
