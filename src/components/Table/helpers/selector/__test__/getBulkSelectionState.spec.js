import getBulkSelectionState from '../getBulkSelectionState';

const selectedRowsKeys = {
    qwerty1234: true,
    asdfgh1234: true,
    zxcvbn1234: true,
};

describe('getBulkSelectionState', () => {
    it('should return false when any params are passed', () => {
        expect(getBulkSelectionState()).toBe(false);
    });
    it('should return false when selectedRowsKeys length is 0', () => {
        expect(
            getBulkSelectionState({
                maxRowSelection: 3,
                selectedRowsKeys: {},
            }),
        ).toBe(false);
    });
    it('should return true when maxRowSelection match with the selectedRowsKeys length', () => {
        expect(
            getBulkSelectionState({
                maxRowSelection: 3,
                selectedRowsKeys,
            }),
        ).toBe(true);
    });
    it('should return "indeterminate" when selectedRowsKeys length is other than 0 and does not match with maxRowSelection', () => {
        const values = [0, 1, 2, 4, 5];
        values.forEach(value => {
            expect(
                getBulkSelectionState({
                    maxRowSelection: value,
                    selectedRowsKeys,
                }),
            ).toBe('indeterminate');
        });
    });
});
