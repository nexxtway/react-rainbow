import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import AvatarMenu from '..';
import MenuItem from '../../MenuItem';
import MenuDivider from '../../MenuDivider';

describe('<AvatarMenu/>', () => {
    it('should be accessible when pass assistiveText', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <AvatarMenu assistiveText="some description">
                <MenuItem label="item 1" />
                <MenuDivider />
                <MenuItem label="item 2" />
            </AvatarMenu>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when pass title', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <AvatarMenu title="some description">
                <MenuItem label="item 1" />
            </AvatarMenu>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
