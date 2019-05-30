import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import RadioButtonGroup from '../index';

const options = [
    { value: 'radioOne', label: 'Radio One' },
    { value: 'radioTwo', label: 'Radio Two' },
    { value: 'radioThree', label: 'Radio Three' },
];

describe('<RadioButtonGroup/>', () => {
    it('should be accessible when both all options and the group have a label', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <RadioButtonGroup label="RadioButtonGroup Label" options={options} />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
