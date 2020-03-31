import isStepThreeNextButtonDisabled from '../isStepThreeNextButtonDisabled';

describe('isStepThreeNextButtonDisabled', () => {
    it('should return true if the fields sent are not mapped in fieldsMap param', () => {
        const isButtonDisabled = isStepThreeNextButtonDisabled({
            fieldsMap: {},
            attributes: {
                name: {},
                email: {},
                age: {},
            },
            matchField: 'default',
        });
        expect(isButtonDisabled).toBe(true);
    });
    it('should return true if all required fields are not mapped in fieldsMap param', () => {
        const isButtonDisabled = isStepThreeNextButtonDisabled({
            fieldsMap: { name: 'First_Name,Last_Name', email: 'Email' },
            attributes: {
                name: { required: true },
                email: { required: true },
                age: { required: true },
            },
            matchField: 'default',
        });
        expect(isButtonDisabled).toBe(true);
    });
    it('should return true if no required fields are set, matchField is set to an attribute and the field is not mapped in fieldsMap param', () => {
        const isButtonDisabled = isStepThreeNextButtonDisabled({
            fieldsMap: {},
            attributes: {
                name: {},
                email: {},
                age: {},
            },
            matchField: 'name',
        });
        expect(isButtonDisabled).toBe(true);
    });
    it('should return false if no required fields are set but at least one of the fields is mapped in fieldsMap param', () => {
        const isButtonDisabled = isStepThreeNextButtonDisabled({
            fieldsMap: { email: 'Email' },
            attributes: {
                name: {},
                email: {},
                age: {},
            },
            matchField: 'default',
        });
        expect(isButtonDisabled).toBe(false);
    });
    it('should return false if required attribute field is mapped in fieldsMap param', () => {
        const isButtonDisabled = isStepThreeNextButtonDisabled({
            fieldsMap: { name: 'Name' },
            attributes: {
                name: { required: true },
            },
            matchField: 'default',
        });
        expect(isButtonDisabled).toBe(false);
    });
});
