import compareDates from '../compareDates';

describe('compareDates', () => {
    it('should return -1', () => {
        const date1 = new Date(2019, 1, 1);
        const date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
        expect(compareDates(date1, date2)).toBe(-1);
    });
    it('should return 0', () => {
        const date1 = new Date(2019, 2, 1);
        const date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
        expect(compareDates(date1, date2)).toBe(0);
    });
    it('should return 1', () => {
        const date1 = new Date(2019, 3, 1);
        const date2 = new Date(2019, 2, 1, 23, 12, 34, 600);
        expect(compareDates(date1, date2)).toBe(1);
    });
});
