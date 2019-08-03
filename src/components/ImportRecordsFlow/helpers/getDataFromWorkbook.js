import XLSX from 'xlsx';

export default function getArrayDataFromWorkbook(workbook) {
    try {
        return XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return [];
    }
}
