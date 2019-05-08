import getUpdatedRowsWhenSelect from '../getUpdatedRowsWhenSelect';

const rows = [
    { key: 'row-1', isSelected: true, isDisabled: false },
    { key: 'row-2', isSelected: false, isDisabled: false },
    { key: 'row-3', isSelected: false, isDisabled: false },
];
const indexes = {
    'row-1': { rowIndex: 0 },
    'row-2': { rowIndex: 1 },
    'row-3': { rowIndex: 2 },
};

describe('getUpdatedRowsWhenSelect', () => {
    it('should return an empty array when any params are passed', () => {
        expect(getUpdatedRowsWhenSelect()).toEqual([]);
    });
    it('should return the same rows passed when rows are the only param passed', () => {
        expect(getUpdatedRowsWhenSelect({ rows })).toEqual([
            { key: 'row-1', isSelected: false, isDisabled: false },
            { key: 'row-2', isSelected: false, isDisabled: false },
            { key: 'row-3', isSelected: false, isDisabled: false },
        ]);
    });
    it('should return the right rows when maxRowSelection is less than 1', () => {
        const values = [0, 1];
        values.forEach(value => {
            const selectedRowsKeys = {
                'row-1': true,
            };
            expect(
                getUpdatedRowsWhenSelect({
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
                { key: 'row-3', isSelected: false, isDisabled: false },
            ]);
            expect(selectedRowsKeys).toEqual({
                'row-1': true,
            });
        });
    });
    it('should return the right rows when maxRowSelection is 2', () => {
        const selectedRowsKeys = {
            'row-1': true,
        };
        expect(
            getUpdatedRowsWhenSelect({
                maxRowSelection: 2,
                rows,
                indexes,
                isMultiple: false,
                rowKeyValue: 'row-2',
                lastSelectedRowKey: undefined,
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: true, isDisabled: false },
            { key: 'row-3', isSelected: false, isDisabled: true },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': true,
            'row-2': true,
        });
    });
    it('should return the right rows when maxRowSelection is 3', () => {
        const selectedRowsKeys = {
            'row-1': true,
        };
        expect(
            getUpdatedRowsWhenSelect({
                maxRowSelection: 3,
                rows,
                indexes,
                isMultiple: false,
                rowKeyValue: 'row-2',
                lastSelectedRowKey: undefined,
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: true, isDisabled: false },
            { key: 'row-3', isSelected: false, isDisabled: false },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': true,
            'row-2': true,
        });
    });
    it('should return the right rows when is multiple and the last row selected is "row-1"', () => {
        const selectedRowsKeys = {
            'row-1': false,
            'row-2': false,
            'row-3': false,
        };
        expect(
            getUpdatedRowsWhenSelect({
                maxRowSelection: 3,
                rows: [
                    { key: 'row-1', isSelected: false, isDisabled: false },
                    { key: 'row-2', isSelected: false, isDisabled: false },
                    { key: 'row-3', isSelected: false, isDisabled: false },
                ],
                indexes,
                isMultiple: true,
                rowKeyValue: 'row-3',
                lastSelectedRowKey: 'row-1',
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: true, isDisabled: false },
            { key: 'row-3', isSelected: true, isDisabled: false },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': true,
            'row-2': true,
            'row-3': true,
        });
    });
});
