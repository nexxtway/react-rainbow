import getAmPm from '../getAmPm';

describe('getAmPm', () => {
    it('should return "AM" when value passed is a valid formatted time', () => {
        const values = ['01:32 AM', '11:02 AM', '05:00 AM', '10:19 AM'];
        values.forEach(value => expect(getAmPm(value)).toBe('AM'));
    });
    it('should return "PM" when value passed is a valid formatted time', () => {
        const values = ['01:32 PM', '11:02 PM', '05:00 PM', '10:19 PM'];
        values.forEach(value => expect(getAmPm(value)).toBe('PM'));
    });
    it('should return undefined when value passed is falsy', () => {
        const values = [null, false, NaN, 0, undefined];
        values.forEach(value => expect(getAmPm(value)).toBe(undefined));
    });
});
