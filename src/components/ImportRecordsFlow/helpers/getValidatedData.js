export default function getValidatedData({ validateRecordCallback, dataToValidate }) {
    return dataToValidate.reduce(
        (acc, record) => {
            const errors = validateRecordCallback(record);
            if (Object.keys(errors).length > 0) {
                const recordWithErrors = {
                    ...record,
                    errors,
                };
                acc.invalidRecords.push(recordWithErrors);
            } else {
                acc.validRecords.push(record);
            }
            return acc;
        },
        { validRecords: [], invalidRecords: [] },
    );
}
