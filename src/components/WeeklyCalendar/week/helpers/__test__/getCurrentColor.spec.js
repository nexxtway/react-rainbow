import { getCurrentColor } from '..';

const mockGetContrastText = jest.fn(() => '#ffffff');
const palette = {
    brand: {
        main: '#000000',
    },
    getContrastText: mockGetContrastText,
};

describe('getCurrentColor', () => {
    it('should return color when this is a valid color', () => {
        const color = '#1700ff';
        const backgroundColor = '#ff0008';
        expect(getCurrentColor({ color, backgroundColor, palette })).toBe('#1700ff');
    });
    it('should call getContrastText with backgroundColor when color is not a valid color', () => {
        const color = '#1700ff#';
        const backgroundColor = '#ff0008';
        expect(getCurrentColor({ color, backgroundColor, palette })).toBe('#ffffff');
        expect(mockGetContrastText).toHaveBeenCalledWith('#ff0008');
    });
    it('should call getContrastText with "#000000" when color and backgroundColor are not valid colors', () => {
        const color = '#1700ff#';
        const backgroundColor = '#ff0008#';
        expect(getCurrentColor({ color, backgroundColor, palette })).toBe('#ffffff');
        expect(mockGetContrastText).toHaveBeenCalledWith('#000000');
    });
});
