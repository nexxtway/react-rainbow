import React from 'react';
import { mount } from 'enzyme';
import AssignFieldModal from '../assignFieldModal';
import getFileFieldsOptions from '../../helpers/getFileFieldsOptions';

const attributes = {
    name: { required: true },
    email: {},
};

jest.mock('../../helpers/getFileFieldsOptions', () => jest.fn());

describe('<AssignFieldModal />', () => {
    it('should open modal when modal open status is set to true', () => {
        const props = {
            isAssignFieldModalOpen: true,
            attributes,
        };
        const component = mount(<AssignFieldModal {...props} />);
        expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
    it('should run close method when cancel button is clicked', () => {
        const onRequestCloseFn = jest.fn();
        const props = {
            isAssignFieldModalOpen: true,
            attributes,
            onRequestClose: onRequestCloseFn,
        };
        const component = mount(<AssignFieldModal {...props} />);
        component
            .find('AssignFieldModalFooter')
            .find('button')
            .at(0)
            .simulate('click');
        expect(onRequestCloseFn).toHaveBeenCalled();
    });
    it('should prepare file field options using columns param', () => {
        const props = {
            isAssignFieldModalOpen: true,
            attributes,
            columns: ['Name', 'Email'],
        };
        mount(<AssignFieldModal {...props} />);
        expect(getFileFieldsOptions).toHaveBeenCalledWith(props.columns);
    });
    it('should have Preview component with their params properly passed', () => {
        const props = {
            isAssignFieldModalOpen: true,
            databaseFieldToAssign: 'name',
            data: [{ name: 'John', email: 'john@gmail.com' }],
            attributes,
        };
        const component = mount(<AssignFieldModal {...props} />);
        const preview = component.find('Preview');
        const previewProps = {
            field: preview.prop('field'),
            data: preview.prop('data'),
            attributes: preview.prop('attributes'),
        };
        const expectedProps = {
            field: props.databaseFieldToAssign,
            data: props.data,
            attributes: props.attributes,
        };
        expect(previewProps).toEqual(expectedProps);
    });
});
