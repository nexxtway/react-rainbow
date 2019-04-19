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

const eventMap = {};
document.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
});
const preventDefault = jest.fn();

describe('<Table />', () => {
    it('should return a table with one column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );

        const header = component.find('th.rainbow-table_header');
        const cell = component.find('th.rainbow-table_cell-container');

        expect(header.text()).toBe('Name');
        expect(cell.text()).toBe('a');
    });
    it('should add a column when hideCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} hideCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.find('.rainbow-table_cell-container').length).toBe(1);
        expect(component.find('th.rainbow-table_cell-container').text()).toBe('a');
        component.setProps({
            children: [
                <Column field="name" header="Name" />,
                <Column field="number" />,
            ],
        });
        component.update();
        expect(component.find('.rainbow-table_cell-container').length).toBe(2);
        expect(component.find('th.rainbow-table_cell-container').text()).toBe('a');
        expect(component.find('td.rainbow-table_cell-container').text()).toBe('23');
    });
    it('should add a column when hideCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.find('.rainbow-table_cell-container').length).toBe(2);
        component.setProps({
            children: [
                <Column field="name" header="Name" />,
                <Column field="number" />,
            ],
        });
        component.update();
        expect(component.find('.rainbow-table_cell-container').length).toBe(3);
    });
    it('should update the columns state when add a column and hideCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} hideCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().columns).toEqual([{
            field: 'name',
            header: 'Name',
            sortable: false,
            computedWidth: 50,
        }]);
        component.setProps({
            children: [
                <Column field="name" header="Name" />,
                <Column field="number" sortable />,
            ],
        });
        component.update();
        expect(component.state().columns).toEqual([{
            field: 'name',
            header: 'Name',
            sortable: false,
            computedWidth: 50,
        }, {
            field: 'number',
            sortable: true,
            computedWidth: 50,
        }]);
    });
    it('should update the columns state when add a column and hideCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().columns).toEqual([
            {
                computedWidth: 52,
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'name',
                header: 'Name',
                sortable: false,
                computedWidth: 50,
            },
        ]);
        component.setProps({
            children: [
                <Column field="name" header="Name" />,
                <Column field="number" sortable />,
            ],
        });
        component.update();
        expect(component.state().columns).toEqual([
            {
                computedWidth: 52,
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'name',
                header: 'Name',
                sortable: false,
                computedWidth: 50,
            }, {
                field: 'number',
                sortable: true,
                computedWidth: 50,
            },
        ]);
    });
    it('should not update the columns state when the props changed are others than children', () => {
        const columnsState = [{
            field: 'name',
            header: 'Name',
            sortable: false,
            computedWidth: 50,
        }];
        const component = mount(
            <Table data={data} hideCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().columns).toEqual(columnsState);
        component.setProps({
            data: [{ email: 'john.doe@gmail.com' }],
            sortedBy: 'email',
            sortDirection: 'asc',
        });
        component.update();
        expect(component.state().columns).toEqual(columnsState);
    });
    it('should set the right table width when resize for first time', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(0);
        resizeBar.at(0).simulate('mousedown', { clientX: 100 });

        eventMap.mousemove({ clientX: 232, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(132);
    });
    it('should store the right columns in state when resize a column', () => {
        const component = mount(
            <Table data={data} hideCheckboxColumn>
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                computedWidth: 50,
                sortable: false,
            },
            {
                field: 'number',
                header: 'Number',
                computedWidth: 50,
                sortable: false,
            },
        ]);
        resizeBar.at(0).simulate('mousedown', { clientX: 100 });

        eventMap.mousemove({ clientX: 232, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                computedWidth: 182,
                isResized: true,
                sortable: false,
            },
            {
                field: 'number',
                header: 'Number',
                computedWidth: 50,
                sortable: false,
            },
        ]);
    });
    it('should set the right table width when resize for second time', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(0);

        resizeBar.at(0).simulate('mousedown', { clientX: 60 });
        eventMap.mousemove({ clientX: 120, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(60);

        resizeBar.at(0).simulate('mousedown', { clientX: 120 });
        eventMap.mousemove({ clientX: -10, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(0);
    });
    it('should call onSort with the right data when a sortable column header is clicked', () => {
        const onSortMock = jest.fn();
        const component = mount(
            <Table data={data} onSort={onSortMock}>
                <Column field="name" header="Name" sortable />
                <Column field="number" header="Number" />,
            </Table>,
        );
        const tableHeader = component.find('.rainbow-table_header-container');
        tableHeader.at(0).simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });
    it('should not call onSort when a non sortable column header is clicked', () => {
        const onSortMock = jest.fn();
        const component = mount(
            <Table data={data} onSort={onSortMock}>
                <Column field="name" header="Name" sortable />
                <Column field="number" header="Number" />,
            </Table>,
        );
        const tableHeader = component.find('.rainbow-table_header-container');
        tableHeader.at(1).simulate('click');
        expect(onSortMock).not.toHaveBeenCalled();
    });
    it('should call onSort the first time with sortDireciton as "desc" and the second time as "asc" when defaultSortDirection is set to "desc"', () => {
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
