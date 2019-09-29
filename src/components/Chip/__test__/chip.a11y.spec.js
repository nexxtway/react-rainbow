import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Chip from '..';

describe('<Chip/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Chip label="Chip Neutral" variant="neutral" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
