import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Select from './../';

const options = [
    { value: 'option 1', label: 'option 1' },
    { value: 'option 2', label: 'option 2' },
    { value: 'option 3', label: 'option 3' },
];

describe('<Select/>', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Select label="Select Label" options={options} />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
