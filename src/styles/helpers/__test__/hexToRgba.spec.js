import { hexToRgba } from '../color';

describe('hexToRgba', () => {
    const alpha = 0.3;
    const colors = [
        {
            hex: '#01b6f5',
            rgba: `rgba(1, 182, 245, ${alpha})`,
            rgbad: 'rgba(1, 182, 245, 0.5)',
        },
        {
            hex: '#fff',
            rgba: `rgba(255, 255, 255, ${alpha})`,
            rgbad: 'rgba(255, 255, 255, 0.5)',
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value in rgba format', () => {
        expect.assertions(2);
        colors.forEach(v => {
            expect(hexToRgba(v.hex, alpha)).toBe(v.rgba);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        expect.assertions(3);
        ['#f00000000', '#f0', 'f00000'].forEach(v => {
            expect(hexToRgba(v, alpha)).toEqual(EMPTY_STRING);
        });
    });
    it('should return rgba with alpha = 0.5 wich is the default value', () => {
        expect.assertions(2);
        colors.forEach(v => {
            expect(hexToRgba(v.hex)).toBe(v.rgbad);
        });
    });
});
