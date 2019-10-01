import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Lookup from '..';

describe('<Lookup/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Lookup
                className="rainbow-p-around_medium"
                label="Place of Birth"
                value={{ label: 'Varadero' }}
            />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when a value is selected', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Lookup label="Place of Birth" value={{ label: 'London' }} />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
