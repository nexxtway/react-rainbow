const getErrors = errors => {
    return Object.entries(errors).reduce((acc, [key, value]) => `${acc} ${key}: ${value},`, '');
};

export default function downloadErrorsCSV({ invalidRecords }) {
    const headers = Object.keys(invalidRecords[0]).concat('\n');
    const csvRows = invalidRecords.map(record => {
        const { errors } = record;
        const errorsString = getErrors(errors);
        const recordWithErrors = {
            ...record,
            errors: errorsString,
        };
        return Object.values(recordWithErrors)
            .join(',')
            .concat('\n');
    });
    const csvContent = `data:text/csv;charset=utf-8,${headers}${csvRows.join('')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'invalid-records.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
