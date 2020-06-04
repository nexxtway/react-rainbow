import getValueNames from '../getValueNames';

describe('getValueNames', () => {
    it('should return right value', () => {
        const values = [
            null,
            undefined,
            '',
            'abc',
            1,
            [],
            [1, 2],
            {},
            { name: 'ok' },
            [{ name: 'ok1' }, { name: 'ok2' }],
        ];
        const expectedResults = [[], [], [], [], [], [], [], [], ['ok'], ['ok1', 'ok2']];
        values.forEach((value, index) => {
            expect(getValueNames(value)).toEqual(expectedResults[index]);
        });
    });
});
