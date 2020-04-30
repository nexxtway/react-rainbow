import valuePropValidation from '../valuePropValidation';

describe('valuePropValidation', () => {
    it('should return Error instance when value prop sent for validation is not a week valid day', () => {
        const valueToTest = 'wrong-day';
        const propTest = {
            nameKey: valueToTest,
        };
        const propKey = 'nameKey';
        const componentName = 'TestComponent';
        const location = '';
        const propFullName = 'NameKey';
        const response = valuePropValidation(
            propTest,
            propKey,
            componentName,
            location,
            propFullName,
        );
        expect(response).toBeInstanceOf(Error);
    });
    it('should return null when value prop sent for validation is a valid week day', () => {
        const valueToTest = 'monday';
        const propTest = {
            nameKey: valueToTest,
        };
        const propKey = 'nameKey';
        const componentName = 'TestComponent';
        const location = '';
        const propFullName = 'NameKey';
        const response = valuePropValidation(
            propTest,
            propKey,
            componentName,
            location,
            propFullName,
        );
        expect(response).toBe(null);
    });
});
