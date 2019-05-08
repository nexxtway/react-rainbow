import isNavigationKey from '../isNavigationKey';

describe('isNavigationKey', () => {
    it('should return true when pass up, down or enter key', () => {
        const keys = [38, 40, 13];
        keys.forEach(key => {
            expect(isNavigationKey(key)).toBe(true);
        });
    });
    it('should return false when pass other keys than up, down or enter', () => {
        const keys = [37, 39, 27, 9, 8];
        keys.forEach(key => {
            expect(isNavigationKey(key)).toBe(false);
        });
    });
});
