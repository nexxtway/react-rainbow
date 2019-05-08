import React from 'react';
import Dataset from '../../Dataset';
import resolveDatasets from '../resolveDatasets';

describe('resolveDatasets function', () => {
    it('should return the dataset array with all the data', () => {
        const children = [
            <Dataset
                type="line"
                values={[34, 23, 46]}
                title="Dataset 1"
                backgroundColor="red"
                borderColor="blue"
                stack="A"
                fill
            />,
        ];
        const datasets = resolveDatasets(children);
        expect(datasets).toEqual([
            {
                data: [34, 23, 46],
                label: 'Dataset 1',
                type: 'line',
                backgroundColor: 'red',
                borderColor: 'blue',
                stack: 'A',
                fill: true,
            },
        ]);
    });
});
