import getUpdatedRowsWhenSelectAll from '../getUpdatedRowsWhenSelectAll';

const rows = [
    { key: 'row-1', isSelected: false, isDisabled: false },
    { key: 'row-2', isSelected: true, isDisabled: false },
    { key: 'row-3', isSelected: false, isDisabled: false },
];

describe('getUpdatedRowsWhenSelectAll', () => {
    it('should an empty array when any params are passed', () => {
        expect(getUpdatedRowsWhenSelectAll()).toEqual([]);
    });
    it('should the right rows when only rows param is passed', () => {
        expect(getUpdatedRowsWhenSelectAll({ rows })).toEqual([
            { key: 'row-1', isSelected: false, isDisabled: true },
            { key: 'row-2', isSelected: false, isDisabled: true },
            { key: 'row-3', isSelected: false, isDisabled: true },
        ]);
    });
    it('should the right rows when maxRowSelection is 1', () => {
        const selectedRowsKeys = {};
        expect(
            getUpdatedRowsWhenSelectAll({
                rows,
                maxRowSelection: 1,
                selectedRowsKeys,
            }),
        ).toEqual([
            { key: 'row-1', isSelected: true, isDisabled: false },
            { key: 'row-2', isSelected: false, isDisabled: true },
            { key: 'row-3', isSelected: false, isDisabled: true },
        ]);
        expect(selectedRowsKeys).toEqual({
            'row-1': true,
        });
    });
    it('should the right rows when maxRowSelection is 2', () => {
        const selectedRowsKeys = {};
        expect(
            getUpdatedRowsWhenSelectAll({
                rows,
                maxRowSelection: 2,
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
    it('should the right rows when maxRowSelection is 3', () => {
        const selectedRowsKeys = {};
        expect(
            getUpdatedRowsWhenSelectAll({
                rows,
                maxRowSelection: 3,
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
