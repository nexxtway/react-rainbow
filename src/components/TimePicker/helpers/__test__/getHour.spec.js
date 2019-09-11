import getHour from '../getHour';

describe('getHour', () => {
    it('should return the right hour when value passed is a valid formatted time', () => {
        const values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
        const expects = ['01', '11', '05', '10'];
        values.forEach((value, index) => expect(getHour(value)).toBe(expects[index]));
    });
    it('should return an empty string when value passed is falsy', () => {
        const values = [null, false, NaN, 0, undefined];
        values.forEach(value => expect(getHour(value)).toBe(''));
    });
});
