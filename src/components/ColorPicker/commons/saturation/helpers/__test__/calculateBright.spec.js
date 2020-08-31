import calculateBright from '../calculateBright';

describe('calculateBright', () => {
    it('should return the right value when pageY is a number', () => {
        const event = { pageY: 20 };
        const rect = { height: 100, top: 0 };

        expect(calculateBright(event, rect)).toBe(80);
    });

    it('should return the right value when pageY is not a number', () => {
        const event = { touches: [{ pageY: 0 }] };
        const rect = { height: 100, top: 0 };

        expect(calculateBright(event, rect)).toBe(100);
    });
});
