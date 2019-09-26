import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import TimePicker from '..';
import TimeSelect from '../timeSelect';

describe('<TimePicker/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TimePicker label="Accessibility test on TimePicker" value="18:35" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});

describe('<TimeSelect/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <TimeSelect label="Accessibility test on TimeSelect" value="18:35" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
