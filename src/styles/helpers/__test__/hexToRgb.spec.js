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
        expect.assertions(2);
        colors.forEach(v => {
            expect(hexToRgb(v.hex)).toBe(v.rgb);
        });
    });
    it('should return an empty string when wrong color is passed', () => {
        expect.assertions(3);
        ['#f00000000', '#f0', 'f00000'].forEach(v => {
            expect(hexToRgb(v)).toEqual(EMPTY_STRING);
        });
    });
});
