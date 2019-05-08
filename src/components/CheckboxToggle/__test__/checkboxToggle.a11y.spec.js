import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import CheckboxToggle from './../';

describe('<CheckboxToggle/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<CheckboxToggle label="Toggle label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
