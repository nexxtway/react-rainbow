import getAssignFieldsData from '../getAssignFieldsData';

describe('getAssignFieldsData', () => {
    it('should return empty assignFields when no attributes are passed', () => {
        const assignFields = getAssignFieldsData({
            fieldsMap: undefined,
            attributes: [],
            matchField: false,
        });
        expect(assignFields.length).toBe(0);
    });
    it('should return 3 assignFields when 3 attributes are passed', () => {
        const assignFields = getAssignFieldsData({
            fieldsMap: {},
            attributes: {
                name: { required: true },
                street: {},
                age: {},
            },
            matchField: '',
        });
        const expectedAssignFields = [
            { required: true, databaseField: 'name' },
            { required: false, databaseField: 'street' },
            { required: false, databaseField: 'age' },
        ];
        expect(assignFields).toEqual(expectedAssignFields);
    });
    it('should return required attribute as true when the required attribute param is set as true', () => {
        const assignFields = getAssignFieldsData({
            fieldsMap: {},
            attributes: {
                name: { required: true },
            },
            matchField: '',
        });
        expect(assignFields[0].required).toBe(true);
    });
    it('should return required attribute as false when the required attribute param is not set', () => {
        const assignFields = getAssignFieldsData({
            fieldsMap: {},
            attributes: {
                name: {},
            },
            matchField: '',
        });
        expect(assignFields[0].required).toBe(false);
    });
    it('should return required attribute as true when matchField value matches an attribute', () => {
        const assignFields = getAssignFieldsData({
            fieldsMap: {},
            attributes: {
                street: {},
            },
            matchField: 'street',
        });
        expect(assignFields[0].required).toBe(true);
    });
});
