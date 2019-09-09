import getMinutes from '../getMinutes';

describe('getMinutes', () => {
    it('should return the right minutes when value passed is a formatted time', () => {
        const values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
        const expects = ['32', '02', '00', '19'];
        values.forEach((value, index) => expect(getMinutes(value)).toBe(expects[index]));
    });
    it('should return an empty string when value passed is falsy', () => {
        const values = [null, false, NaN, 0, undefined];
        values.forEach(value => expect(getMinutes(value)).toBe(''));
    });
});
