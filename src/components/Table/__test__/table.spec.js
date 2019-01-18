/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import Table from '../index';
import Column from '../../Column';

const data = [
    {
        name: 'a',
        number: 23,
    },
];

const CellComponent = ({ value }) => <span>{value}</span>;

describe('<Table />', () => {
    it('should return a table with one column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );

        const header = component.find('div.rainbow-table_header');
        const cell = component.find('th .rainbow-table_cell-content');

        expect(header.text()).toBe('Name');
        expect(cell.text()).toBe('a');
    });
    it('should render the component passed to the column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" component={CellComponent} />
            </Table>,
        );

        expect(component.find(CellComponent).exists()).toBe(true);
    });
    it('should add a column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.find('th .rainbow-table_cell-content').text()).toBe('a');
        component.setProps({
            children: [
                <Column field="name" header="Name" />,
                <Column field="number" />,
            ],
        });
        component.update();
        expect(component.find('th .rainbow-table_cell-content').text()).toBe('a');
        expect(component.find('td .rainbow-table_cell-content').text()).toBe('23');
    });

    it('should call onSort with the event, the field as "mane" and the sortDireciton as "asc"', () => {
        const onSortMock = jest.fn();
        const component = mount(
            <Table data={data} onSort={onSortMock}>
                <Column field="name" header="Name" sortable />
            </Table>,
        );
        const tableHeader = component.find('.rainbow-table_header-container');
        tableHeader.simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });

    it('should call onSort with the event, the field as "mane" and the sortDireciton as "asc" if clicked twice', () => {
        let sortedBy;
        let sortDirection;
        const onSortMock = jest.fn((event, field, nextSortDirection) => {
            sortedBy = field;
            sortDirection = nextSortDirection;
        });
        const component = mount(
            <Table
                data={data}
                onSort={onSortMock}
                defaultSortDirection="desc"
                sortDirection={sortDirection}
                sortedBy={sortedBy}>

                <Column field="name" header="Name" sortable />
            </Table>,
        );
        const tableHeader = component.find('.rainbow-table_header-container');
        tableHeader.simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'desc');
        component.setProps({ sortedBy, sortDirection });
        tableHeader.simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });
});
