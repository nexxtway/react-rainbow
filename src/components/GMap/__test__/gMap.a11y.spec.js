import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import GMap from '..';
import MapMarker from '../../MapMarker';

describe('<GMap/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <GMap zoom={10} latitude={-33.836538} longitude={151.1279} header="Title">
                <MapMarker
                    latitude={-33.941264}
                    longitude={151.2042969}
                    label="Botany Bay"
                    description=" Botany, New South Wales, Australia"
                />
            </GMap>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
