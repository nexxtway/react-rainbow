import { rgbaToRgb } from '../color';

describe('rgbaToRgb', () => {
    const color = {
        rgb: 'rgb(1, 182, 245)',
        rgba: 'rgba(1, 182, 245, 0.3)',
    };
    const EMPTY_STRING = '';

    it('should return the right value in rgb format', () => {
        expect(rgbaToRgb(color.rgba)).toBe(color.rgb);
    });
    it('should return an empty string when wrong color is passed', () => {
        ['#f00000000', '#f0', 'f00000'].forEach(value => {
            expect(rgbaToRgb(value)).toBe(EMPTY_STRING);
        });
    });
});
