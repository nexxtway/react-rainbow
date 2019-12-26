import clamp from '../color/clamp';

describe('clamp', () => {
    it('should return the same value if it is between 0 and 1', () => {
        expect.assertions(4);
        [0, 0.1, 0.5, 1].forEach(v => {
            expect(clamp(v)).toStrictEqual(v);
        });
    });
    it('should return 0 if value is less than 0', () => {
        expect.assertions(3);

        [-2, -5, -7].forEach(v => {
            expect(clamp(v)).toStrictEqual(0);
        });
    });
    it('should return 1 if value is greater than 1', () => {
        expect.assertions(3);

        [2, 5, 7].forEach(v => {
            expect(clamp(v)).toStrictEqual(1);
        });
    });
});
