import shouldDateBeSelected from '../shouldDateBeSelected';

describe('shouldDateBeSelected', () => {
    it('should return true when selectionType is single and date is the same as value', () => {
        const date = new Date(2019, 1, 1);
        const value = new Date(2019, 1, 1);
        const range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
        expect(shouldDateBeSelected(date, value, 'single', undefined)).toBe(true);
        expect(shouldDateBeSelected(date, value, 'single', null)).toBe(true);
        expect(shouldDateBeSelected(date, value, 'single', [])).toBe(true);
        expect(shouldDateBeSelected(date, value, 'single', range)).toBe(true);
    });
    it('should return true when selectionType is range and date is same as range boundaries', () => {
        const date1 = new Date(2019, 1, 1);
        const date2 = new Date(2019, 1, 15);
        const value = new Date(2019, 1, 1);
        const range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
        expect(shouldDateBeSelected(date1, undefined, 'range', range)).toBe(true);
        expect(shouldDateBeSelected(date1, null, 'range', range)).toBe(true);
        expect(shouldDateBeSelected(date1, value, 'range', range)).toBe(true);
        expect(shouldDateBeSelected(date2, value, 'range', range)).toBe(true);
    });
    it('should return false when selectionType is single and date is not the same as value', () => {
        const date = new Date(2019, 1, 12);
        const value = new Date(2019, 1, 1);
        const range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
        expect(shouldDateBeSelected(date, value, 'single', undefined)).toBe(false);
        expect(shouldDateBeSelected(date, value, 'single', null)).toBe(false);
        expect(shouldDateBeSelected(date, value, 'single', [])).toBe(false);
        expect(shouldDateBeSelected(date, value, 'single', range)).toBe(false);
    });
    it('should return false when selectionType is range and date is not the same as range boundaries', () => {
        const date1 = new Date(2019, 1, 2);
        const date2 = new Date(2019, 1, 12);
        const value = new Date(2019, 1, 1);
        const range = [new Date(2019, 1, 1), new Date(2019, 1, 15)];
        expect(shouldDateBeSelected(date1, undefined, 'range', range)).toBe(false);
        expect(shouldDateBeSelected(date1, null, 'range', range)).toBe(false);
        expect(shouldDateBeSelected(date1, value, 'range', range)).toBe(false);
        expect(shouldDateBeSelected(date2, value, 'range', range)).toBe(false);
    });
    it('should return false when selectionType is range and range is not an array or is an empty array', () => {
        const date1 = new Date(2019, 1, 2);
        const value = new Date(2019, 1, 1);
        expect(shouldDateBeSelected(date1, value, 'range', 23)).toBe(false);
        expect(shouldDateBeSelected(date1, value, 'range', [])).toBe(false);
    });
});
