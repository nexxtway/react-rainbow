import getFieldAssignedPreviewData from '../getFieldAssignedPreviewData';
import getImportParams from './getImportParams';

describe('getFieldAssignedPreviewData', () => {
    it('should return right data', () => {
        const params = getImportParams();
        const field = 'name';
        const fileFields = ['First_Name', 'Last_Name'];
        const assignedPreviewData = getFieldAssignedPreviewData(
            params.data,
            field,
            fileFields,
            params.schema.attributes,
        );
        const expectedPreviewData = [
            { name: 'John Doe' },
            { name: 'Jane Doe' },
            { name: 'Fred Flinstone' },
        ];
        expect(assignedPreviewData).toEqual(expectedPreviewData);
    });
});
