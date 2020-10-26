import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../../axe';
import StepFour from '..';

describe('<StepFour on ImportRecordsFlow/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<StepFour />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
