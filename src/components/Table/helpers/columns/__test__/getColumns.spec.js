import React from 'react';
import Column from '../../../../Column';
import getColumns from '../getColumns';

describe('getColumns', () => {
    it('should return null when children is null and showCheckboxColumn is false', () => {
        const children = null;
        const showCheckboxColumn = false;
        expect(getColumns({ children, showCheckboxColumn })).toBeNull();
    });
    it('should return an empty array when children is not passed', () => {
        const children = undefined;
        const showCheckboxColumn = false;
        expect(getColumns({ children, showCheckboxColumn })).toEqual([]);
    });
    it('should return an empty array when children is an array with falsy values and showCheckboxColumn is false', () => {
        const children = [null, undefined];
        const showCheckboxColumn = false;
        expect(getColumns({ children, showCheckboxColumn })).toEqual([]);
    });
    it('should return an array with the columns props when showCheckboxColumn is false', () => {
        const children = [<Column field="a" header="header" component={<span />} />];
        const showCheckboxColumn = false;
        expect(getColumns({ children, showCheckboxColumn })).toEqual([
            {
                field: 'a',
                header: 'header',
                component: <span />,
                sortable: false,
                type: 'text',
                width: undefined,
            },
        ]);
    });
    it('should return an array with the columns props plus the selectable column when showCheckboxColumn is true', () => {
        const children = [<Column field="a" header="header" component={<span />} />];
        const showCheckboxColumn = true;
        expect(getColumns({ children, showCheckboxColumn })).toEqual([
            {
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'a',
                header: 'header',
                component: <span />,
                sortable: false,
                type: 'text',
                width: undefined,
            },
        ]);
    });
    it('should return an array with the right columns props when one column is type "action"', () => {
        const children = [
            <Column field="a" header="header" component={<span />} />,
            <Column type="action" />,
        ];
        const showCheckboxColumn = false;
        expect(getColumns({ children, showCheckboxColumn })).toEqual([
            {
                field: 'a',
                header: 'header',
                component: <span />,
                sortable: false,
                type: 'text',
                width: undefined,
            },
            {
                sortable: false,
                type: 'action',
                width: 75,
            },
        ]);
    });
    it('should return an array with the right columns props when defaultWidth and width are passed', () => {
        const children = [
            <Column
                field="a"
                header="header a"
                defaultWidth={160}
                width={30}
                component={<span />}
            />,
            <Column field="b" header="header b" defaultWidth={30} />,
        ];
        const showCheckboxColumn = false;
        const minColumnWidth = 150;
        expect(getColumns({ children, showCheckboxColumn, minColumnWidth })).toEqual([
            {
                field: 'a',
                header: 'header a',
                component: <span />,
                sortable: false,
                type: 'text',
                defaultWidth: 160,
                width: 30,
            },
            {
                field: 'b',
                header: 'header b',
                sortable: false,
                type: 'text',
                defaultWidth: 150,
            },
        ]);
    });
    it('should return an array with the right columns props when defaultWidth is passed and is out of range', () => {
        const children = [
            <Column field="a" header="header a" defaultWidth={160} component={<span />} />,
            <Column field="b" header="header b" defaultWidth={30} />,
        ];
        const showCheckboxColumn = false;
        const minColumnWidth = 50;
        const maxColumnWidth = 150;
        expect(
            getColumns({
                children,
                showCheckboxColumn,
                minColumnWidth,
                maxColumnWidth,
            }),
        ).toEqual([
            {
                field: 'a',
                header: 'header a',
                component: <span />,
                sortable: false,
                type: 'text',
                defaultWidth: 150,
            },
            {
                field: 'b',
                header: 'header b',
                sortable: false,
                type: 'text',
                defaultWidth: 50,
            },
        ]);
    });
});
