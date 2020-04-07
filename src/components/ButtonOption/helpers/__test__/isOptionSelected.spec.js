import isOptionSelected from '../isOptionSelected';

describe('isOptionSelected', () => {
    it('should return true when name is present in the array of values', () => {
        const values = ['option1', 'option2'];
        const name = 'option2';
        expect(isOptionSelected(values, name)).toBe(true);
    });

    it('should return false when name is not present in the array of values', () => {
        const values = ['option1', 'option2'];
        const name = 'option3';
        expect(isOptionSelected(values, name)).toBe(false);
    });

    it('should return true when values is a string and it is equal to name', () => {
        const values = 'option2';
        const name = 'option2';
        expect(isOptionSelected(values, name)).toBe(true);
    });

    it('should return false when values is a string and it is different to name', () => {
        const values = 'option1';
        const name = 'option2';
        expect(isOptionSelected(values, name)).toBe(false);
    });

    it('should return false when the value passed is other type than array and string', () => {
        [undefined, null, 12, {}, () => {}].forEach(value => {
            expect(isOptionSelected(value, 'option')).toBe(false);
        });
    });
});
