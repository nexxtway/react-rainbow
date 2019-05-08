import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import CheckboxGroup from './../';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One' },
    { value: 'checkboxTwo', label: 'Checkbox Two' },
    { value: 'checkboxThree', label: 'Checkbox Three' },
];

describe('<CheckboxGroup/>', () => {
    it('should be accessible when all options have a label passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <CheckboxGroup label="Checkbox Group Label" options={options} />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
