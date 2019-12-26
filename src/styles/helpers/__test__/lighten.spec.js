import { lighten } from '../color';

jest.mock('../color/clamp', () => coefficient => coefficient);
jest.mock('../color/decomposeColor', () => () => {
    const result = {
        type: 'rgb',
        values: [1, 182, 245],
    };
    return result;
});
jest.mock('../color/recomposeColor', () => color =>
    `rgb(${color.values[0]}, ${color.values[1]}, ${color.values[2]})`,
);

describe('lighten', () => {
    const colors = [
        {
            main: '#01b6f5',
            light: 'rgb(204, 240, 253)',
            lightc: 'rgb(229, 247, 254)',
        },
        {
            main: 'rgb(1, 182, 245)',
            light: 'rgb(204, 240, 253)',
            lightc: 'rgb(229, 247, 254)',
        },
        {
            main: 'hsl(0, 100%, 50%)',
            light: 'rgb(204, 240, 253)',
            lightc: 'rgb(229, 247, 254)',
        },
    ];
    const coefficient = 0.9;

    it('should return a string', () => {
        expect.assertions(3);
        colors.forEach(v => {
            expect(lighten(v.main)).toStrictEqual(expect.any(String));
        });
    });
    it('should return the right value with coefficient by default', () => {
        expect.assertions(3);
        colors.forEach((v, i) => {
            expect(lighten(v.main)).toStrictEqual(colors[i].light);
        });
    });
    it('should return the right value with custom coefficient', () => {
        expect.assertions(3);
        colors.forEach((v, i) => {
            expect(lighten(v.main, coefficient)).toStrictEqual(colors[i].lightc);
        });
    });
});
