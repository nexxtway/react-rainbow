import hasChips from '../hasChips';

describe('hasChips', () => {
    test('should return the right values', () => {
        const values = [
            undefined,
            null,
            0,
            true,
            [],
            { label: 'Label', name: 'Name' },
            [{ label: 'Label', name: 'Name' }],
        ];
        const expected = [false, false, false, false, false, true, true];
        values.forEach((val, index) => {
            expect(hasChips(val)).toBe(expected[index]);
        });
    });
});
