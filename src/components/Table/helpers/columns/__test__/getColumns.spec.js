import React from 'react';
import Column from '../../../../Column';
import getColumns from '../getColumns';

describe('getColumns', () => {
    it('should return null when columns is null and showCheckboxColumn is false', () => {
        const columns = null;
        const showCheckboxColumn = false;
        expect(getColumns(columns, showCheckboxColumn)).toBeNull();
    });
    it('should return an empty array when columns is an array with falsy values and showCheckboxColumn is false', () => {
        const columns = [null, undefined];
        const showCheckboxColumn = false;
        expect(getColumns(columns, showCheckboxColumn)).toEqual([]);
    });
    it('should return an array with the columns props when showCheckboxColumn is false', () => {
        const columns = [
            <Column field="a" header="header" component={<span />} />,
        ];
        const showCheckboxColumn = false;
        expect(getColumns(columns, showCheckboxColumn)).toEqual([{
            field: 'a',
            header: 'header',
            component: <span />,
            sortable: false,
            width: undefined,
        }]);
    });
    it('should return an array with the columns props plus the selectable column when showCheckboxColumn is true', () => {
        const columns = [
            <Column field="a" header="header" component={<span />} />,
        ];
        const showCheckboxColumn = true;
        expect(getColumns(columns, showCheckboxColumn)).toEqual([
            {
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'a',
                header: 'header',
                component: <span />,
                sortable: false,
                width: undefined,
            },
        ]);
    });
});
