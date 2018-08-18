import normalizeInitials from './../normalizeInitials';

describe('normalizeInitials()', () => {
    it('should return one letter when one letter is passed', () => {
        expect(normalizeInitials('J')).toBe('J');
    });
    it('should return two letters when two letters are passed', () => {
        expect(normalizeInitials('Jd')).toBe('Jd');
    });
    it('should return two letters when more of two letters are passed', () => {
        expect(normalizeInitials('JdE')).toBe('Jd');
    });
});
