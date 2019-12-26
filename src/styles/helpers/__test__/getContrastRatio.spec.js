import { getContrastRatio } from '../color';

jest.mock('../color/getLuminance', () => color => {
    if (color === '#f00') {
        return 0.5;
    }
    return 0.41;
});

describe('getContrastRatio', () => {
    const colors = [
        {
            foreground: '#f00',
            background: '#01b6f5',
            result: 1.195,
        },
        {
            foreground: 'rgb(255, 255, 255)',
            background: 'rgb(1, 182, 245)',
            result: 0.999,
        },
        {
            foreground: 'hsl(0, 0%, 100%)',
            background: 'hsl(0, 100%, 50%)',
            result: 0.999,
        },
    ];

    it('should return a number', () => {
        expect.assertions(3);
        colors.forEach(v => {
            expect(getContrastRatio(v.foreground, v.background)).toStrictEqual(expect.any(Number));
        });
    });
    it('should return the right value', () => {
        expect.assertions(3);
        colors.forEach((v, i) => {
            expect(getContrastRatio(v.foreground, v.background)).toBeCloseTo(colors[i].result);
        });
    });
});
