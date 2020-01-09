import { getLuminance } from '../color';

jest.mock('../color/decomposeColor', () => () => {
    const result = {
        type: 'rgb',
        values: [1, 182, 245],
    };
    return result;
});
jest.mock('../color/hslToRgb', () => () => 'rgb(1, 182, 245)');

describe('getLuminance', () => {
    const colors = [
        {
            main: '#01b6f5',
            luminance: 0.401,
        },
        {
            main: 'rgb(1, 182, 245)',
            luminance: 0.401,
        },
        {
            main: 'hsl(0, 100%, 50%)',
            luminance: 0.401,
        },
    ];

    it('should return the right value', () => {
        colors.forEach((value, idx) => {
            expect(getLuminance(value.main)).toBeCloseTo(colors[idx].luminance);
        });
    });
});
