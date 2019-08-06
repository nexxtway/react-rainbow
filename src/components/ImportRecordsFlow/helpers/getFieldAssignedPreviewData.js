export default function getFieldAssignedPreviewData(data, field, fileFields, attributes) {
    return data.map(item => {
        const value = fileFields.reduce(
            (acc, fileField) => `${acc} ${item[fileField] || ''}`.trim(),
            '',
        );
        return {
            [field]: value || attributes[field].defaultTo || '',
        };
    });
}
