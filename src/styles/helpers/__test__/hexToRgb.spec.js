import { hexToRgb } from '../color';

describe('hexToRgb', () => {
    const colors = [
        {
            hex: '#01b6f5',
            rgb: 'rgb(1, 182, 245)',
        },
        {
            hex: '#fff',
            rgb: 'rgb(255, 255, 255)',
        },
    ];
    const EMPTY_STRING = '';

    it('should return the right value in rgb format', () => {
        colors.forEach(value => {
            expect(hexToRgb(value.hex)).toBe(value.rgb);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        ['#f00000000', '#f0', 'f00000'].forEach(value => {
            expect(hexToRgb(value)).toBe(EMPTY_STRING);
        });
    });
});
