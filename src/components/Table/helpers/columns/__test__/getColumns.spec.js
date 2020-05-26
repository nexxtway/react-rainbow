import React from 'react';
import Column from '../../../../Column';
import getColumns from '../getColumns';

jest.mock('../../../helpers/columns/getEnumerableWidth', () => jest.fn(() => 50));

describe('getColumns', () => {
    it('should return null when children is null, showCheckboxColumn is false and showRowNumberColumn is false', () => {
        const children = null;
        const showCheckboxColumn = false;
        const showRowNumberColumn = false;
        expect(getColumns({ children, showCheckboxColumn, showRowNumberColumn })).toBeNull();
    });
    it('should return an empty array when children is not passed, showCheckboxColumn is false and showRowNumberColumn is false', () => {
        const children = undefined;
        const showCheckboxColumn = false;
        const showRowNumberColumn = false;
        expect(getColumns({ children, showCheckboxColumn, showRowNumberColumn })).toEqual([]);
    });
    it('should return an empty array when children is an array with falsy values, showCheckboxColumn is false and showRowNumberColumn is false', () => {
        const children = [null, undefined];
        const showCheckboxColumn = false;
        const showRowNumberColumn = false;
        expect(getColumns({ children, showCheckboxColumn, showRowNumberColumn })).toEqual([]);
    });
    it('should return an array with the columns props when showCheckboxColumn is false and showRowNumberColumn is false', () => {
        const children = [<Column field="a" header="header" component={<span />} />];
        const showCheckboxColumn = false;
        const showRowNumberColumn = false;
        expect(getColumns({ children, showCheckboxColumn, showRowNumberColumn })).toEqual([
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
    it('should return an array with the columns props, plus the selectable column when showCheckboxColumn is true', () => {
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
    it('should return an array with the columns props, plus the enumerable column data including enumerable offset value when showRowNumberColumn is true and rowNumberOffset is set', () => {
        const children = [<Column field="a" header="header" component={<span />} />];
        const showRowNumberColumn = true;
        const rowNumberOffset = 333;
        expect(getColumns({ children, showRowNumberColumn, rowNumberOffset })).toEqual([
            {
                type: 'WITH_ENUMERABLE',
                rowNumberOffset: 333,
                width: 50,
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
    it('should return an array with the columns props, plus the enumerable and the selectable columns when showCheckboxColumn and showRowNumberColumn are true', () => {
        const children = [<Column field="a" header="header" component={<span />} />];
        const showCheckboxColumn = true;
        const showRowNumberColumn = true;
        const rowNumberOffset = 0;
        expect(
            getColumns({ children, showCheckboxColumn, showRowNumberColumn, rowNumberOffset }),
        ).toEqual([
            {
                type: 'WITH_ENUMERABLE',
                rowNumberOffset: 0,
                width: 50,
            },
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
