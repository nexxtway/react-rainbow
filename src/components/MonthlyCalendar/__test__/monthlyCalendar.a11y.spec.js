import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import MonthlyCalendar from '..';

describe('<MonthlyCalendar />', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<MonthlyCalendar />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
