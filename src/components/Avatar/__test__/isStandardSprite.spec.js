import isStandardSprite from './../isStandardSprite';

describe('isStandardSprite()', () => {
    it('should return true when the sprite of the iconName passed is standard', () => {
        expect(isStandardSprite('standard:user')).toBe(true);
    });
    it('should return false when the sprite of the iconName passed is not standard', () => {
        expect(isStandardSprite('utility:user')).toBe(false);
    });
});
