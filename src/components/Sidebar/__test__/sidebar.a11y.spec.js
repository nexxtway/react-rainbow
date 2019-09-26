import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Sidebar from '..';
import SidebarItem from '../../SidebarItem';

describe('<Sidebar/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Sidebar selectedItem="User 1">
                <SidebarItem
                    icon={<img alt="user-1" src="images/user/user1.jpg" />}
                    name="User 1"
                    label="User 1"
                />
                <SidebarItem
                    icon={<img alt="user-1" src="images/user/user2.jpg" />}
                    name="User 2"
                    label="User 2"
                />
                <SidebarItem
                    icon={<img alt="user-1" src="images/user/user3.jpg" />}
                    name="User 3"
                    label="User 3"
                />
                <SidebarItem
                    icon={<img alt="user-1" src="images/user/user4.jpg" />}
                    name="User 4"
                    label="User 4"
                />
            </Sidebar>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
