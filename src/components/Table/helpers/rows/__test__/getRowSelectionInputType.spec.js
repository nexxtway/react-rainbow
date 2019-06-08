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
    it('should return "checkbox" when maxRowSelection passed is 1 and rows length is 1', () => {
        const maxRowSelection = 1;
        const rowsLength = 1;
        expect(getRowSelectionInputType(maxRowSelection, rowsLength)).toBe('checkbox');
    });
    it('should return "checkbox" when maxRowSelection passed is greater than 1 and rows length is 1', () => {
        const maxRowSelection = 3;
        const rowsLength = 1;
        expect(getRowSelectionInputType(maxRowSelection, rowsLength)).toBe('checkbox');
    });
});
