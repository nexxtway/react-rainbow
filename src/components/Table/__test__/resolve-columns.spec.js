import React from 'react';
import Column from '../../Column';
import resolveColumns from '../resolve-columns';

describe('resolveColumns', () => {
    it('should return an array with the columns props', () => {
        const children = [
            <Column field="a" header="header" component={<span />} />,
        ];

        const columns = resolveColumns(children);
        expect(columns).toEqual([{
            field: 'a',
            header: 'header',
            component: <span />,
            sortable: true,
            width: undefined,
        }]);
    });
});
