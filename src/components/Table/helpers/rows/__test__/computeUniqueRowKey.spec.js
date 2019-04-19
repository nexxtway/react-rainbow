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
        keyFields.forEach((keyField) => {
            expect(computeUniqueRowKey(row, keyField)).toBe(row[keyField]);
        });
    });
});
