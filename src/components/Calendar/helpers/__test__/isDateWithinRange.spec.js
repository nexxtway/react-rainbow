import isDateWithinRange from '../isDateWithinRange';

describe('isDateWithinRange', () => {
    it('should return false', () => {
        const range = [new Date(2019, 2, 1, 0, 0, 0, 600), new Date(2019, 15, 1, 23, 12, 34, 600)];
        expect(isDateWithinRange(null, range)).toBe(false);
        expect(isDateWithinRange(undefined, range)).toBe(false);
        expect(isDateWithinRange(new Date(2019, 1, 1), range)).toBe(false);
        expect(isDateWithinRange(new Date(2019, 18, 1), range)).toBe(false);
    });
    it('should return true', () => {
        const range = [new Date(2019, 2, 1), new Date(2019, 15, 1)];
        expect(isDateWithinRange(new Date(2019, 2, 1), range)).toBe(true);
        expect(isDateWithinRange(new Date(2019, 13, 1), range)).toBe(true);
        expect(isDateWithinRange(new Date(2019, 15, 1), range)).toBe(true);
    });
});
