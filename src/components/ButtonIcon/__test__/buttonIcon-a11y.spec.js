import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ButtonIcon from './../';

describe('<ButtonIcon/>', () => {
    it('should be accessible when pass assistiveText', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ButtonIcon assistiveText="some description">
                <svg />
            </ButtonIcon>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
