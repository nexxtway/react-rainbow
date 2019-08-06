import ImportRecordsFlow from '../';

function getDateValue(value) {
    const date = new Date(value);
    const isValidDate = !isNaN(date.getTime());
    return isValidDate ? date : '';
}

function getTypeValue(value, dataType) {
    switch (dataType.name) {
        case 'String':
            return value;

        case 'Number':
            return !isNaN(Number(value)) ? Number(value) : '';

        case 'Boolean':
            return !!value;

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

export default function getDataToImport(params) {
    const actionTypeMap = {
        'add-records': ImportRecordsFlow.ADD_RECORDS,
        'merge-records': ImportRecordsFlow.MERGE_RECORDS,
    };
    const { data, fieldsMap, schema, actionOption, matchField } = params;

    return {
        collection: schema.collection,
        actionType: actionTypeMap[actionOption],
        mergeByKey: matchField === 'default' ? '' : matchField,
        data: data.map(item => ({
            ...Object.keys(fieldsMap).reduce((acc, field) => {
                const keys = fieldsMap[field].split(',');
                const schemaField = schema.attributes[field];
                const value =
                    keys.reduce(
                        (accumulator, key) => `${accumulator} ${item[key] || ''}`.trim(),
                        '',
                    ) || schemaField.defaultTo;
                return {
                    ...acc,
                    [field]: getNormalizedFieldValue(value, schemaField),
                };
            }, {}),
        })),
    };
}
