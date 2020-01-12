import { recomposeColor } from '../color';

describe('recomposeColor', () => {
    const colors = ['rgb(1, 182, 245)', 'hsl(0, 100%, 50%)'];
    const colorsDecomposed = [
        {
            type: 'rgb',
            values: [1, 182, 245],
        },
        {
            type: 'hsl',
            values: [0, 100, 50],
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value', () => {
        colorsDecomposed.forEach((value, idx) => {
            expect(recomposeColor(value)).toBe(colors[idx]);
        });
    });
    it('should return an empty string with the wrong color', () => {
        expect(recomposeColor('#f00')).toBe(EMPTY_STRING);
    });
});
