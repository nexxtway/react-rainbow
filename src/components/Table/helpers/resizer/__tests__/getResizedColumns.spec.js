import getResizedColumns from '../getResizedColumns';

describe('getResizedColumns', () => {
    it('should return the same columns passed', () => {
        const columns = [
            { label: 'Name', field: 'name' },
            { label: 'Email', field: 'email' },
        ];
        expect(getResizedColumns({ columns })).toEqual([
            { label: 'Name', field: 'name' },
            { label: 'Email', field: 'email' },
        ]);
    });
    it('should return the right columns', () => {
        const columns = [
            { label: 'Name', field: 'name', computedWidth: 50 },
            { label: 'Email', field: 'email', computedWidth: 50 },
        ];
        expect(getResizedColumns({ columns, colIndex: 1, widthDelta: 30 })).toEqual([
            { label: 'Name', field: 'name', computedWidth: 50 },
            { label: 'Email', field: 'email', isResized: true, computedWidth: 80 },
        ]);
    });
});
