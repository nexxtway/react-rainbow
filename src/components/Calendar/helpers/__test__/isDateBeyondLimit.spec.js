import isDateBeyondLimit from '../isDateBeyondLimit';

describe('isDateBeyondLimit', () => {
    it('should return true', () => {
        const date = new Date(2019, 3, 1);
        const limit = new Date(2019, 2, 1, 23, 12, 34, 600);
        expect(isDateBeyondLimit(date, limit)).toBe(true);
    });
    it('should return false', () => {
        const date = new Date(2019, 1, 1);
        const limit = new Date(2019, 2, 1, 23, 12, 34, 600);
        expect(isDateBeyondLimit(date, limit)).toBe(false);
        expect(isDateBeyondLimit(limit, limit)).toBe(false);
    });
});
