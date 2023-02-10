export default function getValidatedData({ validateRecordFn, dataToValidate }) {
    return dataToValidate.reduce(
        (acc, record) => {
            const errors = validateRecordFn(record);
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
