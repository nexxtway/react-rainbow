function getDateValue(value) {
    const date = new Date(value);
    const isValidDate = !isNaN(date.getTime());
    return isValidDate ? value : '';
}

function getTypeValue(value, dataType) {
    switch (dataType.name) {
        case 'String':
            return value;

        case 'Number':
            return !isNaN(Number(value)) ? value : '';

        case 'Boolean':
            return value ? 'true' : 'false';

        case 'Date':
            return getDateValue(value);

        default:
            return value || '';
    }
}

function getNormalizedFieldValue(value, attributeDef) {
    if (typeof attributeDef === 'function') {
        return getTypeValue(value, attributeDef);
    }
    if (typeof attributeDef.type === 'function') {
        return getTypeValue(value, attributeDef.type);
    }
    return value || '';
}

export default function getPreviewDataToImport(data, fieldsMap, attributes) {
    return data.map(item => ({
        ...Object.keys(fieldsMap).reduce((acc, field) => {
            const keys = fieldsMap[field].split(',');
            const value =
                keys.reduce((accumulator, key) => `${accumulator} ${item[key] || ''}`.trim(), '') ||
                attributes[field].defaultTo;
            return {
                ...acc,
                [field]: getNormalizedFieldValue(value, attributes[field]),
            };
        }, {}),
    }));
}
