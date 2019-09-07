import getDefaultAmPm from '../getDefaultAmPm';

describe('getDefaultAmPm', () => {
    it('should return "PM" when value passed is a number and it is greater than 11 and less than 20', () => {
        const values = [12, 13, 14, 15, 16, 17, 18, 19];
        values.forEach(value => expect(getDefaultAmPm(value)).toBe('PM'));
    });
    it('should return "AM" when value passed is a number and it is less than 11 and greater than 20', () => {
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 34];
        values.forEach(value => expect(getDefaultAmPm(value)).toBe('AM'));
    });
});
