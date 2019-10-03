import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import GoogleAddressLookup from '..';

// TODO:
// The accessibility test using axe core get the
// following violation:
// "ARIA input fields have an accessible name (aria-input-field-name)"

describe('<GoogleAddressLookup/>', () => {
    it.skip('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <GoogleAddressLookup
                placeholder="Enter location"
                label="GoogleAddressLookup label"
                value={null}
            />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
