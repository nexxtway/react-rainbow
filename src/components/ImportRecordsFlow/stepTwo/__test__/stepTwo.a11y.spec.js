import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import StepTwo from '../../stepTwo';

describe('<StepTwo on ImportRecordsFlow/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<StepTwo />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when has file selected', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<StepTwo hasFileSelected />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
