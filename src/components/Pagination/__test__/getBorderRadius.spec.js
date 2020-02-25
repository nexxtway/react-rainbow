import getBorderRadius from '../helpers/getBorderRadius/getBorderRadius';
import singlePageBorderRadius from '../helpers/getBorderRadius/singlePageBorderRadius';
import multiplePageBorderRadius from '../helpers/getBorderRadius/multiplePageBorderRadius';

describe('getBorderRadius function', () => {
    it('should return singlePageBorderRadius styles for no pages', () => {
        const pages = 0;
        const result = getBorderRadius(pages);
        expect(result).toEqual(singlePageBorderRadius);
    });

    it('should return singlePageBorderRadius styles for 1 page', () => {
        const pages = 1;
        const result = getBorderRadius(pages);
        expect(result).toEqual(singlePageBorderRadius);
    });

    it('should return multiplePageBorderRadius styles for 2 pages', () => {
        const pages = 2;
        const result = getBorderRadius(pages);
        expect(result).toEqual(multiplePageBorderRadius);
    });

    it('should return multiplePageBorderRadius styles for 99 pages', () => {
        const pages = 99;
        const result = getBorderRadius(pages);
        expect(result).toEqual(multiplePageBorderRadius);
    });
});
