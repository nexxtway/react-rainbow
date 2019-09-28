import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ProgressCircular from '..';

describe('<ProgressCircular/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ProgressCircular value="100" variant="success" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
