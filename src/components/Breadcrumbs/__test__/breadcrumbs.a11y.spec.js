import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Breadcrumbs from './../';
import Breadcrumb from '../../Breadcrumb';

describe('<Breadcrumbs/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Breadcrumbs>
                <Breadcrumb label="tab 1" />
                <Breadcrumb label="tab 2" />
                <Breadcrumb label="tab 3" />
            </Breadcrumbs>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
