import isSameDay from '../isSameDay';

describe('isSameDay', () => {
    it('should return true when dates passed are the same', () => {
        expect(isSameDay('04/24/2019', '04/24/2019')).toBe(true);
        expect(isSameDay('04/24/2019', new Date('04/24/2019'))).toBe(true);
        expect(isSameDay('04/24/2019', new Date(2019, 3, 24))).toBe(true);
    });
    it('should return false when dates passed are not the same', () => {
        expect(isSameDay('04/24/2019', '04/24/2018')).toBe(false);
        expect(isSameDay('04/24/2019', new Date('04/23/2019'))).toBe(false);
        expect(isSameDay('04/24/2019', new Date(2019, 2, 24))).toBe(false);
    });
    it('should return false when pass an invalid date', () => {
        expect(isSameDay('29-08-2003', 123)).toBe(false);
        expect(isSameDay('wrong date', null)).toBe(false);
    });
});
