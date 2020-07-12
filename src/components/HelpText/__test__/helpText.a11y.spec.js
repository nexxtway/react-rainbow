import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import HelpText from '../';

describe('<HelpText />', () => {
    it('should be accessible when text is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<HelpText text="Help Test" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
