import colorToRgba from '../colorToRgba';

describe('colorToRgba', () => {
    it('should return empty string', () => {
        const colors = [null, undefined, {}, [], 'dsadsa', 123];
        colors.forEach(color => {
            expect(colorToRgba(color)).toBe('');
        });
    });
    it('should return rgba converted value from hex color format', () => {
        const colors = ['#ffffff', '#fff'];
        colors.forEach(color => {
            expect(colorToRgba(color)).toBe('rgba(255, 255, 255, 1)');
        });
    });
    it('should return rgba converted value from rgb or rgba color format', () => {
        const colors = ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)'];
        colors.forEach(color => {
            expect(colorToRgba(color)).toBe('rgba(255, 255, 255, 1)');
        });
    });
    it('should return rgba converted value from hsl or hsla color format', () => {
        const colors = ['hsl(120, 100%, 50%)', 'hsla(120, 100%, 50%, 1)'];
        colors.forEach(color => {
            expect(colorToRgba(color)).toBe('rgba(0, 255, 0, 1)');
        });
    });
});
