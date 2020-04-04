import getCurrentMonth from '../getCurrentMonth';

describe('getCurrentMonth', () => {
    it('should return 2019/03/01 when 2019/03/21', () => {
        const values = [
            new Date(2019, 2, 21),
            new Date('03/21/2019'),
            '03/21/2019',
            '03-21-2019',
            '2019/03/21',
        ];
        values.forEach(date => {
            const month = getCurrentMonth(date);
            expect(month.getUTCFullYear()).toBe(2019);
            expect(month.getMonth()).toBe(2);
            expect(month.getDate()).toBe(1);
        });
    });
    it('should return first day of minDate when passed and currentMonth is below', () => {
        const values = ['03/21/2018', '02/21/2018', '08/21/2018'];

        values.forEach(date => {
            const month = getCurrentMonth(date, '01/21/2019');
            expect(month.getUTCFullYear()).toBe(2019);
            expect(month.getMonth()).toBe(0);
            expect(month.getDate()).toBe(1);
        });
    });
    it('should return first day of maxDate when passed and currentMonth is beyond', () => {
        const values = ['03/21/2019', '02/21/2019', '08/21/2019'];

        values.forEach(date => {
            const month = getCurrentMonth(date, undefined, '01/21/2019');
            expect(month.getUTCFullYear()).toBe(2019);
            expect(month.getMonth()).toBe(0);
            expect(month.getDate()).toBe(1);
        });
    });
    it('should return first day of currentMonth when is between minDate and maxDate', () => {
        const values = ['03/21/2019', '02/21/2019', '08/21/2019'];
        const results = [
            { date: 1, month: 2, year: 2019 },
            { date: 1, month: 1, year: 2019 },
            { date: 1, month: 7, year: 2019 },
        ];

        values.forEach((date, index) => {
            const month = getCurrentMonth(date, '01/21/2018', '01/21/2020');
            expect(month.getUTCFullYear()).toBe(results[index].year);
            expect(month.getMonth()).toBe(results[index].month);
            expect(month.getDate()).toBe(results[index].date);
        });
    });
});
