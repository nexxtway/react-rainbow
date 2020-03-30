import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import MonthCalendar from '..';

describe('<MonthCalendar />', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<MonthCalendar />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
