import { decomposeColor } from '../color';

jest.mock('../color/hexToRgb', () => () => 'rgb(1, 182, 245)');

describe('decomposeColor', () => {
    const colors = ['#01b6f5', 'rgb(1, 182, 245)', 'rgba(1, 182, 245, 0.5)'];
    const colorDecomposed = {
        type: 'rgba',
        values: [1, 182, 245, 1],
    };

    it('should return an object', () => {
        colors.forEach(value => {
            expect(decomposeColor(value)).toStrictEqual({
                type: expect.any(String),
                values: expect.any(Array),
            });
        });
    });
    it('should return an object with type as string and values as array', () => {
        expect(decomposeColor(colors[0])).toStrictEqual({
            type: expect.any(String),
            values: expect.any(Array),
        });
    });
    it('should return the same value when color is decomposed already', () => {
        expect(decomposeColor(colorDecomposed)).toStrictEqual({
            type: expect.any(String),
            values: expect.any(Array),
        });
    });
    it('should return the right value', () => {
        expect(decomposeColor(colors[0])).toStrictEqual(colorDecomposed);
    });
    it('should throw an error when it passed a wrong value', () => {
        expect(() => decomposeColor('f00')).toThrow(Error);
    });
});
