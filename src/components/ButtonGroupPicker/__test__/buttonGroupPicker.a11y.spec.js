import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ButtonGroupPicker from '../index';
import ButtonOption from '../../ButtonOption/index';

describe('<ButtonGroupPicker />', () => {
    it('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ButtonGroupPicker label="button text">
                <ButtonOption label="Left" name="left" disabled />
                <ButtonOption label="Center" name="center" />
                <ButtonOption label="Right" name="right" />
            </ButtonGroupPicker>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
