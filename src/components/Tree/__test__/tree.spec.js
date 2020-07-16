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
    it('should have the container ul element a role tree', () => {
        const component = mount(<Tree data={data} />);
        const container = component.find('ul').at(0);
        expect(container.prop('role')).toBe('tree');
    });
    it('should set the first li element with tabIndex 0', () => {
        const component = mount(<Tree data={data} />);
        const firstLi = component.find('li').at(0);
        expect(firstLi.prop('tabIndex')).toBe(0);
    });
    it('should all li element with tabIndex -1 except the first one', () => {
        const component = mount(<Tree data={data} />);
        const secondLi = component.find('li').at(1);
        expect(secondLi.prop('tabIndex')).toBe(-1);
        const thirdLi = component.find('li').at(2);
        expect(thirdLi.prop('tabIndex')).toBe(-1);
    });
    it('should tabIndex 0 to the selected node', () => {
        const component = mount(<Tree data={data} selectedNode="node-3.2" />);
        const li = component.find('li').at(4);
        expect(li.prop('tabIndex')).toBe(0);
    });
    it('should generate the right node names', () => {
        const component = mount(<Tree data={data} />);
        const firstLi = component.find('li').at(0);
        expect(firstLi.prop('id')).toBe('node-1');
        const secondLi = component.find('li').at(1);
        expect(secondLi.prop('id')).toBe('node-2');
        const fourthLi = component.find('li').at(3);
        expect(fourthLi.prop('id')).toBe('node-3.1');
        const fifthLi = component.find('li').at(4);
        expect(fifthLi.prop('id')).toBe('node-3.2');
    });
});
