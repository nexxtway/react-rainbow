export default function getDataToImport(data, fieldsMap, attributes) {
    const fields = Object.keys(fieldsMap);
    return data.map(item => ({
        ...fields.reduce((acc, field) => {
            const keys = fieldsMap[field].split(',');
            const value = keys.reduce(
                (accumulator, key) => `${accumulator} ${item[key] || ''}`.trim(),
                '',
            );
            return {
                ...acc,
                [field]: value || attributes[field].defaultTo || '',
            };
        }, {}),
    }));
}
