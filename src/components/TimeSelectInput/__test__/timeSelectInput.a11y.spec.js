import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TimeSelectInput from '..';

describe('<TimeSelectInput/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TimeSelectInput id="time-select-input-1" value="18:35" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
