import isEmptyRange from '../isEmptyRange';

describe('isEmptyRange', () => {
    it('should return true', () => {
        const ranges = [null, undefined, [], {}, 0, [undefined], [undefined, undefined]];
        ranges.forEach(range => {
            expect(isEmptyRange(range)).toBe(true);
        });
    });
    it('should return false', () => {
        const ranges = [[1], [1, 2]];
        ranges.forEach(range => {
            expect(isEmptyRange(range)).toBe(false);
        });
    });
});
