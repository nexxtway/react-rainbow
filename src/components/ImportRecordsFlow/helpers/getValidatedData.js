export default function getValidatedData({ validateRecordFn, dataToValidate, data }) {
    const validatedData = [];
    const errors = [];

    dataToValidate.forEach((record, index) => {
        const error = validateRecordFn(record);
        if (Object.keys(error).length > 0) {
            errors.push({
                ...data[index],
                error,
            });
        } else {
            validatedData.push(data[index]);
        }
    });
    return { validatedData, errors };
}
