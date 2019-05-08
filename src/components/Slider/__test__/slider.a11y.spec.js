import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Slider from './../';

describe('<Slider/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Slider label="Slider label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
