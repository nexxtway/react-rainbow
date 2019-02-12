import getMaxHeight from './../getMaxHeight';

describe('getMaxHeight', () => {
    it('should return the right height when is expanded and children has length of 3', () => {
        expect(getMaxHeight([{}, {}, {}], true)).toBe(135);
    });
    it('should return the right height when is expanded and children is a single object', () => {
        expect(getMaxHeight({}, true)).toBe(45);
    });
    it('should return 0 when is expanded and children is null', () => {
        expect(getMaxHeight(null, true)).toBe(0);
    });
    it('should return 0 when is not expanded', () => {
        expect(getMaxHeight({}, false)).toBe(0);
    });
});
