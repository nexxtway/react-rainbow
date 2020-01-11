import { darken } from '../color';

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

describe('darken', () => {
    const colors = [
        {
            main: '#01b6f5',
            dark: 'rgb(0, 163, 220)',
            darkc: 'rgb(0, 127, 171)',
        },
        {
            main: 'rgb(1, 182, 245)',
            dark: 'rgb(0, 163, 220)',
            darkc: 'rgb(0, 127, 171)',
        },
        {
            main: 'hsl(0, 100%, 50%)',
            dark: 'rgb(0, 163, 220)',
            darkc: 'rgb(0, 127, 171)',
        },
    ];
    const coefficient = 0.3;

    it('should return the right value with coefficient by default', () => {
        colors.forEach((value, idx) => {
            expect(darken(value.main)).toBe(colors[idx].dark);
        });
    });
    it('should return the right value with custom coefficient', () => {
        colors.forEach((value, idx) => {
            expect(darken(value.main, coefficient)).toBe(colors[idx].darkc);
        });
    });
});
