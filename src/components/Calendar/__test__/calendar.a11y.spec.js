import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Calendar from '..';

describe('<Calendar/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Calendar />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });

    it('should be accessible when variant is double', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Calendar variant="double" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
