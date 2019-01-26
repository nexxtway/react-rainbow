import getResizeGuideLineHeight from '../getResizeGuideLineHeight';

describe('getResizeGuideLineHeight', () => {
    it('should return the resize guide line height', () => {
        expect(getResizeGuideLineHeight(5)).toBe(244);
    });
});
