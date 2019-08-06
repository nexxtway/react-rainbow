export default function isStepThreeNextButtonDisabled(params) {
    const { fieldsMap, attributes, matchField } = params;
    const fieldsArray = Object.keys(attributes);
    return (
        fieldsArray.some(
            field => (attributes[field].required || field === matchField) && !fieldsMap[field],
        ) || fieldsArray.every(field => !fieldsMap[field])
    );
}
