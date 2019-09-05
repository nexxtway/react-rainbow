import getNextAmPmValue from '../getNextAmPmValue';

describe('getNextAmPmValue', () => {
    it('should return the string "PM" when value passed is equal to "AM"', () => {
        expect(getNextAmPmValue('AM')).toBe('PM');
    });
    it('should return the string "PM" when value passed is undefined', () => {
        expect(getNextAmPmValue(undefined)).toBe('PM');
    });
    it('should return the string "AM" when value passed is different to "AM" or undefined', () => {
        const values = ['PM', 'ponlaya', 90, ''];
        values.forEach(value => expect(getNextAmPmValue(value)).toBe('AM'));
    });
});
