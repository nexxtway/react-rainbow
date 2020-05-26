import getEnumerableWidth from '../getEnumerableWidth';

describe('getEnumerableWidth', () => {
    it('should return the default width when value is not sent', () => {
        expect(getEnumerableWidth()).toBe(48);
    });
    it('should return the default calculated width when value is default', () => {
        const defaultWidth = 40;
        const stringWidth = 8;
        const expectedWidth = defaultWidth + stringWidth;
        expect(getEnumerableWidth(0)).toBe(expectedWidth);
    });
    it('should return the right width when value length is 3 (999)', () => {
        const defaultWidth = 40;
        const stringWidth = 24;
        const expectedWidth = defaultWidth + stringWidth;
        expect(getEnumerableWidth(999)).toBe(expectedWidth);
    });
});
