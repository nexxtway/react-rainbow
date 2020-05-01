import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import WeekDayPicker from '../index';

describe('<WeekDayPicker />', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <WeekDayPicker label="Accesibility test on WeekDayPicker" value="monday" />,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
