import getDataToImport from '../getDataToImport';
import getImportParams from './getImportParams';

describe('getDataToImport', () => {
    it('should return right data', () => {
        const params = getImportParams();
        const dataToImport = getDataToImport(params);
        const expectedData = {
            collection: 'users',
            mergeByKey: '',
            data: [
                { name: 'John Doe', email: 'jonh@gmail.com' },
                { name: 'Jane Doe', email: 'jane@gmail.com' },
                { name: 'Fred Flinstone', email: 'fred@gmail.com' },
            ],
        };
        expect(dataToImport).toEqual(expect.objectContaining(expectedData));
    });
    it('should return mergeByKey empty when matchField param sent is default', () => {
        const params = getImportParams();
        const dataToImport = getDataToImport(params);
        expect(dataToImport.mergeByKey).toBe('');
    });
    it('should match matchField param with mergeByKey return value when matchField is set and is not "default"', () => {
        const params = getImportParams();
        params.matchField = 'email';
        const dataToImport = getDataToImport(params);
        expect(dataToImport.mergeByKey).toBe('email');
    });
});
