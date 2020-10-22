import { getCurrentColor } from '..';

const mockGetContrastText = jest.fn(() => '#ffffff');
const theme = {
    palette: {
        brand: {
            main: '#000000',
        },
        getContrastText: mockGetContrastText,
    },
};

describe('getCurrentColor', () => {
    it('should return color1 when this is a valid color', () => {
        const color1 = '#1700ff';
        const color2 = '#ff0008';
        expect(getCurrentColor(color1, color2, theme)).toBe('#1700ff');
    });
    it('should call getContrastText with color2 when color1 is not a valid color', () => {
        const color1 = '#1700ff#';
        const color2 = '#ff0008';
        expect(getCurrentColor(color1, color2, theme)).toBe('#ffffff');
        expect(mockGetContrastText).toHaveBeenCalledWith('#ff0008');
    });
    it('should call getContrastText with "#000000" when color1 and color2 are not valid colors', () => {
        const color1 = '#1700ff#';
        const color2 = '#ff0008#';
        expect(getCurrentColor(color1, color2, theme)).toBe('#ffffff');
        expect(mockGetContrastText).toHaveBeenCalledWith('#000000');
    });
});
