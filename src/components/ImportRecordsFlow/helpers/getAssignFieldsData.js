export default function getAssignFieldsData(params) {
    const { fieldsMap, attributes, matchField } = params;
    return Object.keys(attributes).map(field => ({
        required: attributes[field].required || field === matchField,
        fileField: fieldsMap[field],
        databaseField: field,
    }));
}
