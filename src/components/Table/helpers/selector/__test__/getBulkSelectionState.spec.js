import getBulkSelectionState from '../getBulkSelectionState';

const selectedRowsKeys = {
    qwerty1234: true,
    asdfgh1234: true,
    zxcvbn1234: true,
};

describe('getBulkSelectionState', () => {
    it('should return "none" when any params are passed', () => {
        expect(getBulkSelectionState()).toBe('none');
    });
    it('should return "none" when selectedRowsKeys length is 0', () => {
        expect(
            getBulkSelectionState({
                maxRowSelection: 3,
                selectedRowsKeys: {},
            }),
        ).toBe('none');
    });
    it('should return "all" when maxRowSelection match with the selectedRowsKeys length', () => {
        expect(
            getBulkSelectionState({
                maxRowSelection: 3,
                selectedRowsKeys,
            }),
        ).toBe('all');
    });
    it('should return "some" when selectedRowsKeys length is other than 0 and does not match with maxRowSelection', () => {
        const values = [0, 1, 2, 4, 5];
        values.forEach(value => {
            expect(
                getBulkSelectionState({
                    maxRowSelection: value,
                    selectedRowsKeys,
                }),
            ).toBe('some');
        });
    });
});
