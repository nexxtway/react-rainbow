import React from 'react';
import { mount } from 'enzyme';
import getPreviewDataToImport from '../../helpers/getPreviewDataToImport';
import StepFour from '../';

jest.mock('../../helpers/getPreviewDataToImport', () => jest.fn());

const props = {
    schemaFields: ['name', 'email'],
    data: [{ Name: 'John', Email: 'john@gmail.com' }, { Name: 'Marie', Email: 'marie@gmail.com' }],
    fieldsMap: {
        name: 'Name',
        email: 'Email',
    },
    attributes: {
        name: { required: true },
        email: {},
    },
};

describe('<Preview />', () => {
    it('should get preview data to import with the right values', () => {
        mount(<StepFour {...props} />);
        expect(getPreviewDataToImport).toHaveBeenCalledWith(
            props.data.slice(0, 5),
            props.fieldsMap,
            props.attributes,
        );
    });
});
