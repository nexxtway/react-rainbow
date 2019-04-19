import React from 'react';
import Column from '../../../../Column';
import getColumns from '../getColumns';

describe('getColumns', () => {
    it('should return null when columns is null and hideCheckboxColumn is true', () => {
        const columns = null;
        const hideCheckboxColumn = true;
        expect(getColumns(columns, hideCheckboxColumn)).toBeNull();
    });
    it('should return an empty array when columns is an array with falsy values and hideCheckboxColumn is true', () => {
        const columns = [null, undefined];
        const hideCheckboxColumn = true;
        expect(getColumns(columns, hideCheckboxColumn)).toEqual([]);
    });
    it('should return an array with the columns props when hideCheckboxColumn is true', () => {
        const columns = [
            <Column field="a" header="header" component={<span />} />,
        ];
        const hideCheckboxColumn = true;
        expect(getColumns(columns, hideCheckboxColumn)).toEqual([{
            field: 'a',
            header: 'header',
            component: <span />,
            sortable: false,
            width: undefined,
        }]);
    });
    it('should return an array with the columns props plus the selectable column when hideCheckboxColumn is false', () => {
        const columns = [
            <Column field="a" header="header" component={<span />} />,
        ];
        const hideCheckboxColumn = false;
        expect(getColumns(columns, hideCheckboxColumn)).toEqual([
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
