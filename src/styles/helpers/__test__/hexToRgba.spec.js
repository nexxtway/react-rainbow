import { hexToRgba } from '../color';

describe('hexToRgba', () => {
    const alpha = 0.3;
    const colors = [
        {
            hex: '#01b6f5',
            rgba: `rgba(1, 182, 245, ${alpha})`,
            rgbad: 'rgba(1, 182, 245, 1)',
        },
        {
            hex: '#fff',
            rgba: `rgba(255, 255, 255, ${alpha})`,
            rgbad: 'rgba(255, 255, 255, 1)',
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value in rgba format', () => {
        colors.forEach(value => {
            expect(hexToRgba(value.hex, alpha)).toBe(value.rgba);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        ['#f00000000', '#f0', 'f00000'].forEach(value => {
            expect(hexToRgba(value, alpha)).toBe(EMPTY_STRING);
        });
    });
    it('should return rgba with alpha = 1 wich is the default value', () => {
        colors.forEach(value => {
            expect(hexToRgba(value.hex)).toBe(value.rgbad);
        });
    });
});
