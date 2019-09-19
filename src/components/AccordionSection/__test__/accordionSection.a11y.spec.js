import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Accordion from '../../Accordion';
import AccordionSection from '..';

describe('<AccordionSection/>', () => {
    it('should be accessible when assistiveText is passed', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <Accordion>
                <AccordionSection assistiveText="first section" label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </AccordionSection>
            </Accordion>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
