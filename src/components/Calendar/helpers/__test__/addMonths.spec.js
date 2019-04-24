import addMonths from './../addMonths';

describe('addMonths', () => {
    it('should return a date 2 month after', () => {
        const date = new Date(2019, 2, 1);
        expect(addMonths(date, 2).getMonth()).toBe(4);
    });
});
