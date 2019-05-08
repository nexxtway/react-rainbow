import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Input from './../';

describe('<Input/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Input label="Input Label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
