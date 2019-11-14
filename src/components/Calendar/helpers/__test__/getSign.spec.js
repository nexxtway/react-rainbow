import getSign from '../getSign';

describe('getSign', () => {
    it('should return -1', () => {
        const values = [-1, -1.35, -0.53];
        values.forEach(value => expect(getSign(value)).toBe(-1));
    });
    it('should return 0', () => {
        const values = [-0, 0];
        values.forEach(value => expect(getSign(value)).toBe(0));
    });
    it('should return 1', () => {
        const values = [0.45, 1, 34.467];
        values.forEach(value => expect(getSign(value)).toBe(1));
    });
});
