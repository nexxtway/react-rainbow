import isPrintableCharacter from '../isPrintableCharacter';

describe('isPrintableCharacter', () => {
    it('should return true', () => {
        ['a', 'b', 'z', '3', '*', '['].forEach(character => {
            expect(isPrintableCharacter(character)).toBe(true);
        });
    });
    it('should return false', () => {
        ['aa', null, undefined, [], {}].forEach(character => {
            expect(isPrintableCharacter(character)).toBe(false);
        });
    });
});
