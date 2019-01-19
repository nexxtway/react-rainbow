import React from 'react';
import { mount } from 'enzyme';
import Head from '../';

describe('<Head />', () => {
    it('should return an array of Header elements', () => {
        const columns = [
            { header: 'header', field: 'name' },
            { header: 'header-2', field: 'email' },
        ];
        const columnsWidths = [
            undefined,
            undefined,
        ];
        const onResizeMock = jest.fn();
        const onColumnSelectMock = jest.fn();
        const component = mount(
            <Head
                columns={columns}
                columnsWidths={columnsWidths}
                onResize={onResizeMock}
                defaultSortDirection="asc"
                onColumnSelect={onColumnSelectMock} />,
        );
        const head = component.find('Header');

        expect(head.length).toBe(2);
        expect(head.get(0).props).toEqual({
            content: 'header',
            sortable: false,
            isSelected: false,
            isResizable: true,
            sortDirection: 'asc',
            minColumnWidth: 50,
            maxColumnWidth: 1000,
            width: undefined,
            onResize: onResizeMock,
            onColumnSelect: onColumnSelectMock,
            columnIndex: 0,
            resizeGuideLineHeight: 0,
        });
    });
    it('should return null if no columns is passed', () => {
        const component = mount(<Head columns={[]} />);
        expect(component.children().length).toBe(0);
    });
});
