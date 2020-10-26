import getNormalizedValue from '../getNormalizedValue';

describe('getNormalizedValue helper', () => {
    it('should return the numbers without unnecesary zeros', () => {
        const numbers = [
            0.30000000000000004,
            6.800000000000001,
            1.9000000000000001,
            0.11000000000000009,
            0.20000000000000284,
            7.6000000000000005,
            0.020000000000000004,
        ];
        const rounded = [0.3, 6.8, 1.9, 0.11, 0.2, 7.6, 0.02];

        numbers.forEach((value, index) => {
            expect(getNormalizedValue(value)).toBe(rounded[index]);
        });
    });
});
