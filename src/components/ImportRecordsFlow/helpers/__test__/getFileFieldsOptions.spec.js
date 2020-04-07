import getFileFieldsOptions from '../getFileFieldsOptions';

const defaultOption = {
    label: 'Select database field to assign',
    value: 'default',
    disabled: true,
};

describe('getFileFieldsOptions', () => {
    it('should return default option when no options are passed', () => {
        const options = getFileFieldsOptions();
        const expectedOptions = [defaultOption];
        expect(options).toEqual(expectedOptions);
    });
    it('should return default option when empty options are passed', () => {
        const options = getFileFieldsOptions([]);
        const expectedOptions = [defaultOption];
        expect(options).toEqual(expectedOptions);
    });
    it('should return default option when pass falsy values', () => {
        const values = [undefined, null, '', 0, true];
        const expectedOptions = [defaultOption];
        values.forEach(value => {
            const options = getFileFieldsOptions(value);
            expect(options).toEqual(expectedOptions);
        });
    });
    it('should return 3 options when pass an array list of 2 fields', () => {
        const optionsList = ['First_Name', 'Last_Name'];
        const options = getFileFieldsOptions(optionsList);
        const expectedOptions = [
            defaultOption,
            { label: 'First_Name', value: 'First_Name' },
            { label: 'Last_Name', value: 'Last_Name' },
        ];
        expect(options).toEqual(expectedOptions);
    });
});
