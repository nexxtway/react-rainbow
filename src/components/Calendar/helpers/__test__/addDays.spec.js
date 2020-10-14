import addDays from '../addDays';

describe('addDays', () => {
    it('should return a date 3 days after', () => {
        const date = new Date(2019, 2, 1);
        expect(addDays(date, 3).getDate()).toBe(4);
    });
});
