import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import PhoneInput from '..';

describe('<PhoneInput/>', () => {
    // TODO: fix united states icon flag has duplicate id usage
    it.skip('should be accessible when label is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<PhoneInput label="Phone Input Label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
