export default function getFileFieldsOptions(fields) {
    const defaultOption = {
        label: 'Select database field to assign',
        value: 'default',
        disabled: true,
    };
    const hasFields = Array.isArray(fields) && fields.length;

    if (hasFields) {
        const options = fields.map(field => ({
            label: field,
            value: field,
        }));
        return [defaultOption, ...options];
    }
    return [defaultOption];
}
