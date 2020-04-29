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
    it('should call onExpandCollapse with the right parameters when the button is clicked', () => {
        const nodePath = [2, 1];
        const onExpandCollapsekMock = jest.fn();
        const component = mount(<Tree data={data} onExpandCollapse={onExpandCollapsekMock} />);
        component
            .find('ButtonIcon')
            .at(1)
            .simulate('click');
        expect(onExpandCollapsekMock).toHaveBeenCalledWith({ nodePath });
    });
    it('should call onSelect with the right parameters when the node is selected', () => {
        const nodePath = [2];
        const onSelectMock = jest.fn();
        const component = mount(<Tree data={data} onSelect={onSelectMock} />);
        component
            .find('PrimitiveCheckbox')
            .at(2)
            .find('input')
            .simulate('change');
        expect(onSelectMock).toHaveBeenCalledWith({ nodePath });
    });
    it('should render the correct number of children', () => {
        const component = mount(<Tree data={data} />);
        expect(component.find('Child').length).toBe(10);
    });
});
