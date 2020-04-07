import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import BadgeOverlay from '..';

describe('<BadgeOverlay/>', () => {
    it('should be accessible when a children is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <BadgeOverlay>
                <div />
            </BadgeOverlay>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
