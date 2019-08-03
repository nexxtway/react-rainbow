export default function getFileFieldsOptions(columns) {
    return [
        {
            label: 'Select database field to assign',
            value: 'default',
            disabled: true,
        },
        ...columns.map(name => ({
            label: name,
            value: name,
        })),
    ];
}
