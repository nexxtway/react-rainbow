import getNumbersFromClipboard from '../getNumbersFromClipboard';

describe('getNumbersFromClipboard', () => {
    it('should return empty if value is empty', () => {
        expect(getNumbersFromClipboard('')).toBe('');
    });
    it('should return numbers only if value is string mixed with numbers', () => {
        expect(getNumbersFromClipboard('1a2s3d4f5g6h7j8k')).toBe('12345678');
    });
});
