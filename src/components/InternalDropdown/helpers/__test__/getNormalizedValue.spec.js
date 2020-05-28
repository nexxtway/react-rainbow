import getNormalizedValue from '../getNormalizedValue';

describe('getNormalizedValue', () => {
    it('should return right value', () => {
        const values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, { label: 'ok' }];
        const expectedResults = [{}, {}, {}, {}, {}, {}, {}, {}, { label: 'ok' }];
        values.forEach((value, index) => {
            expect(getNormalizedValue(value)).toEqual(expectedResults[index]);
        });
    });
});
