import isInitialsValid from './../isInitialsValid';

describe('isInitialsValid()', () => {
    it('should return true when is passed two letters in uppercase', () => {
        expect(isInitialsValid('JD')).toBe(true);
    });
    it('should return true when is passed two letters, the first in uppercase and the second in lowercase', () => {
        expect(isInitialsValid('Jd')).toBe(true);
    });
    it('should return false when is passed two letters and the first in lowercase', () => {
        expect(isInitialsValid('jD')).toBe(false);
    });
    it('should return false when is passed more than two letters', () => {
        expect(isInitialsValid('JDE')).toBe(false);
    });
    it('should return false when is passed more than two letters 3', () => {
        expect(isInitialsValid('J')).toBe(false);
    });
});
