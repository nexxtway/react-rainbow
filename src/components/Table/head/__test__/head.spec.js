import React from 'react';
import { mount } from 'enzyme';
import Head from '../';

describe('<Head />', () => {
    it('should return an array of Header elements', () => {
        const columns = [
            { header: 'header', field: 'name', width: 200, defaultWidth: 100 },
            { header: 'header-2', field: 'email' },
        ];
        const onResizeMockFn = jest.fn();
        const onSortMockFn = jest.fn();
        const component = mount(
            <Head
                columns={columns}
                onResize={onResizeMockFn}
                defaultSortDirection="asc"
                onSort={onSortMockFn} />,
        );
        const head = component.find('Header');

        expect(head.length).toBe(2);
        expect(head.get(0).props).toEqual({
            content: 'header',
            sortable: false,
            isSelected: false,
            sortDirection: 'asc',
            minColumnWidth: 50,
            maxColumnWidth: 1000,
            width: 200,
            defaultWidth: 100,
            onResize: onResizeMockFn,
            onSort: onSortMockFn,
            columnIndex: 0,
            resizeGuideLineHeight: 0,
            resizeColumnDisabled: false,
        });
    });
    it('should return null if no columns is passed', () => {
        const component = mount(<Head columns={[]} />);
        expect(component.children().length).toBe(0);
    });
});
