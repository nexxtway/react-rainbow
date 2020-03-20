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
        expect(params.data.length).toBe(assignedPreviewData.length);
        expect(assignedPreviewData[0].name).toBe('John Doe');
        expect(assignedPreviewData[2].name).toBe('Fred Flinstone');
    });
});
