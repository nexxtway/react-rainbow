export default function getSchemaFieldOptions(schemaFields) {
    const defaultOption = {
        label: 'Select the Field do you want match',
        value: 'default',
        disabled: true,
    };
    const hasFields = Array.isArray(schemaFields) && schemaFields.length;

    if (hasFields) {
        const options = schemaFields.map(attr => ({
            label: attr,
            value: attr,
        }));
        return [defaultOption, ...options];
    }
    return [defaultOption];
}
