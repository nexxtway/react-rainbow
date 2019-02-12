import isOptionSelected from './../isOptionSelected';

const option = {
    value: 'value-1',
};

describe('isOptionSelected', () => {
    it('should return false if values is falsy', () => {
        expect(isOptionSelected(undefined, option)).toBe(false);
        expect(isOptionSelected(null, option)).toBe(false);
        expect(isOptionSelected('', option)).toBe(false);
        expect(isOptionSelected(0, option)).toBe(false);
    });
    it('should return false if values is truty but not an array', () => {
        expect(isOptionSelected({}, option)).toBe(false);
        expect(isOptionSelected('some text', option)).toBe(false);
        expect(isOptionSelected(12, option)).toBe(false);
        expect(isOptionSelected(() => {}, option)).toBe(false);
    });
    it('should return false if the option does not exists in the values array', () => {
        expect(isOptionSelected([], option)).toBe(false);
        expect(isOptionSelected(['value-2'], option)).toBe(false);
    });
    it('should return true if the option exists in the values array', () => {
        expect(isOptionSelected(['value-2', 'value-1', 'value-5'], option)).toBe(true);
    });
});
