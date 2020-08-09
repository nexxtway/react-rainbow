import normalizeValue from '../normalizeValue';

describe('normalizeValue', () => {
    it('should return an empty array', () => {
        const values = [undefined, null, 0, true, []];
        values.forEach(val => {
            expect(normalizeValue(val)).toEqual([]);
        });
    });

    it('should return the right values', () => {
        const values = [
            { label: 'Label', name: 'Name', value: 'Value', icon: 'Icon', extra: 'value' },
            [{ label: 'Label', name: 'Name', value: 'Value', icon: 'Icon', extra: 'value' }],
        ];
        const expected = [
            { label: 'Label', name: 'Name', value: 'Value', icon: 'Icon' },
            [{ label: 'Label', name: 'Name', value: 'Value', icon: 'Icon' }],
        ];
        values.forEach((val, index) => {
            expect(normalizeValue(val)).toEqual(expected[index]);
        });
    });
});
