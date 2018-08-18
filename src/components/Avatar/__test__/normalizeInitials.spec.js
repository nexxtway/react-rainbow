import normalizeInitials from './../normalizeInitials';

describe('isInitialsValid()', () => {
    it('should return one letter when one letter is passed', () => {
        expect(normalizeInitials('J')).toBe('J');
    });
    it('should return two letters when two letters or more are passed', () => {
        expect(normalizeInitials('JdE')).toBe('Jd');
    });
});
