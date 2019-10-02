import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Lookup from '..';

describe('<Lookup/>', () => {
    // TODO:
    // The accessibility test using axe core get the
    // following violation:
    // "ARIA input fields have an accessible name (aria-input-field-name)"

    it.skip('should be accessible when the value typed do not match', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Lookup label="Place of Birth" value="London" />,
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
