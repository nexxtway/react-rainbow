import getUpdatedRowsWhenDeselect from '../getUpdatedRowsWhenDeselect';

const rows = [
    { key: 'row-1', isSelected: true, isDisabled: false },
    { key: 'row-2', isSelected: true, isDisabled: false },
    { key: 'row-3', isDisabled: false },
];
const indexes = {
    'row-1': { rowIndex: 0 },
    'row-2': { rowIndex: 1 },
    'row-3': { rowIndex: 2 },
};

describe('getUpdatedRowsWhenDeselect', () => {
    it('should return an empty array when any params are passed', () => {
        expect(getUpdatedRowsWhenDeselect()).toEqual([]);
    });
    it('should return the same rows passed when rows are the only param passed', () => {
        expect(getUpdatedRowsWhenDeselect({ rows })).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: true, isDisabled: false },
            { key: 'row-3', isDisabled: false },
        ]);
    });
    it('should return the right rows when maxRowSelection is 0', () => {
        const selectedRowsKeys = {};
        expect(
            getUpdatedRowsWhenDeselect({
                maxRowSelection: 0,
                rows,
                indexes,
                isMultiple: false,
                rowKeyValue: 'row-2',
                lastSelectedRowKey: undefined,
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: false, isDisabled: false },
            { key: 'row-3', isDisabled: false },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-2': false,
        });
    });
    it('should return the right rows when maxRowSelection is greater than 0', () => {
        const values = [1, 2, 3, 4, 5];
        values.forEach(value => {
            const selectedRowsKeys = {};
            expect(
                getUpdatedRowsWhenDeselect({
                    maxRowSelection: value,
                    rows,
                    indexes,
                    isMultiple: false,
                    rowKeyValue: 'row-2',
                    lastSelectedRowKey: undefined,
                    selectedRowsKeys,
                }),
            ).toEqual([
                { key: 'row-1', isSelected: true, isDisabled: false },
                { key: 'row-2', isSelected: false, isDisabled: false },
                { key: 'row-3', isDisabled: false },
            ]);
            expect(selectedRowsKeys).toEqual({
                'row-2': false,
            });
        });
    });
    it('should return the right rows when there are two row selected and maxRowSelection 4', () => {
        const selectedRowsKeys = {
            'row-1': true,
            'row-2': true,
            'row-3': false,
        };
        expect(
            getUpdatedRowsWhenDeselect({
                maxRowSelection: 4,
                rows,
                indexes,
                isMultiple: true,
                rowKeyValue: 'row-2',
                lastSelectedRowKey: undefined,
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: false, isDisabled: false },
            { key: 'row-3', isDisabled: false },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': true,
            'row-2': false,
            'row-3': false,
        });
    });
    it('should return the right rows when is multiple and the last row selected is "row-1"', () => {
        const selectedRowsKeys = {
            'row-1': true,
            'row-2': true,
            'row-3': true,
        };
        expect(
            getUpdatedRowsWhenDeselect({
                maxRowSelection: 4,
                rows: [
                    { key: 'row-1', isSelected: true, isDisabled: false },
                    { key: 'row-2', isSelected: true, isDisabled: false },
                    { key: 'row-3', isSelected: true, isDisabled: false },
                ],
                indexes,
                isMultiple: true,
                rowKeyValue: 'row-3',
                lastSelectedRowKey: 'row-1',
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: false, isDisabled: false },
            { key: 'row-2', isSelected: false, isDisabled: false },
            { key: 'row-3', isSelected: false, isDisabled: false },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': false,
            'row-2': false,
            'row-3': false,
        });
    });
});
