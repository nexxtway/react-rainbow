import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import PresenceMap from '..';

describe('<PresenceMap/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<PresenceMap />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
