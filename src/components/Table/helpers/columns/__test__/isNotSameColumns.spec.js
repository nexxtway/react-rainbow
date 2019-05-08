import isNotSameColumns from '../isNotSameColumns';

describe('isNotSameColumns', () => {
    it('should return true when prevColumns and currentColumns does not have the same length ', () => {
        const prevColumns = [{}, {}];
        const currentColumns = [{}, {}, {}];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return false when prevColumns and currentColumns are the same', () => {
        const prevColumns = [{ field: 'name', label: 'Name' }, { field: 'email', label: 'Email' }];
        const currentColumns = [
            { field: 'name', label: 'Name' },
            { field: 'email', label: 'Email' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(false);
    });
    it('should return true when prevColumns and currentColumns are the different', () => {
        const prevColumns = [{ field: 'name', label: 'Name' }, { field: 'email', label: 'Email' }];
        const currentColumns = [
            { field: 'phone', label: 'Name' },
            { field: 'email', label: 'Email' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
});
