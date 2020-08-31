import calculateSaturation from '../calculateSaturation';

describe('calculateSaturation', () => {
    it('should the right value when pageX is a number', () => {
        const event = { pageX: 20 };
        const rect = { width: 100, left: 0 };

        expect(calculateSaturation(event, rect)).toBe(20);
    });

    it('should the right value when pageX is not a number', () => {
        const event = { touches: [{ pageX: 0 }] };
        const rect = { width: 100, left: 0 };

        expect(calculateSaturation(event, rect)).toBe(0);
    });
});
