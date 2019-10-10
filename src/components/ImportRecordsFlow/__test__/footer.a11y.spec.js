import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import DirectionalFooter from './../footer';

describe('<DirectionalFooter on ImportRecordsFlow/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<DirectionalFooter />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
