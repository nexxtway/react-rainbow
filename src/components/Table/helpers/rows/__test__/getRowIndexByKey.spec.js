import getRowIndexByKey from '../getRowIndexByKey';

describe('getRowIndexByKey', () => {
    it('should return undefined when any argument is passed', () => {
        expect(getRowIndexByKey()).toBeUndefined();
    });
    it('should return undefined when the key passed does not exists in indexes', () => {
        const keys = ['', 'abcd', 123, undefined, null, [], {}, () => {}];
        const indexes = {};
        keys.forEach(key => {
            expect(getRowIndexByKey(indexes, key)).toBeUndefined();
        });
    });
    it('should return the right index', () => {
        const indexes = {
            name: { rowIndex: 1 },
        };
        const key = 'name';
        expect(getRowIndexByKey(indexes, key)).toBe(1);
    });
});
