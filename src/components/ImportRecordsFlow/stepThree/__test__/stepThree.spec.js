import React from 'react';
import { mount } from 'enzyme';
import StepThree from '../';
import getAssignFieldsData from '../../helpers/getAssignFieldsData';
import StyledTable from '../../styled/table';

jest.mock('../../helpers/getAssignFieldsData', () =>
    jest.fn(() => [
        { required: true, fileField: undefined, databaseField: 'name' },
        { required: false, fileField: undefined, databaseField: 'age' },
    ]),
);

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
        expect(component.find('AssignFieldModal').props()).toEqual(
            expect.objectContaining({
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
            }),
        );
    });
    it('should call getAssignFieldsData with the right data', () => {
        mount(<StepThree {...baseParams} matchField="" />);
        expect(getAssignFieldsData).toHaveBeenCalledWith({
            fieldsMap: {
                name: 'Name',
                age: 'Age',
            },
            attributes: {
                name: { required: true },
                age: {},
            },
            matchField: '',
        });
    });
    it('should pass only the first three elements of data prop to AssignFieldModal', () => {
        const onAssignFieldFn = jest.fn();
        const component = mount(<StepThree onAssignField={onAssignFieldFn} {...baseParams} />);
        expect(component.find('AssignFieldModal').props()).toEqual(
            expect.objectContaining({
                attributes: {
                    name: { required: true },
                    age: {},
                },
                columns: ['Name', 'Age'],
                onAssignField: onAssignFieldFn,
            }),
        );
    });
    it('should pass the right data to the Table component', () => {
        const component = mount(<StepThree {...baseParams} />);
        expect(component.find(StyledTable).prop('data')).toEqual([
            { required: true, fileField: undefined, databaseField: 'name' },
            { required: false, fileField: undefined, databaseField: 'age' },
        ]);
    });
    it('should open the modal when a column cell is clicked', () => {
        const component = mount(<StepThree {...baseParams} />);
        component
            .find('ModifyCell')
            .at(0)
            .simulate('click');
        expect(component.find('AssignFieldModal').prop('isAssignFieldModalOpen')).toBe(true);
    });
    it('should close AssignFieldModal when onRequestClose prop is called', () => {
        const component = mount(<StepThree {...baseParams} />);
        component
            .find('ModifyCell')
            .at(0)
            .simulate('click');
        component
            .find('AssignFieldModalFooter')
            .find('Button')
            .at(0)
            .simulate('click');
        expect(component.find('AssignFieldModal').prop('isAssignFieldModalOpen')).toBe(false);
    });
    it('should pass the right databaseFieldToAssign prop to the modal when a column cell is clicked', () => {
        const component = mount(<StepThree {...baseParams} />);
        component
            .find('ModifyCell')
            .at(1)
            .simulate('click');
        expect(component.find('AssignFieldModal').prop('databaseFieldToAssign')).toBe('age');
    });
});
