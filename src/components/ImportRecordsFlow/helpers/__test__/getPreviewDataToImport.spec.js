import getPreviewDataToImport from '../getPreviewDataToImport';
import getImportParams from './getImportParams';

describe('getPreviewDataToImport', () => {
    it('should return right data', () => {
        const params = getImportParams();
        const previewData = getPreviewDataToImport(
            params.data,
            params.fieldsMap,
            params.schema.attributes,
        );
        const expectedPreviewData = [
            { name: 'John Doe', email: 'jonh@gmail.com' },
            { name: 'Jane Doe', email: 'jane@gmail.com' },
            { name: 'Fred Flinstone', email: 'fred@gmail.com' },
        ];
        expect(previewData).toEqual(expectedPreviewData);
    });
});
