import computeUniqueRowKey from '../computeUniqueRowKey';

const row = {
    name: 'Pepe',
    id: 'qwerty1234',
};

describe('computeUniqueRowKey', () => {
    it('should return the right key when keyField is not passed', () => {
        expect(computeUniqueRowKey(row)).toBe('row-1');
    });
    it('should return the right key when a wrong keyField is passed', () => {
        const keyField = 'email';
        expect(computeUniqueRowKey(row, keyField)).toBe('row-2');
    });
    it('should return the right key when a valid keyField is passed', () => {
        const keyFields = ['name', 'id'];
        keyFields.forEach(keyField => {
            expect(computeUniqueRowKey(row, keyField)).toBe(row[keyField]);
        });
    });
    it('should return the right key when keyField use dot notation', () => {
        const rowData = {
            type: 'regular',
            data: {
                name: 'Pepe',
                id: 'qwerty1234',
            },
        };
        const keyField = 'data.id';
        expect(computeUniqueRowKey(rowData, keyField)).toBe('qwerty1234');
    });
    it('should return the right key when data is nested and keyField does not use dot notation', () => {
        const rowData = {
            type: 'regular',
            data: {
                name: 'Pepe',
                id: 'qwerty1234',
            },
        };
        const keyField = 'data';
        expect(computeUniqueRowKey(rowData, keyField)).toBe('row-3');
    });
});
