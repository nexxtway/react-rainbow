import areDifferentColumns from '../are-different-columns';

const columns = [
    {
        field: 'name',
        component: undefined,
    },
    {
        field: 'email',
        component: undefined,
    },
];

const newColumns = [
    {
        field: 'name',
        component: undefined,
    },
    {
        field: 'email',
        component: undefined,
    },
];

describe('areDifferentColumns', () => {
    it('should return true if the columns arrays are equal', () => {
        expect(areDifferentColumns(columns, columns)).toBe(false);
    });
    it('should return false if the columns arrays are not equal', () => {
        expect(areDifferentColumns(columns, newColumns)).toBe(true);
    });
});
