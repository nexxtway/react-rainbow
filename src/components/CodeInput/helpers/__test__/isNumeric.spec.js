import isNumeric from '../isNumeric';

describe('isNumeric', () => {
    it('should return true if value is number', () => {
        expect(isNumeric('1234')).toBe(true);
    });
    it('should return false if value is not number', () => {
        expect(isNumeric('a')).toBe(false);
        expect(isNumeric('4f4jg54zz')).toBe(false);
    });
    it('should return false if value is empty', () => {
        expect(isNumeric('')).toBe(false);
    });
});
