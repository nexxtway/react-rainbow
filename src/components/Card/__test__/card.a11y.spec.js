import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Card from '..';
import Avatar from './../../Avatar';
import Button from './../../Button';

describe('<Card/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Card
                icon={<Avatar src="images/user/user1.jpg" assistiveText="user photo" />}
                title="Contact details"
                actions={<Button variant="neutral" label="New" />}
            />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
