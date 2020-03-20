import getDataToImport from '../getDataToImport';
import getImportParams from './getImportParams';

describe('getDataToImport', () => {
    it('should return right data', () => {
        const params = getImportParams();
        const dataToImport = getDataToImport(params);
        expect(dataToImport.collection).toBe('users');
        expect(params.data.length).toBe(dataToImport.data.length);
        expect(dataToImport.data[0].name).toBe('John Doe');
        expect(dataToImport.data[2].email).toBe('fred@gmail.com');
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
