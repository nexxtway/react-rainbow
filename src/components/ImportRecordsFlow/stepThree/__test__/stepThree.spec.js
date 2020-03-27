import React from 'react';
import { mount } from 'enzyme';
import StepThree from '../';
import getAssignFieldsData from '../../helpers/getAssignFieldsData';

jest.mock('../../helpers/getAssignFieldsData', () => jest.fn());

const baseParams = {
    data: [{ Name: 'John', Age: 25 }, { Name: 'Marie', Age: 30 }],
    attributes: {
        name: { required: true },
        age: {},
    },
    columns: ['Name', 'Age'],
    fieldsMap: {
        name: 'Name',
        age: 'Age',
    },
};

describe('<StepThree />', () => {
    it('should have the assign field modal closed by default', () => {
        const component = mount(<StepThree {...baseParams} />);
        expect(component.find('AssignFieldModal').prop('isAssignFieldModalOpen')).toBe(false);
    });
    it('should pass params to modal', () => {
        const component = mount(<StepThree {...baseParams} />);
        const modal = component.find('AssignFieldModal');
        const modalProps = {
            data: modal.prop('data'),
            attributes: modal.prop('attributes'),
            columns: modal.prop('columns'),
            fieldsMap: modal.prop('fieldsMap'),
        };
        expect(modalProps).toEqual(baseParams);
    });
    it('should prepare assign fields data using the passed params', () => {
        const params = { ...baseParams, matchField: '' };
        mount(<StepThree {...params} />);
        expect(getAssignFieldsData).toHaveBeenCalledWith({
            fieldsMap: baseParams.fieldsMap,
            attributes: baseParams.attributes,
            matchField: '',
        });
    });
});
