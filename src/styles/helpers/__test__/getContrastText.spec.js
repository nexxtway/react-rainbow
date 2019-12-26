import { getContrastText } from '../color';
import { COLOR_BRAND, COLOR_SUCCESS, COLOR_WARNING } from '../../colors';

jest.mock('../color/getContrastRatio', () => background => {
    if (background === '#fc0') {
        return false;
    }
    return true;
});
jest.mock('../color/darken', () => color => {
    if (color === '#01b6f5') {
        return 'rgb(0, 163, 220)';
    }
    return 'rgb(26, 209, 163)';
});

describe('getContrastText', () => {
    const darkenColorBrand = 'rgb(0, 163, 220)';
    const darkenColorSuccess = 'rgb(26, 209, 163)';
    const colors = [
        {
            background: COLOR_BRAND,
            result: 'rgba(255, 255, 255, 1)',
        },
        {
            background: 'rgb(1, 182, 245)',
            result: 'rgba(0, 0, 0, 0.87)',
        },
        {
            background: 'hsl(0, 100%, 50%)',
            result: 'rgba(0, 0, 0, 0.87)',
        },
        {
            background: COLOR_SUCCESS,
            result: 'rgba(255, 255, 255, 1)',
        },
        {
            background: darkenColorBrand,
            result: 'rgba(255, 255, 255, 1)',
        },
        {
            background: darkenColorSuccess,
            result: 'rgba(255, 255, 255, 1)',
        },
        {
            background: COLOR_WARNING,
            result: 'rgba(0, 0, 0, 0.87)',
        },
    ];

    it('should return a number', () => {
        expect.assertions(7);
        colors.forEach(v => {
            expect(getContrastText(v.background)).toStrictEqual(expect.any(String));
        });
    });
    it('should return the right value', () => {
        expect.assertions(7);
        colors.forEach((v, i) => {
            expect(getContrastText(v.background)).toBe(colors[i].result);
        });
    });
    it('should an error without background', () => {
        expect(() => getContrastText()).toThrow(TypeError);
    });
});
