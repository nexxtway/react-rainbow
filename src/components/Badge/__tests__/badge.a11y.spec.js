import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Badge from '..';

describe('<Badge/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Badge label="badge text" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when text is passed as children', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Badge>badge text</Badge>);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
