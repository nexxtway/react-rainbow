import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import InputCheckbox from '../';

describe('<InputCheckbox/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<InputCheckbox label="Input Label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
