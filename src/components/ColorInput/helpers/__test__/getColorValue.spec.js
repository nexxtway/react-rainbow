import getColorValue from '../getColorValue';

describe('getColorValue', () => {
    it('should return undefined when value is falsey', () => {
        const values = [null, undefined, false];
        values.forEach(val => {
            expect(getColorValue(val)).toBe(undefined);
        });
    });

    it('should return undefined when the value is invalid', () => {
        const values = [{}, '#fff', true, [], { hex: 'ccc' }];
        values.forEach(val => {
            expect(getColorValue(val)).toBe(undefined);
        });
    });

    it('should return the correct ColorPicker value when value is valid', () => {
        const value = { hex: '#000', alpha: 0.8 };
        expect(getColorValue(value)).toEqual({ hex: '#000', rgba: [0, 0, 0, 0.8] });
    });
});
