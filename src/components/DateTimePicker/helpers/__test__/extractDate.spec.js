import extractDate from '../extractDate';

describe('extractDate', () => {
    it('should return an empty string when pass falsy values', () => {
        const values = [undefined, null, '', 0];
        values.forEach(value => {
            expect(extractDate(value)).toBe('');
        });
    });
    it('should return an empty string when pass an invalid date', () => {
        expect(extractDate('29-08-2003')).toBe('');
        expect(extractDate('wrong date')).toBe('');
    });
    it('should return the right date', () => {
        expect(extractDate(new Date(2019, 3, 24))).toBe('04/24/2019');
        expect(extractDate(new Date('04/24/2019'))).toBe('04/24/2019');
        expect(extractDate('04/24/2019')).toBe('04/24/2019');
    });
});
