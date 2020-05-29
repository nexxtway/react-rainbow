import get12Hour from '../get12Hour';

describe('get12Hour', () => {
    it('should return 12 when hour is equal to cero', () => {
        const values = ['0', 0];
        values.forEach(value => expect(get12Hour(value)).toBe('12'));
    });
    it('should return an empty string with invalid hour values', () => {
        const values = ['-1', '24', '25', '77', 'as', undefined, null, ''];
        values.forEach(value => expect(get12Hour(value)).toBe(''));
    });
    it('should fullfill with ceros if result hour if less than 10', () => {
        const values = ['13', '14', '15', '16', '17', '18', '19', '20', '21'];
        const expected = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
        values.forEach((value, index) => expect(get12Hour(value)).toBe(expected[index]));
    });
    it('should return the same value if hour is between 1 and 12', () => {
        const values = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        values.forEach(value => expect(get12Hour(value)).toBe(value));
    });
});
