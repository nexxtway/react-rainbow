import { getContrastText } from '../color';
import { COLOR_BRAND, COLOR_SUCCESS, COLOR_WARNING } from '../../colors';

const mockDarkenColorBrand = 'rgb(0, 163, 220)';
const mockDarkenColorSuccess = 'rgb(26, 209, 163)';
const mockColors = [
    {
        background: COLOR_BRAND,
        result: 'rgba(255, 255, 255, 1)',
        ratio: 2.328,
    },
    {
        background: 'rgb(1, 182, 245)',
        result: 'rgba(0, 0, 0, 0.87)',
        ratio: 2.328,
    },
    {
        background: 'hsl(0, 100%, 50%)',
        result: 'rgba(0, 0, 0, 0.87)',
        ratio: 3.992,
    },
    {
        background: COLOR_SUCCESS,
        result: 'rgba(255, 255, 255, 1)',
        ratio: 1.569,
    },
    {
        background: mockDarkenColorBrand,
        result: 'rgba(255, 255, 255, 1)',
        ratio: 2.884,
    },
    {
        background: mockDarkenColorSuccess,
        result: 'rgba(255, 255, 255, 1)',
        ratio: 1.962,
    },
    {
        background: COLOR_WARNING,
        result: 'rgba(0, 0, 0, 0.87)',
        ratio: 1.512,
    },
];

jest.mock('../color/getContrastRatio', () => background =>
    mockColors.filter(v => v.background === background && v.ratio),
);
jest.mock('../color/darken', () => color => {
    if (color === '#01b6f5') {
        return mockDarkenColorBrand;
    }
    return mockDarkenColorSuccess;
});

describe('getContrastText', () => {
    it('should return the right value', () => {
        mockColors.forEach((v, i) => {
            expect(getContrastText(v.background)).toBe(mockColors[i].result);
        });
    });
    it('should return an error without background', () => {
        expect(() => getContrastText()).toThrow(TypeError);
    });
});
