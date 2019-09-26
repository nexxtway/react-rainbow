import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import DatePicker from '..';

describe('<DatePicker/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <DatePicker value={new Date('2019-09-26')} label="DatePicker Label" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
