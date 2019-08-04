export default function getSchemaFieldOptions(schemaFields) {
    return [
        {
            label: 'Select the Field do you want match',
            value: 'default',
            disabled: true,
        },
        ...schemaFields.map(attr => ({
            label: attr,
            value: attr,
        })),
    ];
}
