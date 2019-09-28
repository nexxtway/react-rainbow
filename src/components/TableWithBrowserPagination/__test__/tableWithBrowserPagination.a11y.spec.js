import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TableWithBrowserPagination from '..';

const data = [
    { name: 'Leandro Torres' },
    { name: 'JL Torres' },
    { name: 'Reinier' },
    { name: 'Sara' },
    { name: 'Tahimi L' },
    { name: 'Saray' },
    { name: 'J Leandro Torres' },
    { name: 'Tahimi' },
    { name: 'Sara P' },
    { name: 'Leo Torres' },
    { name: 'Carlos Miguel' },
    { name: 'Juanito' },
    { name: 'Lola' },
    { name: 'Marta' },
];

describe('<TableWithBrowserPagination/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TableWithBrowserPagination keyField="name" data={data} pageSize={5} />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
