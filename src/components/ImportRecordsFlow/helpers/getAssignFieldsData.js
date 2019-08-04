export default function getAssignFieldsData(schemaFields, fieldsMap) {
    return schemaFields.map(field => ({
        fileField: fieldsMap[field],
        databaseField: field,
    }));
}
