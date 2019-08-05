export default function getFieldAssignedPreviewData(data, field, fileFields) {
    return data.map(item => ({
        [field]: fileFields.reduce((acc, fileField) => `${acc} ${item[fileField]}`.trim(), ''),
    }));
}
