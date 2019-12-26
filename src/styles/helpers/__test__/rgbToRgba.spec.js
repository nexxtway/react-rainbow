import { rgbToRgba } from '../color';

describe('rgbToRgba', () => {
    const alpha = 0.3;
    const colors = [
        {
            rgb: 'rgb(1, 182, 245)',
            rgba: `rgba(1, 182, 245, ${alpha})`,
            rgbad: 'rgba(1, 182, 245, 0.5)',
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value in rgba format', () => {
        expect.assertions(2);
        colors.forEach(v => {
            expect(rgbToRgba(v.rgb, alpha)).toBe(v.rgba);
            expect(rgbToRgba(v.rgb)).toBe(v.rgbad);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        expect.assertions(4);
        ['#f00000000', '#f0', 'f00000', colors[0].rgba].forEach(v => {
            expect(rgbToRgba(v)).toEqual(EMPTY_STRING);
        });
    });
});
