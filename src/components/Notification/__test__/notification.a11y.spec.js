import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Notification from '..';
import Avatar from './../../Avatar';

describe('<Notification/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Notification
                hideCloseButton
                title="Notification title"
                description="This is the Notification description"
                icon={<Avatar src="images/user/user1.jpg" assistiveText="user photo" />}
            />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
