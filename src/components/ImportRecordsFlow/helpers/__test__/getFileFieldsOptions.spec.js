import getFileFieldsOptions from '../getFileFieldsOptions';

describe('getFileFieldsOptions', () => {
    it('should return default option when no options are passed', () => {
        const options = getFileFieldsOptions();
        expect(options.length).toBe(1);
        expect(options[0].value).toBe('default');
    });
    it('should return default option when empty options are passed', () => {
        const options = getFileFieldsOptions([]);
        expect(options.length).toBe(1);
        expect(options[0].value).toBe('default');
    });
    it('should return default option when pass falsy values', () => {
        const values = [undefined, null, '', 0, true];
        values.forEach(value => {
            const options = getFileFieldsOptions(value);
            expect(options.length).toBe(1);
            expect(options[0].value).toBe('default');
        });
    });
    it('should return 3 options when pass an array list of 2 fields', () => {
        const optionsList = ['First_Name', 'Last_Name'];
        const options = getFileFieldsOptions(optionsList);
        expect(options.length).toBe(3);
        expect(options[2].value).toBe('Last_Name');
    });
});
