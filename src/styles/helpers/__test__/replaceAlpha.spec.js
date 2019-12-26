import { replaceAlpha } from '../color';

describe('replaceAlpha', () => {
    const alpha = 0.5;
    const colors = [
        {
            rgb: 'rgb(1, 182, 245)',
            rgba: 'rgba(1, 182, 245, 0.3)',
            rgbar: `rgba(1, 182, 245, ${alpha})`,
        },
    ];
    const EMPTY_STRING = '';

    it('should replace alpha value with the one is passed', () => {
        colors.forEach(v => {
            expect(replaceAlpha(v.rgba, alpha)).toEqual(v.rgbar);
        });
    });
    it('should return an empty string when wrong format is passed or no alpha at all', () => {
        expect.assertions(2);
        colors.forEach(v => {
            expect(replaceAlpha(v.rgb, alpha)).toEqual(EMPTY_STRING);
            expect(replaceAlpha(v.rgba)).toEqual(EMPTY_STRING);
        });
    });
});
