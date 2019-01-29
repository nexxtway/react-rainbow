import React from 'react';
import Column from '../../Column';
import getColumns from '../getColumns';

describe('getColumns', () => {
    it('should return an array with the columns props', () => {
        const children = [
            <Column field="a" header="header" component={<span />} />,
        ];
        const columns = getColumns(children);
        expect(columns).toEqual([{
            field: 'a',
            header: 'header',
            component: <span />,
            sortable: false,
            width: undefined,
        }]);
    });
});
