import getSchemaFieldOptions from '../getSchemaFieldOptions';

const defaultOption = {
    label: 'Select the Field do you want match',
    value: 'default',
    disabled: true,
};

describe('getSchemaFieldOptions', () => {
    it('should return default option when no options are passed', () => {
        const options = getSchemaFieldOptions();
        const expectedOptions = [defaultOption];
        expect(options).toEqual(expectedOptions);
    });
    it('should return default option when empty options are passed', () => {
        const options = getSchemaFieldOptions([]);
        const expectedOptions = [defaultOption];
        expect(options).toEqual(expectedOptions);
    });
    it('should return default option when pass falsy values', () => {
        const values = [undefined, null, '', 0, true];
        const expectedOptions = [defaultOption];
        values.forEach(value => {
            const options = getSchemaFieldOptions(value);
            expect(options).toEqual(expectedOptions);
        });
    });
    it('should return 3 options when pass an array list of 2 fields', () => {
        const optionsList = ['First_Name', 'Last_Name'];
        const options = getSchemaFieldOptions(optionsList);
        const expectedOptions = [
            defaultOption,
            { label: 'First_Name', value: 'First_Name' },
            { label: 'Last_Name', value: 'Last_Name' },
        ];
        expect(options).toEqual(expectedOptions);
    });
});
