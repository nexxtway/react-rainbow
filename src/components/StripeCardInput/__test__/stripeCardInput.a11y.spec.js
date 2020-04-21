import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import StripeCardInput from './../';

describe('<StripeCardInput/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <StripeCardInput apiKey="STRIPE_API_KEY" isScriptLoaded isScriptLoadSucceed />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
