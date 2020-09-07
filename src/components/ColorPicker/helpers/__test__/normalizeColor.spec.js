import normalizeColor, { defaultColor } from '../normalizeColor';

describe('normalizeColor', () => {
    it('should return default value', () => {
        const values = ['', 1, [], {}, true, { hex: '', rgba: '', hvs: '' }];
        values.forEach(value => {
            expect(normalizeColor(value)).toBe(defaultColor);
        });
    });
    it('should return the expect value', () => {
        const values = [
            { hex: '#ffffff' },
            { rgba: [255, 255, 255, 1] },
            { hsv: [0, 0, 100] },
            { hex: '#ffffff', rgba: [255, 255, 255, 1] },
        ];
        const result = { hex: '#ffffff', rgba: [255, 255, 255, 1], hsv: [0, 0, 100] };
        values.forEach(value => {
            expect(normalizeColor(value)).toStrictEqual(result);
        });
    });
});
