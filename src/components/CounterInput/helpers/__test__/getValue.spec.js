import getValue from '../getValue';

describe('getValueOfNan helper', () => {
    it('should return 0', () => {
        const number = getValue(NaN);
        expect(number).toBe(0);
    });

    it('should return 3', () => {
        const number = getValue(3);
        expect(number).toBe(3);
    });
});
