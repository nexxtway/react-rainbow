import getFirstDayMonth from './../getFirstDayMonth';

describe('getFirstDayMonth', () => {
    it('should return a 2019/03/01 when 2019/03/21', () => {
        const values = [
            new Date(2019, 2, 21),
            new Date('03/21/2019'),
            '03/21/2019',
            '03-21-2019',
            '2019/03/21',
        ];
        values.forEach(date => {
            expect(getFirstDayMonth(date).getUTCFullYear()).toBe(2019);
            expect(getFirstDayMonth(date).getMonth()).toBe(2);
            expect(getFirstDayMonth(date).getDate()).toBe(1);
        });
    });
    it('should return the firs date of the current month when date passed is invalid', () => {
        expect(getFirstDayMonth('29-23-2033').getDate()).toBe(1);
        expect(getFirstDayMonth('wrong date').getDate()).toBe(1);
    });
});
