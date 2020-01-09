import clamp from '../color/clamp';

describe('clamp', () => {
    it('should return the same value if it is between 0 and 1', () => {
        [0, 0.1, 0.5, 1].forEach(value => {
            expect(clamp(value)).toBe(value);
        });
    });
    it('should return 0 if value is less than 0', () => {
        [-2, -5, -7].forEach(value => {
            expect(clamp(value)).toBe(0);
        });
    });
    it('should return 1 if value is greater than 1', () => {
        [2, 5, 7].forEach(value => {
            expect(clamp(value)).toBe(1);
        });
    });
});
