import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import GoogleAddressLookup from '..';

describe('<GoogleAddressLookup/>', () => {
    it('should be accessible', async () => {
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
