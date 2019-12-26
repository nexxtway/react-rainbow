import { rgbaToRgb } from '../color';

describe('rgbaToRgb', () => {
    const colors = [
        {
            rgb: 'rgb(1, 182, 245)',
            rgba: 'rgba(1, 182, 245, 0.3)',
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value in rgb format', () => {
        colors.forEach(v => {
            expect(rgbaToRgb(v.rgba)).toBe(v.rgb);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        expect.assertions(3);
        ['#f00000000', '#f0', 'f00000'].forEach(v => {
            expect(rgbaToRgb(v)).toEqual(EMPTY_STRING);
        });
    });
});
