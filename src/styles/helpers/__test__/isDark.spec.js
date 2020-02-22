import { isDark } from '../color';

jest.mock('../color/getBrightness', () =>
    jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(51)
        .mockReturnValueOnce(119)
        .mockReturnValueOnce(255)
        .mockReturnValueOnce(238)
        .mockReturnValueOnce(136),
);

describe('isDark', () => {
    it('should return true with a dark color', () => {
        ['#000', '#333', '#777'].forEach(value => {
            expect(isDark(value.main)).toBe(true);
        });
    });

    it('should return false with a light color', () => {
        ['#fff', '#eee', '#888'].forEach(value => {
            expect(isDark(value.main)).toBe(false);
        });
    });
});
