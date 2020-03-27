import React from 'react';
import { mount } from 'enzyme';
import Preview from '../preview';
import getFieldAssignedPreviewData from '../../helpers/getFieldAssignedPreviewData';

jest.mock('../../helpers/getFieldAssignedPreviewData', () => jest.fn());

const props = {
    field: 'name',
    fileFields: ['First_Name', 'Last_Name'],
    data: [{ First_Name: 'John', Last_Name: 'Doe' }, { First_Name: 'Marie', Last_Name: 'Doe' }],
    attributes: {
        name: { required: true },
    },
};

describe('<Preview />', () => {
    it('should get mapped data with the right values', () => {
        mount(<Preview {...props} />);
        expect(getFieldAssignedPreviewData).toHaveBeenCalledWith(
            props.data,
            props.field,
            props.fileFields,
            props.attributes,
        );
    });
});
