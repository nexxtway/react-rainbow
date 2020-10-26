import ReactDOMServer from 'react-dom/server';
import React from 'react';
import axe from '../../../../axe';
import Pagination from '..';

describe('<Pagination/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Pagination pages={5} activePage={3} />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
