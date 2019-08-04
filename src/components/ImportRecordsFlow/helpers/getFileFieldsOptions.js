export default function getFileFieldsOptions(fields) {
    return [
        {
            label: 'Select database field to assign',
            value: 'default',
            disabled: true,
        },
        ...fields.map(field => ({
            label: field,
            value: field,
        })),
    ];
}
