import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TimeSelect from '../timeSelect';

describe('<TimeSelect/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TimeSelect label="Accessibility test on TimeSelect" value="18:35" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
