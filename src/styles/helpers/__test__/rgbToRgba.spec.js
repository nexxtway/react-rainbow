import { rgbToRgba } from '../color';

describe('rgbToRgba', () => {
    const alpha = 0.3;
    const colors = {
        rgb: 'rgb(1, 182, 245)',
        rgba: `rgba(1, 182, 245, ${alpha})`,
        rgbad: 'rgba(1, 182, 245, 1)',
    };
    const EMPTY_STRING = '';

    it('should return the right value in rgba format', () => {
        expect(rgbToRgba(colors.rgb, alpha)).toBe(colors.rgba);
        expect(rgbToRgba(colors.rgb)).toBe(colors.rgbad);
        expect(rgbToRgba(colors.rgbad)).toBe(colors.rgbad);
    });
    it('should return an empty string when wrong color is passed', () => {
        ['#f00000000', '#f0', 'f00000'].forEach(value => {
            expect(rgbToRgba(value)).toBe(EMPTY_STRING);
        });
    });
});
