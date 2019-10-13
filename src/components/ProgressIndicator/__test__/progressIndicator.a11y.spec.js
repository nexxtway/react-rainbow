import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ProgressIndicator from '..';
import ProgressStep from '../../ProgressStep';

describe('<ProgressIndicator/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ProgressIndicator>
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" />
                <ProgressStep name="step-4" label="Step 4" />
                <ProgressStep name="step-5" label="Step 5" />
            </ProgressIndicator>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when label is not passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ProgressIndicator>
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
                <ProgressStep name="step-4" />
                <ProgressStep name="step-5" />
            </ProgressIndicator>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
