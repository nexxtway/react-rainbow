/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';
import StepThree from '..';
import getAssignFieldsData from '../../helpers/getAssignFieldsData';

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
        const { queryByRole } = render(<StepThree {...baseParams} />);
        expect(queryByRole('dialog')).toBeNull();
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
        baseParams.data = [
            { First_Name: 'John', Last_Name: 'Doe', Age: 27 },
            { First_Name: 'Marie', Last_Name: 'Doe', Age: 28 },
            { First_Name: 'Sophia', Last_Name: 'Doe', Age: 29 },
            { First_Name: 'Joseph', Last_Name: 'Doe', Age: 30 },
        ];
        const component = mount(<StepThree {...baseParams} />);
        expect(component.find('AssignFieldModal').prop('data')).toEqual([
            { First_Name: 'John', Last_Name: 'Doe', Age: 27 },
            { First_Name: 'Marie', Last_Name: 'Doe', Age: 28 },
            { First_Name: 'Sophia', Last_Name: 'Doe', Age: 29 },
        ]);
    });
    it('should pass the right data to the Table component', () => {
        const { getByRole } = render(<StepThree {...baseParams} />);

        expect(getByRole('row', { name: 'required name Not assigned yet' })).toBeVisible();
        expect(getByRole('row', { name: 'age Not assigned yet' })).toBeVisible();
    });
    it('should open the modal when a column cell is clicked', () => {
        const { getByRole, getAllByRole } = render(<StepThree {...baseParams} />);

        fireEvent.click(getAllByRole('button')[0]);
        expect(getByRole('dialog')).toBeVisible();
    });
    it('should close AssignFieldModal when onRequestClose prop is called', () => {
        const { getByRole, getAllByRole, queryByRole } = render(<StepThree {...baseParams} />);

        fireEvent.click(getAllByRole('button')[0]);
        expect(getByRole('dialog')).toBeVisible();
        fireEvent.click(getByRole('button', { name: 'Cancel' }));
        expect(queryByRole('dialog')).toBeNull();
    });
    it('should pass the right databaseFieldToAssign prop to the modal when a column cell is clicked', () => {
        const { getByRole, getAllByRole } = render(<StepThree {...baseParams} />);

        fireEvent.click(getAllByRole('button')[1]);
        expect(getByRole('dialog')).toBeVisible();
        expect(getByRole('heading', { name: 'Assign to the field: age' })).toBeVisible();
    });
});
