/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import StepFour from '..';
import Column from '../../../Column';

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

describe('<StepFour />', () => {
    it('should render the right amount of columns', () => {
        const component = shallow(<StepFour {...props} />);
        expect(component.find(Column).length).toBe(2);
    });
});
