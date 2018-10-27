import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import React from 'react';
import Pagination from '../';

describe('<Pagination/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Pagination pages={5} activePage={3} />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
