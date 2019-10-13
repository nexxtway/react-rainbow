import isValidDate from '../isValidDate';

describe('isValidDate', () => {
    it('should return false', () => {
        const values = [undefined, null, '', 0, {}, '29-08-2003', 'wrong date'];
        values.forEach(value => {
            expect(isValidDate(value)).toBe(false);
        });
    });
    it('should return true', () => {
        const values = [new Date(2019, 3, 24, 11, 34, 43), new Date('04/24/2019 13:23')];
        values.forEach(value => {
            expect(isValidDate(value)).toBe(true);
        });
    });
});
