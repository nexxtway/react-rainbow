import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ProgressBar from '..';

describe('<ProgressBar/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<ProgressBar value={50} variant="success" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
