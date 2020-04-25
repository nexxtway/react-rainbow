import { getHeightOfDate } from '..';

describe('getHeightOfDate', () => {
    it('should return 0 when is 00.00', () => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        expect(getHeightOfDate(date)).toEqual(0);
    });
    it('should return 720 when is 12.00', () => {
        const date = new Date();
        date.setHours(12, 0, 0, 0);
        expect(getHeightOfDate(date)).toEqual(720);
    });
    it('should return 1199 when is 11.59', () => {
        const date = new Date();
        date.setHours(23, 59, 0, 0);
        expect(getHeightOfDate(date)).toBe(1439);
    });
});
