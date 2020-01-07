import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import AvatarGroup from '..';

const avatars = [
    {
        src: 'images/user/user1.jpg',
        assistiveText: 'Jose Leandro',
        title: 'Jose Leandro',
    },
    {
        src: 'images/user/user2.jpg',
        assistiveText: 'Tahimi Leon',
        title: 'Tahimi Leon',
    },
    {
        src: 'images/user/user3.jpg',
        assistiveText: 'Carlos Miguel',
        title: 'Carlos Miguel',
    },
    {
        src: 'images/user/user4.jpg',
        assistiveText: 'Jane Doe',
        title: 'Jane Doe',
    },
];

describe('<AvatarGroup/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<AvatarGroup avatars={avatars} />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
