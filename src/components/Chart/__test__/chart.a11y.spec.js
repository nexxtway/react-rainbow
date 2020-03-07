import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import { Chart } from '..';
import Dataset from '../../Dataset';

describe('<Chart/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset title="Dataset 1" values={[23, 45, 123, 56]} />
                <Dataset title="Dataset 2" values={[66, 100, 30, 156]} />
            </Chart>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
