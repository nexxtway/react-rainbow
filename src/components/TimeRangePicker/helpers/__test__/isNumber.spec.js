import isNumber from '../isNumber';

describe('isNumber', () => {
    it('should return true when the value passed is a positive integer number', () => {
        const values = ['00', '01', '56', 99, 100];
        values.forEach(value => expect(isNumber(value)).toBe(true));
    });
    it('should return false when the value passed is not a positive integer number', () => {
        const values = [0.23, '0,1', -100, [], ''];
        values.forEach(value => expect(isNumber(value)).toBe(false));
    });
});
