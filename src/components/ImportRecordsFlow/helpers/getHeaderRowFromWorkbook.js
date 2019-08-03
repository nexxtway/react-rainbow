import XLSX from 'xlsx';

export default function getHeaderRowFromWorkbook(workbook) {
    try {
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const headers = [];
        const range = XLSX.utils.decode_range(sheet['!ref']);
        let C;
        /* start in the first row */
        const R = range.s.r;
        /* walk every column in the range */
        // eslint-disable-next-line no-plusplus
        for (C = range.s.c; C <= range.e.c; ++C) {
            /* find the cell in the first row */
            const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];

            let hdr = `UNKNOWN ${C}`; // <-- replace with your desired default
            if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);

            headers.push(hdr);
        }
        return headers;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return [];
    }
}
