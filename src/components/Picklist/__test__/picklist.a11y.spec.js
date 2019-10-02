import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Picklist from '..';
import PicklistOption from './../../PicklistOption';

// TODO:
// The accessibility test using axe core get the
// following violation:
// "ARIA input fields have an accessible name (aria-input-field-name)"

describe('<Picklist/>', () => {
    it.skip('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Picklist
                name="Picklist testing a11y"
                title="Picklist testing a11y"
                label="Select Building"
                hideLabel
                assistiveText="Picklist"
                value={{ name: 'option 1', label: 'Experimental Building' }}
            >
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option 1" label="Experimental Building" />
            </Picklist>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
