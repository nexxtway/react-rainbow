import normalizeTheme from '../normalizeTheme';
import defaultTheme from '../../defaultTheme';

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
                        brand: 'fff',
                    },
                },
            }),
        ).toEqual({
            rainbow: {
                palette: {
                    ...defaultTheme.palette,
                    brand: 'fff',
                },
            },
        });
    });
});
