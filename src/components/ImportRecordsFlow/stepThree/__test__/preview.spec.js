import React from 'react';
import { mount } from 'enzyme';
import Preview from '../preview';
import getFieldAssignedPreviewData from '../../helpers/getFieldAssignedPreviewData';
import StyledPreviewText from '../styled/previewText';
import StyledTable from '../../styled/table';

jest.mock('../../helpers/getFieldAssignedPreviewData', () =>
    jest.fn(() => [{ name: 'John Doe' }, { name: 'Marie Doe' }]),
);

const props = {
    field: 'name',
    fileFields: ['First_Name', 'Last_Name'],
    data: [{ First_Name: 'John', Last_Name: 'Doe' }, { First_Name: 'Marie', Last_Name: 'Doe' }],
    attributes: {
        name: { required: true },
    },
};

describe('<Preview />', () => {
    it('should call getFieldAssignedPreviewData with the right values', () => {
        mount(
            <Preview
                field={props.field}
                fileFields={props.fileFields}
                data={props.data}
                attributes={props.attributes}
            />,
        );
        expect(getFieldAssignedPreviewData).toHaveBeenCalledWith(
            [{ First_Name: 'John', Last_Name: 'Doe' }, { First_Name: 'Marie', Last_Name: 'Doe' }],
            'name',
            ['First_Name', 'Last_Name'],
            {
                name: { required: true },
            },
        );
    });
    it('should return null when fileFields is an empty array', () => {
        const response = Preview({
            field: props.field,
            fileFields: [],
            data: props.data,
            attributes: props.attributes,
        });
        expect(response).toBe(null);
    });
    it('should render the right component when fileFields is not empty', () => {
        const component = mount(
            <Preview
                field={props.field}
                fileFields={props.fileFields}
                data={props.data}
                attributes={props.attributes}
            />,
        );
        expect(component.find(StyledPreviewText).exists()).toBe(true);
    });
    it('should render the right text inside StyledPreviewText', () => {
        const component = mount(
            <Preview
                field={props.field}
                fileFields={props.fileFields}
                data={props.data}
                attributes={props.attributes}
            />,
        );
        expect(component.find(StyledPreviewText).text()).toBe(
            'Assigning “First_Name,Last_Name” fields to “name” database field',
        );
    });
    it('should pass the right data to Table component', () => {
        const component = mount(
            <Preview
                field={props.field}
                fileFields={props.fileFields}
                data={props.data}
                attributes={props.attributes}
            />,
        );
        expect(component.find(StyledTable).prop('data')).toEqual([
            { name: 'John Doe' },
            { name: 'Marie Doe' },
        ]);
    });
});
