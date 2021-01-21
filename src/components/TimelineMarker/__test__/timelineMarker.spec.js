import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../../ActivityTimeline';
import TimelineMarker from '../index';
import BasicTimelineMarker from '../basicMarker';
import AccordionTimelineMarker from '../accordionMarker';

describe('<TimelineMarker/>', () => {
    it('should render a basic marker', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker />
            </ActivityTimeline>,
        );
        expect(component.find(BasicTimelineMarker).exists()).toBe(true);
        expect(component.find(AccordionTimelineMarker).exists()).toBe(false);
    });
    it('should render an accordion marker when variant is accordion', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <TimelineMarker isLoading />
            </ActivityTimeline>,
        );
        expect(component.find(BasicTimelineMarker).exists()).toBe(false);
        expect(component.find(AccordionTimelineMarker).exists()).toBe(true);
    });
});
