import getPageBorderRadius from '../styled/getPageBorderRadius';

describe('getPageBorderRadius function', () => {
    it('should return square border radius styles for 0 pages', () => {
        const pages = 0;
        const result = getPageBorderRadius(pages);
        expect(result).toBe('0 100px 100px 0');
    });
    it('should return rounded border radius for 1 page', () => {
        const pages = 1;
        const result = getPageBorderRadius(pages);
        expect(result).toBe('100px');
    });

    it('should return squared border radius styles for 10 pages', () => {
        const pages = 10;
        const result = getPageBorderRadius(pages);
        expect(result).toBe('0 100px 100px 0');
    });
});
