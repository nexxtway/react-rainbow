import React from 'react';
import Column from '../../Column';
import resolveColumns from '../resolve-columns';

describe('resolveColumns', () => {
    it('should return an array with all the data', () => {
        const children = [
            <Column field="a" header="header" />,
        ];

        const columns = resolveColumns(children);
        expect(columns).toEqual([{
            field: 'a',
            header: 'header',
            component: undefined,
        }]);
    });
});
