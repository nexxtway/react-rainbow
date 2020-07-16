import React from 'react';
import { mount } from 'enzyme';
import Tree from '../index';

const data = [
    { label: 'Tree Item', isChecked: false },
    { label: 'Tree Item', isChecked: false },
    {
        label: 'Tree Branch',
        isLoading: false,
        isExpanded: true,
        isChecked: false,
        children: [
            { label: 'Tree Item', isChecked: false },
            {
                label: 'Tree Branch',
                isLoading: false,
                isExpanded: true,
                isChecked: false,
                children: [{ label: 'Tree Item', isChecked: false }],
            },
        ],
    },
    {
        label: 'Tree Branch',
        isExpanded: true,
        isChecked: false,
        children: [
            { label: 'Tree Item', isChecked: false },
            {
                label: 'Tree Branch',
                isLoading: false,
                isExpanded: true,
                isChecked: false,
                children: [{ label: 'Tree Item', isChecked: false }],
            },
        ],
    },
];

describe('<Tree/>', () => {
    it('should call onNodeExpand with the right parameters when the button is clicked', () => {
        const nodePath = [2, 1];
        const onNodeExandMock = jest.fn();
        const component = mount(<Tree data={data} onNodeExpand={onNodeExandMock} />);
        component
            .find('ButtonIcon')
            .at(1)
            .simulate('click');
        expect(onNodeExandMock).toHaveBeenCalledWith({ nodePath });
    });
    it('should call onNodeCheck with the right parameters when the node is selected', () => {
        const nodePath = [2];
        const onNodeCheckMock = jest.fn();
        const component = mount(<Tree data={data} onNodeCheck={onNodeCheckMock} />);
        component
            .find('PrimitiveCheckbox')
            .at(2)
            .find('input')
            .simulate('change');
        expect(onNodeCheckMock).toHaveBeenCalledWith({ nodePath });
    });
    it('should render the correct number of children', () => {
        const component = mount(<Tree data={data} />);
        expect(component.find('Child').length).toBe(10);
    });
});
