import normalizeValue from '../normalizeValue';

describe('normalizeValue', () => {
    test('should return the right values', () => {
        const values = [
            undefined,
            null,
            0,
            true,
            [],
            { label: 'Label', name: 'Name', value: 'Value', icon: 'Icon' },
            [{ label: 'Label', name: 'Name', value: 'Value', icon: 'Icon' }],
        ];
        const expected = [
            [],
            [],
            [],
            [],
            [],
            [{ label: 'Label', name: 'Name', value: 'Value' }],
            [{ label: 'Label', name: 'Name', value: 'Value' }],
        ];
        values.forEach((val, index) => {
            expect(normalizeValue(val)).toEqual(expected[index]);
        });
    });
});
