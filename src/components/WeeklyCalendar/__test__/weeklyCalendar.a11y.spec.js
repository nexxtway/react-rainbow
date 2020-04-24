import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import WeekyCalendar from '..';

describe('<WeekyCalendar />', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<WeekyCalendar />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
