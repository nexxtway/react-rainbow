import { getCurrentBackgroundColor } from '..';

const theme = {
    palette: {
        brand: {
            main: '#000000',
        },
    },
};

describe('getCurrentBackgroundColor', () => {
    it('should return color1 when this is a valid color', () => {
        const color1 = '#1700ff';
        expect(getCurrentBackgroundColor(color1, theme)).toBe('#1700ff');
    });
    it('should return "#000000" when color1 is not a valid color', () => {
        const color1 = '#1700ff#';
        expect(getCurrentBackgroundColor(color1, theme)).toBe('#000000');
    });
});
