import getNormalizeValue from '../getNormalizeValue';

describe('getNormalizeValue', () => {
    it('should return right value', () => {
        const values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, { label: 'ok' }];
        const expectedResults = [{}, {}, {}, {}, {}, {}, {}, {}, { label: 'ok' }];
        values.forEach((value, index) => {
            expect(getNormalizeValue(value)).toEqual(expectedResults[index]);
        });
    });
});
