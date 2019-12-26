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

    it('should return a string', () => {
        expect.assertions(2);
        colorsDecomposed.forEach(v => {
            expect(recomposeColor(v)).toStrictEqual(expect.any(String));
        });
    });
    it('should return the right value', () => {
        expect.assertions(2);
        colorsDecomposed.forEach((v, i) => {
            expect(recomposeColor(v)).toStrictEqual(colors[i]);
        });
    });
    it('should return an empty string with the wrong color', () => {
        expect(recomposeColor('#f00')).toStrictEqual(EMPTY_STRING);
    });
});
