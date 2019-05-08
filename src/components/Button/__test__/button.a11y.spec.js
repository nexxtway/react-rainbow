import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Button from './../';

describe('<Button/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Button label="button text" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when text is passed as children', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Button>button text</Button>);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
