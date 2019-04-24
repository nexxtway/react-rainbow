import getFirstDayMonth from './../getFirstDayMonth';

describe('getFirstDayMonth', () => {
    it('should return a 2019/03/01 when 2019/03/21', () => {
        const date = new Date(2019, 2, 21);
        expect(getFirstDayMonth(date).getUTCFullYear()).toBe(2019);
        expect(getFirstDayMonth(date).getMonth()).toBe(2);
        expect(getFirstDayMonth(date).getDate()).toBe(1);
    });
});
