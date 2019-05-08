import React from 'react';
import { mount } from 'enzyme';
import SelectableHeader from '../selectableHeader';

describe('SelectableHeader', () => {
    it('should not render the InputCheckbox when maxRowSelection is 1', () => {
        const component = mount(<SelectableHeader maxRowSelection={1} />);
        expect(component.find('InputCheckbox').exists()).toBe(false);
        expect(component.find('th[scope="col"]').exists()).toBe(true);
    });
    it('should set scope to "col" in th element', () => {
        const component = mount(<SelectableHeader />);
        expect(component.find('th').prop('scope')).toBe('col');
    });
    it('should set name to the right value in InputCheckbox component', () => {
        const component = mount(<SelectableHeader tableId="table-25" />);
        expect(component.find('InputCheckbox').prop('name')).toBe('table-25-options');
    });
    it('should set type to "checkbox" in InputCheckbox component', () => {
        const component = mount(<SelectableHeader />);
        expect(component.find('InputCheckbox').prop('type')).toBe('checkbox');
    });
    it('should set checked to true in InputCheckbox component when bulkSelection is "all"', () => {
        const component = mount(<SelectableHeader bulkSelection="all" />);
        expect(component.find('InputCheckbox').prop('checked')).toBe(true);
    });
    it('should set checked to false in InputCheckbox component when bulkSelection is other than "all"', () => {
        const values = ['none', 'some', '', 123, undefined];
        values.forEach(value => {
            const component = mount(<SelectableHeader bulkSelection={value} />);
            expect(component.find('InputCheckbox').prop('checked')).toBe(false);
        });
    });
    it('should set indeterminate to true in InputCheckbox component when bulkSelection is "some"', () => {
        const component = mount(<SelectableHeader bulkSelection="some" />);
        expect(component.find('InputCheckbox').prop('indeterminate')).toBe(true);
    });
    it('should set indeterminate to false in InputCheckbox component when bulkSelection is other than "some"', () => {
        const values = ['none', 'all', '', 123, undefined];
        values.forEach(value => {
            const component = mount(<SelectableHeader bulkSelection={value} />);
            expect(component.find('InputCheckbox').prop('indeterminate')).toBe(false);
        });
    });
    it('should set disabled to true in InputCheckbox component when maxRowSelection passed is 0', () => {
        const component = mount(<SelectableHeader maxRowSelection={0} />);
        expect(component.find('InputCheckbox').prop('disabled')).toBe(true);
    });
    it('should set disabled to false in InputCheckbox component when maxRowSelection is other than 0', () => {
        const values = [-1, 2, 3, 'abc'];
        values.forEach(value => {
            const component = mount(<SelectableHeader maxRowSelection={value} />);
            expect(component.find('InputCheckbox').prop('disabled')).toBe(false);
        });
    });
    it('should call the right event when bulkSelection is "none"', () => {
        const onSelectAllRowsMockFn = jest.fn();
        const onDeselectAllRowsMockFn = jest.fn();
        const component = mount(
            <SelectableHeader
                bulkSelection="none"
                onSelectAllRows={onSelectAllRowsMockFn}
                onDeselectAllRows={onDeselectAllRowsMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onSelectAllRowsMockFn).toHaveBeenCalledWith(expect.any(Object));
        expect(onDeselectAllRowsMockFn).not.toHaveBeenCalled();
    });
    it('should call the right event when bulkSelection is other than "none"', () => {
        const values = ['some', 'all', 'abc'];
        values.forEach(value => {
            const onSelectAllRowsMockFn = jest.fn();
            const onDeselectAllRowsMockFn = jest.fn();
            const component = mount(
                <SelectableHeader
                    bulkSelection={value}
                    onSelectAllRows={onSelectAllRowsMockFn}
                    onDeselectAllRows={onDeselectAllRowsMockFn}
                />,
            );
            component.find('input').simulate('click');
            expect(onDeselectAllRowsMockFn).toHaveBeenCalledWith(expect.any(Object));
            expect(onSelectAllRowsMockFn).not.toHaveBeenCalled();
        });
    });
});
