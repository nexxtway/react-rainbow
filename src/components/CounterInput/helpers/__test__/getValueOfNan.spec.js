import getValueOfNan from '../getValueOfNan';

describe('getValueOfNan helper', () => {
    it('should return 0', () => {
        const number = getValueOfNan(NaN);
        expect(number).toBe(0);
    });

    it('should return 3', () => {
        const number = getValueOfNan(3);
        expect(number).toBe(3);
    });
});
