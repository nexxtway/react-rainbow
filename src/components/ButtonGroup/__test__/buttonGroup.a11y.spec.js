import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Button from '../../Button';
import ButtonGroup from '..';

describe('<ButtonGroup/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ButtonGroup>
                <Button label="click me" />
            </ButtonGroup>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
