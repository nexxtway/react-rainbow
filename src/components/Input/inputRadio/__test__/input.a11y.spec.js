import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import InputRadio from '../';

describe('<InputRadio/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<InputRadio label="Input Label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
