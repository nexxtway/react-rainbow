import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TimePicker from '..';

describe('<TimePicker/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TimePicker label="Accessibility test on TimePicker" value="18:35" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
