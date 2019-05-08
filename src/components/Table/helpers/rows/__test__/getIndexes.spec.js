import getIndexes from '../getIndexes';

const rows = [{ key: 'row-1' }, { key: 'row-2' }, { key: 'row-3' }];

describe('getIndexes', () => {
    it('should return an empty object when rows passed is not an array or an empty array', () => {
        const values = [[], {}, null, undefined, '', 'abcd', 1234, () => {}];
        values.forEach(value => {
            expect(getIndexes(value)).toEqual({});
        });
    });
    it('should return the right indexes object when rows are passed', () => {
        expect(getIndexes(rows)).toEqual({
            'row-1': { rowIndex: 0 },
            'row-2': { rowIndex: 1 },
            'row-3': { rowIndex: 2 },
        });
    });
});
