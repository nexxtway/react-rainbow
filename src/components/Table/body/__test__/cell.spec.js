/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import Cell from '../cell';

const CellComponent = ({ value }) => <h1>{value}</h1>;

describe('<Cell /> when isFirst is not passed', () => {
    it('should render a td element with text "cell-1" ', () => {
        const component = mount(<Cell value="cell-1" />);
        const td = component.find('td');
        expect(td.text()).toBe('cell-1');
    });
    it('should render a td element with a component to display de value', () => {
        const component = mount(<Cell value="cell-2" component={CellComponent} />);
        const td = component.find('td');
        expect(td.find('h1').text()).toBe('cell-2');
    });
    it('should set role="gridcell" in td element', () => {
        const component = mount(<Cell value="cell-1" />);
        const td = component.find('td');
        expect(td.prop('role')).toBe('gridcell');
    });
    it('should set tabIndex={-1} in td element ', () => {
        const component = mount(<Cell value="cell-1" />);
        const td = component.find('td');
        expect(td.prop('tabIndex')).toBe(-1);
    });
    it('should set the right data-label in td element when the header passed is a string', () => {
        const component = mount(<Cell value="cell-1" header="column header" />);
        const td = component.find('td');
        expect(td.prop('data-label')).toBe('column header');
    });
    it('should not set any data-label in td element when the header passed is not a string', () => {
        const component = mount(<Cell value="cell-1" header={<span />} />);
        const td = component.find('td');
        expect(td.prop('data-label')).toBe(undefined);
    });
    it('should render the SelectableCell component when columnType is "SELECTABLE_CHECKBOX"', () => {
        const component = mount(<Cell value="cell-1" columnType="SELECTABLE_CHECKBOX" />);
        expect(component.find('SelectableCell').exists()).toBe(true);
    });
    it('should render the ActionsCell component when columnType is "action"', () => {
        const component = mount(<Cell value="cell-1" columnType="action" />);
        expect(component.find('ActionsCell').exists()).toBe(true);
    });
    it('should pass the row data and other columns props to cell component', () => {
        const rowData = {
            name: 'John',
            emai: 'john@gmail.com',
        };
        const columnProps = {
            otherData: 'qwerty1234',
        };
        const component = mount(
            <Cell
                value="cell-1"
                rowData={rowData}
                restColumnProps={columnProps}
                component={CellComponent}
            />,
        );
        expect(component.find('CellComponent').props()).toEqual({
            otherData: 'qwerty1234',
            row: {
                emai: 'john@gmail.com',
                name: 'John',
            },
            value: 'cell-1',
        });
    });
});

describe('<Cell /> when isFirst is passed', () => {
    it('should render a th element with text "cell-1" ', () => {
        const component = mount(<Cell value="cell-1" isFirst />);
        const th = component.find('th');
        expect(th.text()).toBe('cell-1');
    });
    it('should render a th element with a component to display de value if isFirst is passed', () => {
        const component = mount(<Cell value="cell-2" isFirst component={CellComponent} />);
        const th = component.find('th');
        expect(th.find('h1').text()).toBe('cell-2');
    });
    it('should set scope="row" in th element', () => {
        const component = mount(<Cell value="cell-1" isFirst />);
        const th = component.find('th');
        expect(th.prop('scope')).toBe('row');
    });
    it('should set tabIndex={-1} in th element', () => {
        const component = mount(<Cell value="cell-1" isFirst />);
        const th = component.find('th');
        expect(th.prop('tabIndex')).toBe(-1);
    });
    it('should set the right data-label in th element when the header passed is a string', () => {
        const component = mount(<Cell value="cell-1" isFirst header="column header" />);
        const th = component.find('th');
        expect(th.prop('data-label')).toBe('column header');
    });
    it('should not set any data-label in th element when the header passed is not a string', () => {
        const component = mount(<Cell value="cell-1" isFirst header={<span />} />);
        const th = component.find('th');
        expect(th.prop('data-label')).toBe(undefined);
    });
    it('should render the SelectableCell component when columnType is "SELECTABLE_CHECKBOX"', () => {
        const component = mount(<Cell value="cell-1" isFirst columnType="SELECTABLE_CHECKBOX" />);
        expect(component.find('SelectableCell').exists()).toBe(true);
    });
});
