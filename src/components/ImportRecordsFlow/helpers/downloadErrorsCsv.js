export default function downloadErrorsCSV({ errors }) {
    const csvContent = `data:text/csv;charset=utf-8,${errors.map(e => {
        const { error } = e;
        error.toString = () => JSON.stringify(error);
        return Object.values(e).join(',');
    })}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'errors.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
