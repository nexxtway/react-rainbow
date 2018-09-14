import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Avatar from './../';

describe('<Avatar/>', () => {
    it('should be accessible when a src and assistiveText are passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Avatar src="images/user/user1.jpg" assistiveText="user photo" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
