import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ButtonMenu from './../';
import MenuItem from './../../MenuItem';
import MenuDivider from './../../MenuDivider';

describe('<ButtonMenu/>', () => {
    it('should be accessible when pass assistiveText', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ButtonMenu assistiveText="some description">
                <MenuItem label="item 1" />
                <MenuDivider />
                <MenuItem label="item 2" />
            </ButtonMenu>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when pass title', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ButtonMenu title="some description">
                <MenuItem label="item 1" />
            </ButtonMenu>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
