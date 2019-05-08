import getRows from '../getRows';

jest.mock('../getRowSelectionInputType', () => jest.fn(() => 'checkbox'));
jest.mock('../computeUniqueRowKey', () => jest.fn(() => 'row-1'));
jest.mock('../../selector/isSelectedRow', () => jest.fn(() => true));
jest.mock('../../selector/isDisabledRow', () => jest.fn(() => false));

describe('getRows', () => {
    it('should return an empty array when any params are passed', () => {
        expect(getRows()).toEqual([]);
    });
    it('should return the right rows', () => {
        const data = [{ name: 'John' }, { name: 'Pepe' }];
        expect(
            getRows({
                rows: data,
                maxRowSelection: 5,
                keyField: 'id',
                selectedRowsKeys: {},
            }),
        ).toEqual([
            {
                key: 'row-1',
                inputType: 'checkbox',
                isSelected: true,
                isDisabled: false,
            },
            {
                key: 'row-1',
                inputType: 'checkbox',
                isSelected: true,
                isDisabled: false,
            },
        ]);
    });
});
