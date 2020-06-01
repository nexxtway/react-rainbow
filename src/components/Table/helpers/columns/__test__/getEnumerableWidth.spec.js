import getEnumerableWidth from '../getEnumerableWidth';

describe('getEnumerableWidth', () => {
    it('should return the default width when value is not sent', () => {
        expect(getEnumerableWidth()).toBe(48);
    });
    it('should return the default calculated width when value is default', () => {
        expect(getEnumerableWidth(0)).toBe(48);
    });
    it('should return the right width when value length is 3 (999)', () => {
        expect(getEnumerableWidth(999)).toBe(72);
    });
});
