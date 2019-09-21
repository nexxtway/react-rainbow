import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import ActivityTimeline from '..';
import TimelineMarker from './../../TimelineMarker';

describe('<ActivityTimeline/>', () => {
    it('should be accessible when label is passed on TimelineMarker', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <ActivityTimeline>
                <TimelineMarker
                    label="User Sign Up."
                    datetime="Yesterday"
                    description="Lorem ipsum dolor sit amet..."
                />
            </ActivityTimeline>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
