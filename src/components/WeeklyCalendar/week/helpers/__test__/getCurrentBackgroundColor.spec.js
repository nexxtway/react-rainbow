import { getCurrentBackgroundColor } from '..';

const palette = {
    brand: {
        main: '#000000',
    },
};

describe('getCurrentBackgroundColor', () => {
    it('should return backgroundColor when this is a valid color', () => {
        const backgroundColor = '#1700ff';
        expect(getCurrentBackgroundColor({ backgroundColor, palette })).toBe('#1700ff');
    });
    it('should return "#000000" when backgroundColor is not a valid color', () => {
        const backgroundColor = '#1700ff#';
        expect(getCurrentBackgroundColor({ backgroundColor, palette })).toBe('#000000');
    });
});
