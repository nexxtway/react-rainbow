import getNormalizedValue from '../getNormalizedValue';

describe('getNormalizedValue', () => {
    it('should return the same value when multiple is true', () => {
        const value = '';
        const isChecked = true;
        const isMultiple = true;
        expect(getNormalizedValue('monday', isChecked, isMultiple, value)).toBe('monday');
    });
    it('should return the same value when multiple is true and value is undefined', () => {
        const isChecked = true;
        const isMultiple = true;
        expect(getNormalizedValue('monday', isChecked, isMultiple)).toBe('monday');
    });
    it('should return an untouched array list when isChecked is false and multiple is true', () => {
        const value = ['monday', 'friday'];
        const isChecked = false;
        const isMultiple = true;
        expect(getNormalizedValue('saturday', isChecked, isMultiple, value)).toEqual([
            'monday',
            'friday',
        ]);
    });
    it('should return a merged array list when isChecked is true and multiple is true', () => {
        const value = ['monday', 'friday'];
        const isChecked = true;
        const isMultiple = true;
        expect(getNormalizedValue('saturday', isChecked, isMultiple, value)).toEqual([
            'monday',
            'friday',
            'saturday',
        ]);
    });
});
