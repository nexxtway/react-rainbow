import { getBrightness } from '../color';

jest.mock('../color/decomposeColor', () =>
    jest
        .fn(() => {
            const result = {
                type: 'rgb',
                values: [1, 182, 245],
            };
            return result;
        })
        .mockImplementationOnce(() => {
            const result = {
                type: 'rgb',
                values: [0, 0, 0],
            };
            return result;
        })
        .mockImplementationOnce(() => {
            const result = {
                type: 'rgb',
                values: [255, 255, 255],
            };
            return result;
        }),
);

jest.mock('../color/hslToRgb', () => () => 'rgb(1, 182, 245)');

describe('getBrightness', () => {
    const colors = [
        {
            main: '#000',
            brightness: 0,
        },
        {
            main: '#fff',
            brightness: 255,
        },
        {
            main: '#01b6f5',
            brightness: 135.063,
        },
        {
            main: 'rgb(1, 182, 245)',
            brightness: 135.063,
        },
    ];

    it('should return the right value', () => {
        colors.forEach((value, idx) => {
            expect(getBrightness(value.main)).toBeCloseTo(colors[idx].brightness);
        });
    });

    it('should return the right value when color passed is hsl', () => {
        expect(getBrightness('hsl(0, 100%, 50%)')).toBeCloseTo(135.063);
    });
});
