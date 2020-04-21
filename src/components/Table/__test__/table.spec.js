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
    it('should not render anything if a string keyField is not passed', () => {
        const values = [undefined, null, '', 0, 123, {}, []];
        values.forEach(value => {
            const component = mount(
                <Table data={data} keyField={value}>
                    <Column field="name" header="Name" />
                </Table>,
            );
            expect(component.children().length).toBe(0);
        });
    });
    it('should return a table with one column', () => {
        const component = mount(
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
            </Table>,
        );

        const header = component.find('th[scope="col"]');
        const cell = component.find('th[scope="row"]');

        expect(header.text()).toBe('Name');
        expect(cell.text()).toBe('a');
    });
    it('should not add a column when showCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(0);
        expect(component.find('th[scope="row"]').text()).toBe('a');
        component.setProps({
            children: [<Column field="name" header="Name" />, <Column field="number" />],
        });
        component.update();
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(1);
        expect(component.find('th[scope="row"]').text()).toBe('a');
        expect(component.find('td[role="gridcell"]').text()).toBe('23');
    });
    it('should add a column when showCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} keyField="name" showCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(1);
        component.setProps({
            children: [<Column field="name" header="Name" />, <Column field="number" />],
        });
        component.update();
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(2);
    });
    it('should update the columns state when add a column and showCheckboxColumn is not passed', () => {
        const component = mount(
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                sortable: false,
                computedWidth: 50,
                type: 'text',
            },
        ]);
        component.setProps({
            children: [<Column field="name" header="Name" />, <Column field="number" sortable />],
        });
        component.update();
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                sortable: false,
                computedWidth: 50,
                type: 'text',
            },
            {
                field: 'number',
                sortable: true,
                computedWidth: 50,
                type: 'text',
            },
        ]);
    });
    it('should update the columns state when add a column and showCheckboxColumn is passed', () => {
        const component = mount(
            <Table data={data} keyField="name" showCheckboxColumn>
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
                type: 'text',
            },
        ]);
        component.setProps({
            children: [<Column field="name" header="Name" />, <Column field="number" sortable />],
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
                type: 'text',
            },
            {
                field: 'number',
                sortable: true,
                computedWidth: 50,
                type: 'text',
            },
        ]);
    });
    it('should not update the columns state when the props changed are others than children', () => {
        const columnsState = [
            {
                field: 'name',
                header: 'Name',
                sortable: false,
                computedWidth: 50,
                type: 'text',
            },
        ];
        const component = mount(
            <Table data={data} keyField="name">
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
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(100);
        resizeBar.at(0).simulate('mousedown', { clientX: 100 });

        eventMap.mousemove({ clientX: 232, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(232);
    });
    it('should store the right columns in state when resize a column', () => {
        const component = mount(
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                computedWidth: 50,
                sortable: false,
                type: 'text',
            },
            {
                field: 'number',
                header: 'Number',
                computedWidth: 50,
                sortable: false,
                type: 'text',
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
                type: 'text',
            },
            {
                field: 'number',
                header: 'Number',
                computedWidth: 50,
                sortable: false,
                type: 'text',
            },
        ]);
    });
    it('should set the right table width when resize for second time', () => {
        const component = mount(
            <Table data={data} keyField="name">
                <Column field="name" header="Name" />
                <Column field="number" header="Number" />
            </Table>,
        );
        const resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(100);

        resizeBar.at(0).simulate('mousedown', { clientX: 60 });
        eventMap.mousemove({ clientX: 120, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(160);

        resizeBar.at(0).simulate('mousedown', { clientX: 120 });
        eventMap.mousemove({ clientX: -10, preventDefault });
        eventMap.mouseup({ preventDefault });
        expect(component.state().tableWidth).toBe(100);
    });
    it('should call onSort with the right data when a sortable column header is clicked', () => {
        const onSortMock = jest.fn();
        const component = mount(
            <Table data={data} keyField="name" onSort={onSortMock}>
                <Column field="name" header="Name" sortable />
                <Column field="number" header="Number" />,
            </Table>,
        );
        const tableHeader = component.find('div.rainbow-table_header-container');
        tableHeader.at(0).simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });
    it('should not call onSort when a non sortable column header is clicked', () => {
        const onSortMock = jest.fn();
        const component = mount(
            <Table data={data} keyField="name" onSort={onSortMock}>
                <Column field="name" header="Name" sortable />
                <Column field="number" header="Number" />,
            </Table>,
        );
        const tableHeader = component.find('div.rainbow-table_header-container');
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
                keyField="name"
                onSort={onSortMock}
                defaultSortDirection="desc"
                sortDirection={sortDirection}
                sortedBy={sortedBy}
            >
                <Column field="name" header="Name" sortable />
            </Table>,
        );
        const tableHeader = component.find('div.rainbow-table_header-container');
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
                keyField="id"
            >
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
            <Table data={tableData} maxRowSelection={1} showCheckboxColumn keyField="id">
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
            <Table data={tableData} showCheckboxColumn keyField="id">
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.state().bulkSelection).toBe('none');
    });
    it('should set the bulkSelection initially to "some" when there are one row selected', () => {
        const component = mount(
            <Table data={tableData} selectedRows={['1234qwerty']} showCheckboxColumn keyField="id">
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
                keyField="id"
            >
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
                keyField="id"
            >
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
            <Table data={tableData} showCheckboxColumn selectedRows={['1234qwerty']} keyField="id">
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
    it('should fire onRowSelection with new selected data when change the selectedRows', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                onRowSelection={onRowSelectionMockFn}
                selectedRows={['1234qwerty']}
                keyField="id"
            >
                <Column field="name" header="Name" />
            </Table>,
        );
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
        });
        component.setProps({
            selectedRows: ['1234qwerty', '9012zxcvbn'],
        });
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '9012zxcvbn': true,
        });
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            { id: '1234qwerty', name: 'Pepe' },
            { id: '9012zxcvbn', name: 'Josep' },
        ]);
    });
    it('should call onRowSelection with the right data when select all rows and there are selected rows', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty']}
                onRowSelection={onRowSelectionMockFn}
                keyField="id"
            >
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
        const headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
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
                keyField="id"
            >
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
        const headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
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
                keyField="id"
            >
                <Column field="name" header="Name" />
            </Table>,
        );
        const checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(2);
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
                keyField="id"
            >
                <Column field="name" header="Name" />
            </Table>,
        );
        const firstCheckbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(0);
        const lastCheckbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(2);
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
                keyField="id"
            >
                <Column field="name" header="Name" />
            </Table>,
        );
        const radio = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
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
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'John',
                id: '5678asdfgh',
            },
        ]);
    });
    it('should call onRowSelection with the right data when deselect a single row', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                selectedRows={['1234qwerty', '5678asdfgh']}
                onRowSelection={onRowSelectionMockFn}
                keyField="id"
            >
                <Column field="name" header="Name" />
            </Table>,
        );
        const checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(0);
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
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                id: '5678asdfgh',
                name: 'John',
            },
        ]);
        expect(component.instance().lastSelectedRowKey).toBe('1234qwerty');
    });
    it('should set the right indexes when data prop changes', () => {
        const component = mount(
            <Table data={[]} showCheckboxColumn keyField="id">
                <Column field="name" header="Name" />
            </Table>,
        );
        component.setProps({
            data: tableData,
        });
        expect(component.instance().indexes).toEqual({
            '1234qwerty': { rowIndex: 0 },
            '5678asdfgh': { rowIndex: 1 },
            '9012zxcvbn': { rowIndex: 2 },
        });
    });
    it('should set the right state when data prop changes', () => {
        const component = mount(
            <Table data={[]} showCheckboxColumn keyField="id">
                <Column field="name" header="Name" />
            </Table>,
        );
        component.setProps({
            data: tableData,
        });
        const { state } = component.instance();
        expect(state.rows).toEqual([
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
        expect(state.bulkSelection).toBe('none');
    });
    it('should set the right state when data prop changes and have selected rows', () => {
        const component = mount(
            <Table data={[]} showCheckboxColumn selectedRows={['5678asdfgh']} keyField="id">
                <Column field="name" header="Name" />
            </Table>,
        );
        component.setProps({
            data: tableData,
        });
        const { state } = component.instance();
        expect(state.rows).toEqual([
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
        expect(state.bulkSelection).toBe('some');
    });
    it('should set the initial selectedRowsKeys to empty object when not pass selectedRows', () => {
        const component = mount(
            <Table data={tableData} showCheckboxColumn keyField="id">
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        expect(component.instance().selectedRowsKeys).toEqual({});
    });
    it('should set the right initial selectedRowsKeys when pass selectedRows', () => {
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                keyField="id"
                selectedRows={['1234qwerty', '5678asdfgh', 'wrong-key']}
            >
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '5678asdfgh': true,
        });
    });
    it('should not reset selectedRowsKeys state when pass new data prop', () => {
        const component = mount(
            <Table data={tableData} showCheckboxColumn keyField="id">
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        const checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
        checkbox.simulate('click');
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
        component.setProps({
            data: [
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
            ],
        });
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
    });
    it('should fire onRowSelection when pass new data prop that does not contains prev selected data', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                onRowSelection={onRowSelectionMockFn}
                keyField="id"
            >
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        const checkbox2 = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
        checkbox2.simulate('click');
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
        expect(onRowSelectionMockFn.mock.calls[0][0]).toEqual([
            {
                id: '5678asdfgh',
                name: 'John',
            },
        ]);
        component.setProps({
            data: [
                {
                    name: 'Pepe',
                    id: '1234qwerty',
                },
                {
                    name: 'Josep',
                    id: '9012zxcvbn',
                },
            ],
        });
        expect(component.instance().selectedRowsKeys).toEqual({});
        expect(onRowSelectionMockFn.mock.calls[1][0]).toEqual([]);
    });
    it('should not change bulkSelection state when select all rows and then pass new data prop that remove one row', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table
                data={tableData}
                showCheckboxColumn
                onRowSelection={onRowSelectionMockFn}
                keyField="id"
            >
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        const headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
        headCheckbox.simulate('click');
        expect(component.state('bulkSelection')).toBe('all');
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '5678asdfgh': true,
            '9012zxcvbn': true,
        });
        component.setProps({
            data: [
                {
                    name: 'Pepe',
                    id: '1234qwerty',
                },
                {
                    name: 'Josep',
                    id: '9012zxcvbn',
                },
            ],
        });
        expect(component.state('bulkSelection')).toBe('all');
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '9012zxcvbn': true,
        });
    });
    it('should not fire onRowSelection when set data and selectedRows after mount the component', () => {
        const onRowSelectionMockFn = jest.fn();
        const component = mount(
            <Table data={[]} showCheckboxColumn onRowSelection={onRowSelectionMockFn} keyField="id">
                <Column field="name" header="Name" />
                <Column field="id" header="ID" />
            </Table>,
        );
        component.setProps({
            data: tableData,
            selectedRows: ['1234qwerty', '5678asdfgh', '9012zxcvbn'],
        });
        expect(onRowSelectionMockFn).not.toHaveBeenCalled();
    });
    it('should set input type to "checkbox" when there is only one row', () => {
        const singleData = [{ name: 'John Doe' }];
        const component = mount(
            <Table keyField="id" data={singleData} showCheckboxColumn>
                <Column field="name" header="Name" />
            </Table>,
        );
        const input = component.find('Input[label="select row"]').find('input');
        expect(input.prop('type')).toBe('checkbox');
    });
});
