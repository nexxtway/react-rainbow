import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Table from '..';
import Column from '../../Column';
import Badge from '../../Badge';

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
];

const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" />;

StatusBadge.propTypes = {
    value: PropTypes.string,
};

StatusBadge.defaultProps = {
    value: undefined,
};

describe('<Table/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Table keyField="id" showCheckboxColumn data={data}>
                <Column header="Name" field="name" />
                <Column header="Status" field="status" component={StatusBadge} />
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
            </Table>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
