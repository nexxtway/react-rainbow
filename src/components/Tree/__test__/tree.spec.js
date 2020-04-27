import React from 'react';
import { mount } from 'enzyme';
import Tree from '../index';

const data = [
    { label: 'Tree Item' },
    { label: 'Tree Item' },
    {
        label: 'Tree Branch',
        isLoading: false,
        isExpanded: true,
        children: [
            { label: 'Tree Item' },
            {
                label: 'Tree Branch',
                isLoading: false,
                isExpanded: true,
                children: [{ label: 'Tree Item' }],
            },
        ],
    },
    {
        label: 'Tree Branch',
        isExpanded: true,
        children: [
            { label: 'Tree Item' },
            {
                label: 'Tree Branch',
                isLoading: false,
                isExpanded: true,
                children: [{ label: 'Tree Item' }],
            },
        ],
    },
];

const nodePath = [2, 1];

describe('<Tree/>', () => {
    it('should call onExpandCollapse with the right parameters when the button is clicked', () => {
        const onClickMock = jest.fn();
        const component = mount(<Tree data={data} onExpandCollapse={onClickMock} />);
        component
            .find('ButtonIcon')
            .at(1)
            .simulate('click');
        expect(onClickMock).toHaveBeenCalledWith({ nodePath });
    });
    it('should render the correct number of children', () => {
        const component = mount(<Tree data={data} />);
        expect(component.find('Child').length).toBe(10);
    });
});
