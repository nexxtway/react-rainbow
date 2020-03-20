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
        expect(params.data.length).toBe(previewData.length);
        expect(previewData[0].name).toBe('John Doe');
        expect(previewData[2].email).toBe('fred@gmail.com');
    });
});
