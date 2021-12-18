import getHexString from '../getHexString';

describe('getHexString', () => {
    it('should prepend a # to the string', () => {
        const value = 'cccccc';
        expect(getHexString(value)).toBe('#cccccc');
    });

    it('should return the same string', () => {
        const value = '#ccc';
        expect(getHexString(value)).toBe('#ccc');
    });

    it('should return an empty string when value is invalid', () => {
        const values = [false, undefined, [], {}, -333];
        values.forEach(val => {
            expect(getHexString(val)).toBe('');
        });
    });
});
