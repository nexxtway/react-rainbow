import XLSX from 'xlsx';
import getArrayDataFromWorkBook from '../getDataFromWorkbook';
import getWorkbookParams from './getWorkbookParams';

XLSX.utils.sheet_to_row_object_array = jest.fn();

describe('getArrayDataFromWorkBook', () => {
    it('should call sheet_to_row_object_array with the right arguments', () => {
        const workbook = getWorkbookParams();
        getArrayDataFromWorkBook(workbook);
        expect(XLSX.utils.sheet_to_row_object_array).toHaveBeenCalledWith(
            workbook.Sheets[workbook.SheetNames[0]],
        );
    });
});
