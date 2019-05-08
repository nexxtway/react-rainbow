import getRowSelectionInputType from '../getRowSelectionInputType';

describe('getRowSelectionInputType', () => {
    it('should return "radio" when maxRowSelection passed is 1', () => {
        const maxRowSelection = 1;
        expect(getRowSelectionInputType(maxRowSelection)).toBe('radio');
    });
    it('should return "checkbox" when maxRowSelection passed is other than 1', () => {
        const values = [0, 2, 3, '0', 'abc', [], {}, undefined, null, () => {}];
        values.forEach(value => {
            expect(getRowSelectionInputType(value)).toBe('checkbox');
        });
    });
});
