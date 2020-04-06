import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TimeRangePicker from '..';

describe('<TimeRangePicker/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<TimeRangePicker id="TimeRangePicker-1" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
