import React from 'react';
import { mount } from 'enzyme';
import Tree from '../index';
import ButtonIcon from '../../ButtonIcon';

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
        const onNodeExpandMock = jest.fn();
        const component = mount(<Tree data={data} onNodeExpand={onNodeExpandMock} />);
        component
            .find(ButtonIcon)
            .at(1)
            .simulate('click');
        expect(onNodeExpandMock).toHaveBeenCalledTimes(1);
        expect(onNodeExpandMock).toHaveBeenCalledWith({
            nodePath: [2, 1],
            name: 'node-3.2',
        });
    });
    it('should call onNodeCheck with the right parameters when the node is selected', () => {
        const onNodeCheckMock = jest.fn();
        const component = mount(<Tree data={data} onNodeCheck={onNodeCheckMock} />);
        component
            .find('PrimitiveCheckbox')
            .at(2)
            .find('input')
            .simulate('change');
        expect(onNodeCheckMock).toHaveBeenCalledTimes(1);
        expect(onNodeCheckMock).toHaveBeenCalledWith({
            nodePath: [2],
            name: 'node-3',
        });
    });
    it('should call onNodeSelect with the right data', () => {
        const onNodeSelectMock = jest.fn();
        const component = mount(<Tree data={data} onNodeSelect={onNodeSelectMock} />);
        component
            .find('li')
            .at(1)
            .simulate('click');
        expect(onNodeSelectMock).toHaveBeenCalledTimes(1);
        expect(onNodeSelectMock).toHaveBeenCalledWith({
            nodePath: [1],
            name: 'node-2',
        });
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
    it('should have the role group in the child ul element', () => {
        const component = mount(<Tree data={data} />);
        const container = component.find('ul').at(1);
        expect(container.prop('role')).toBe('group');
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
    it('should set tabIndex to -1 in expand collapse button', () => {
        const component = mount(<Tree data={data} />);
        const firstExpandButton = component.find(ButtonIcon).at(0);
        expect(firstExpandButton.prop('tabIndex')).toBe(-1);
        const fourthExpandButton = component.find(ButtonIcon).at(2);
        expect(fourthExpandButton.prop('tabIndex')).toBe(-1);
    });
    it('should pass right aria-level number', () => {
        const component = mount(<Tree data={data} />);
        const firstLi = component.find('li').at(0);
        expect(firstLi.prop('aria-level')).toBe(1);
        const fourthLi = component.find('li').at(3);
        expect(fourthLi.prop('aria-level')).toBe(2);
        const sixthLi = component.find('li').at(5);
        expect(sixthLi.prop('aria-level')).toBe(3);
    });
    it('should pass the right aria-label', () => {
        const ariaLabel = 'labelSample';
        const component = mount(<Tree data={data} ariaLabel={ariaLabel} />);
        const container = component.find('ul').at(0);
        expect(container.prop('aria-label')).toBe(ariaLabel);
    });
    it('should pass the right aria-labelledby', () => {
        const ariaLabelledBy = 'labelledBySample';
        const component = mount(<Tree data={data} ariaLabelledBy={ariaLabelledBy} />);
        const container = component.find('ul').at(0);
        expect(container.prop('aria-labelledby')).toBe(ariaLabelledBy);
    });
    it('should not set aria-expanded when the node does not have children', () => {
        const component = mount(<Tree data={data} />);
        const firstLi = component.find('li').at(1);
        expect(firstLi.prop('aria-expanded')).toBeUndefined();
    });
    it('should set the aria-expanded value of the node when it has children', () => {
        const component = mount(<Tree data={data} />);
        const node = component.find('li').at(2);
        expect(node.prop('aria-expanded')).toBe(true);
    });
});
