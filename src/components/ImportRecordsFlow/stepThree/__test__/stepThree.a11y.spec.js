import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import StepThree from '..';

describe('<StepThree on ImportRecordsFlow/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<StepThree />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
