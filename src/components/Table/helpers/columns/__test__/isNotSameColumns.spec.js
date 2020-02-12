import isNotSameColumns from '../isNotSameColumns';

describe('isNotSameColumns', () => {
    it('should return true when prevColumns and currentColumns does not have the same length ', () => {
        const prevColumns = [{}, {}];
        const currentColumns = [{}, {}, {}];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return false when prevColumns and currentColumns are the same', () => {
        const prevColumns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(false);
    });
    it('should return true when column field property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
        const currentColumns = [
            { field: 'phone', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column sortable property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name', sortable: true },
            { field: 'email', header: 'Email', sortable: true },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name', sortable: false },
            { field: 'email', header: 'Email', sortable: true },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column header property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
        ];
        const currentColumns = [
            { field: 'name', header: 'Fullname' },
            { field: 'email', header: 'Email' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column component property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name', component: {} },
            { field: 'email', header: 'Email', component: {} },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name', component: { data: 'ok' } },
            { field: 'email', header: 'Email', component: {} },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column defaultWith property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name', defaultWidth: 100 },
            { field: 'email', header: 'Email', defaultWidth: 100 },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name', defaultWidth: 80 },
            { field: 'email', header: 'Email', defaultWidth: 100 },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column width property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name', width: 100 },
            { field: 'email', header: 'Email', width: 100 },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name', width: 80 },
            { field: 'email', header: 'Email', width: 100 },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column type property changed', () => {
        const prevColumns = [
            { field: 'name', header: 'Name', type: 'text' },
            { field: 'email', header: 'Email', type: 'text' },
        ];
        const currentColumns = [
            { field: 'name', header: 'Name', type: 'action' },
            { field: 'email', header: 'Email', type: 'text' },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
    it('should return true when column children property changed', () => {
        const prevColumns = [
            { header: 'Action', type: 'action', children: [{ onClick: () => 20 + 5 }] },
        ];
        const currentColumns = [
            { header: 'Action', type: 'action', children: [{ onClick: () => 20 + 4 }] },
        ];
        expect(isNotSameColumns(prevColumns, currentColumns)).toBe(true);
    });
});
