import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../Button';
import Chip from '../../../Chip';
import AssignFieldModal from '../assignFieldModal';
import SelectedFieldsToAssign from '../selectedFieldsToAssign';
import AssignFieldModalFooter from '../assignFieldModalFooter';
import getFileFieldsOptions from '../../helpers/getFileFieldsOptions';
import StyledButtonIcon from '../../../Chip/styled/buttonIcon';
import StyledSelect from '../styled/select';
import StyledCancelButton from '../styled/cancelButton';

const attributes = {
    name: { required: true },
    email: {},
};

jest.mock('../../helpers/getFileFieldsOptions', () =>
    jest.fn(() => [
        { label: 'Select database field to assign', value: 'default', disabled: true },
        { label: 'First_Name', value: 'First_Name' },
        { label: 'Last_Name', value: 'Last_Name' },
        { label: 'Email', value: 'Email' },
    ]),
);

describe('<AssignFieldModal />', () => {
    it('should open modal when modal open status is set to true', () => {
        const component = mount(
            <AssignFieldModal isAssignFieldModalOpen attributes={attributes} />,
        );
        expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
    it('should run close method when cancel button is clicked', () => {
        const onRequestCloseFn = jest.fn();
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                onRequestClose={onRequestCloseFn}
            />,
        );
        component
            .find(AssignFieldModalFooter)
            .find(StyledCancelButton)
            .simulate('click');
        expect(onRequestCloseFn).toHaveBeenCalled();
    });
    it('should call getFileFieldsOptions with the columns passed', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        mount(
            <AssignFieldModal isAssignFieldModalOpen attributes={attributes} columns={columns} />,
        );
        expect(getFileFieldsOptions).toHaveBeenCalledWith(columns);
    });
    it('should call getFileFieldsOptions with the columns passed using filtered options', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name,Last_Name' };
        const databaseFieldToAssign = 'name';
        mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                columns={columns}
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
            />,
        );
        expect(getFileFieldsOptions).toHaveBeenCalledWith(['Email']);
    });
    it('should have Preview component with their params properly passed', () => {
        const data = [{ name: 'John', email: 'john@gmail.com' }];
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                databaseFieldToAssign="name"
                data={data}
                attributes={attributes}
            />,
        );
        expect(component.find('Preview').props()).toEqual({
            field: 'name',
            data: [{ name: 'John', email: 'john@gmail.com' }],
            attributes: {
                name: { required: true },
                email: {},
            },
            fileFields: [],
        });
    });
    it('should pass the right options to Select component', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name' };
        const databaseFieldToAssign = 'name';
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                columns={columns}
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
            />,
        );
        expect(component.find(StyledSelect).prop('options')).toEqual([
            { label: 'Select database field to assign', value: 'default', disabled: true },
            { label: 'First_Name', value: 'First_Name' },
            { label: 'Last_Name', value: 'Last_Name' },
            { label: 'Email', value: 'Email' },
        ]);
    });
    it('should set the right values to SelectedFieldsToAssign when fieldsMap and databaseFieldToAssign params exists', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name,Last_Name' };
        const databaseFieldToAssign = 'name';
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                columns={columns}
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
            />,
        );
        expect(component.find(SelectedFieldsToAssign).prop('values')).toEqual([
            'First_Name',
            'Last_Name',
        ]);
    });
    it('should set the right values to SelectedFieldsToAssign when fieldsMap and databaseFieldToAssign params does not exists', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const component = mount(
            <AssignFieldModal isAssignFieldModalOpen attributes={attributes} columns={columns} />,
        );
        expect(component.find(SelectedFieldsToAssign).prop('values')).toEqual([]);
    });
    it('should fire onRequestClose when clicking assing button', () => {
        const onRequestCloseFn = jest.fn();
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name,Last_Name' };
        const databaseFieldToAssign = 'name';
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                onRequestClose={onRequestCloseFn}
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
                columns={columns}
            />,
        );
        component
            .find(AssignFieldModalFooter)
            .find(Button)
            .at(1)
            .simulate('click');
        expect(onRequestCloseFn).toHaveBeenCalled();
    });
    it('should fire onAssignField with the right values when clicking assing button', () => {
        const onAssignFieldFn = jest.fn();
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name,Last_Name' };
        const databaseFieldToAssign = 'name';
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                attributes={attributes}
                onAssignField={onAssignFieldFn}
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
                columns={columns}
            />,
        );
        component
            .find(AssignFieldModalFooter)
            .find(Button)
            .at(1)
            .simulate('click');
        expect(onAssignFieldFn).toHaveBeenCalledWith('name', ['First_Name', 'Last_Name']);
    });
    it('should update Select options, value and SelectedFieldsToAssign when changing Select value', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = {};
        const databaseFieldToAssign = 'name';
        const data = [{ name: 'John', email: 'john@gmail.com' }];
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
                attributes={attributes}
                columns={columns}
                data={data}
            />,
        );
        component.find('select').simulate('change', { target: { value: 'Email' } });
        expect(component.find(StyledSelect).prop('options')).toEqual([
            { label: 'Select database field to assign', value: 'default', disabled: true },
            { label: 'First_Name', value: 'First_Name' },
            { label: 'Last_Name', value: 'Last_Name' },
        ]);
        expect(component.find(SelectedFieldsToAssign).prop('values')).toEqual(['Email']);
    });
    it('should update Select options after removing a selectedFileToAssign', () => {
        const columns = ['First_Name', 'Last_Name', 'Email'];
        const fieldsMap = { name: 'First_Name,Last_Name' };
        const databaseFieldToAssign = 'name';
        const data = [{ name: 'John', email: 'john@gmail.com' }];
        const component = mount(
            <AssignFieldModal
                isAssignFieldModalOpen
                fieldsMap={fieldsMap}
                databaseFieldToAssign={databaseFieldToAssign}
                attributes={attributes}
                columns={columns}
                data={data}
            />,
        );
        component
            .find(SelectedFieldsToAssign)
            .find(Chip)
            .at(1)
            .find(StyledButtonIcon)
            .simulate('click');
        expect(component.find(SelectedFieldsToAssign).prop('values')).toEqual(['First_Name']);
    });
});
