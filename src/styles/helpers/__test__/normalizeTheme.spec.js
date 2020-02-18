import normalizeTheme from '../normalizeTheme';
import defaultTheme from '../../defaultTheme';

jest.mock('../color', () => ({
    darken: jest.fn(() => '#ccc'),
    lighten: jest.fn(() => '#ededed'),
    colorToRgba: jest.fn(() => 'rgba(255, 255, 255, 1)'),
}));

const rainbowTheme = {
    rainbow: defaultTheme,
};

describe('normalizeTheme', () => {
    it('should return default values when no valid theme was passed', () => {
        const values = [null, undefined, {}, [], 'dsadsa', 123];
        values.forEach(theme => {
            expect(normalizeTheme(theme)).toEqual(rainbowTheme);
        });
    });
    it('should return default values when palette is an empty string', () => {
        expect(
            normalizeTheme({
                rainbow: {
                    palette: '',
                },
            }),
        ).toEqual(rainbowTheme);
    });
    it('should return default values when palette is an empty object', () => {
        expect(
            normalizeTheme({
                rainbow: {
                    palette: {},
                },
            }),
        ).toEqual(rainbowTheme);
    });
    it('should return the theme with the brand passed', () => {
        expect(
            normalizeTheme({
                rainbow: {
                    palette: {
                        brand: '#fff',
                    },
                },
            }),
        ).toEqual({
            rainbow: {
                palette: {
                    ...defaultTheme.palette,
                    brand: {
                        main: 'rgba(255, 255, 255, 1)',
                        dark: 'rgba(255, 255, 255, 1)',
                        light: 'rgba(255, 255, 255, 1)',
                    },
                },
                shadows: {
                    ...defaultTheme.shadows,
                    brand: '0 0 2px #fff',
                },
            },
        });
    });
});
