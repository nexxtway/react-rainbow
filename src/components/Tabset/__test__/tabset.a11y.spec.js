import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Tabset from './../';
import Tab from '../../Tab';

describe('<Tabset/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Tabset activeTabName="tab-1">
                <Tab label="tab 1" name="tab-1" />
                <Tab label="tab 2" name="tab-2" />
                <Tab label="tab 3" name="tab-3" />
            </Tabset>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
