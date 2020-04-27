import React from 'react';
import { mount } from 'enzyme';
import Child from './../child';

describe('<Child/>', () => {
    it('should render the PrimitiveCheckbox component when isChecked prop is true', () => {
        const component = mount(<Child isChecked />);
        expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
    });
    it('should render the PrimitiveCheckbox component when isChecked prop is false', () => {
        const component = mount(<Child isChecked={false} />);
        expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
    });
    it('should render the PrimitiveCheckbox component when isChecked prop is "indeterminate"', () => {
        const component = mount(<Child isChecked="indeterminate" />);
        expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
    });
    it('should set the label passed in the Child component', () => {
        const component = mount(<Child label="Tree Item" />);
        expect(component.find('Child').prop('label')).toBe('Tree Item');
    });
    it('should render the TreeChildren component when children prop is not undefined', () => {
        const children = [{ label: 'Tree Item' }, { label: 'Tree Item' }];
        // eslint-disable-next-line react/no-children-prop
        const component = mount(<Child children={children} isExpanded />);
        expect(component.find('TreeChildren').exists()).toBe(true);
    });
});
