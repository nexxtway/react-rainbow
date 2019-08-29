import normalizeValue from '../normalizeValue';

describe('normalizeValue', () => {
    it('should return right value', () => {
        const values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, { label: 'ok' }];
        const expectedResults = [{}, {}, {}, 'abc', {}, [], [1, 2], {}, { label: 'ok' }];
        values.forEach((value, index) => {
            expect(normalizeValue(value)).toEqual(expectedResults[index]);
        });
    });
});
