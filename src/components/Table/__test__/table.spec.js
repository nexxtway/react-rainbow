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

const tableData = [
    {
        name: 'Pepe',
        id: '1234qwerty',
    },
    {
        name: 'John',
        id: '5678asdfgh',
    },
    {
        name: 'Josep',
        id: '9012zxcvbn',
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
    it('should add a column when showCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data}>
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
    it('should add a column when showCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} showCheckboxColumn>
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
    it('should update the columns state when add a column and showCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data}>
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
    it('should update the columns state when add a column and showCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} showCheckboxColumn>
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
            <Table data={data}>
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
            <Table data={data}>
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
    it('should set the right rows initially', () => {
        const component = mount(
            <Table data={tableData} keyField="id" showCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the right rows initially when there are selected columns', () => {
        const component = mount(
            <Table
                data={tableData}
                selectedRows={['5678asdfgh', '9012zxcvbn']}
                maxRowSelection={2}
                showCheckboxColumn
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: true,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the right rows initially when maxRowSelection is 1', () => {
        const component = mount(
            <Table
                data={tableData}
                maxRowSelection={1}
                showCheckboxColumn
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the bulkSelection initially to "none" when there are not selected rows', () => {
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().bulkSelection).toBe('none');
    });
    it('should set the bulkSelection initially to "some" when there are one row selected', () => {
        const component = mount(
            <Table
                data={tableData}
                selectedRows={['1234qwerty']}
                showCheckboxColumn
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should set the bulkSelection initially to "all" when all rows are selected', () => {
        const component = mount(
            <Table
                data={tableData}
                selectedRows={['1234qwerty', '5678asdfgh', '9012zxcvbn']}
                showCheckboxColumn
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().bulkSelection).toBe('all');
    });
    it('should set the right state when change the maxRowSelection', () => {
        const component = mount(
            <Table
                data={tableData}
                maxRowSelection={2}
                showCheckboxColumn
                selectedRows={['1234qwerty', '5678asdfgh']}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: true,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('all');
        component.setProps({
            maxRowSelection: 3,
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should set the right state when change the selectedRows', () => {
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty']}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
        component.setProps({
            selectedRows: ['1234qwerty', '9012zxcvbn'],
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should call onRowSelection with the right data when select all rows and there are selected rows', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty']}
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        const headCheckbox = component.find('InputCheckbox[label="select all rows"]').find('input');
        headCheckbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([]);
    });
    it('should call onRowSelection with the right data when select all rows and there are not selected rows', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        const headCheckbox = component.find('InputCheckbox[label="select all rows"]').find('input');
        headCheckbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                id: '1234qwerty',
            },
            {
                name: 'John',
                id: '5678asdfgh',
            },
            {
                name: 'Josep',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row and there are selected rows', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty']}
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        const checkbox = component.find('Input[label="select row"]').find('input').at(2);
        checkbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                id: '1234qwerty',
            },
            {
                name: 'Josep',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row with shiftKey pressed', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        const firstCheckbox = component.find('Input[label="select row"]').find('input').at(0);
        const lastCheckbox = component.find('Input[label="select row"]').find('input').at(2);
        firstCheckbox.simulate('click');
        expect(component.instance().lastSelectedRowKey).toBe('1234qwerty');
        lastCheckbox.simulate('click', {
            shiftKey: true,
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                id: '1234qwerty',
            },
            {
                name: 'John',
                id: '5678asdfgh',
            },
            {
                name: 'Josep',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row and maxRowSelection is 1', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                maxRowSelection={1}
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        const radio = component.find('Input[label="select row"]').find('input').at(1);
        radio.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([{
            name: 'John',
            id: '5678asdfgh',
        }]);
    });
    it('should call onRowSelection with the right data when deselect a single row', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty', '5678asdfgh']}
                onRowSelection={onRowSelectionMockFn}
                keyField="id">

                <Column field="name" header="Name" />
            </Table>,
        );
        const checkbox = component.find('Input[label="select row"]').find('input').at(0);
        checkbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([{
            id: '5678asdfgh',
            name: 'John',
        }]);
        expect(component.instance().lastSelectedRowKey).toBe('1234qwerty');
    });
});
