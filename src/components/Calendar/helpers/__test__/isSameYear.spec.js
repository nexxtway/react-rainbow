import isSameYear from '../isSameYear';

describe('isSameYear', () => {
    it('should return true when dates passed are in the same year', () => {
        expect(isSameYear('04/21/2019', '04/24/2019')).toBe(true);
        expect(isSameYear('03/8/2019', new Date('04/24/2019'))).toBe(true);
        expect(isSameYear('04/24/2019', new Date(2019, 3, 24))).toBe(true);
    });
    it('should return false when dates passed are in the same year', () => {
        expect(isSameYear('04/24/2019', '04/24/2018')).toBe(false);
        expect(isSameYear('04/24/2018', new Date('04/23/2019'))).toBe(false);
        expect(isSameYear('04/24/2019', new Date(2018, 1, 24))).toBe(false);
    });
    it('should return false when pass an invalid date', () => {
        expect(isSameYear('29-08-2003', 123)).toBe(false);
        expect(isSameYear('wrong date', null)).toBe(false);
    });
});
