import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../../ActivityTimeline';
import TimelineMarker from '../index';
import Card from '../../Card';
import Avatar from '../../Avatar';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';

describe('<TimelineMarker/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker>
                    <Card title="TimelineMarker--children" />
                </TimelineMarker>
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should render the icon passed', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker icon={<Avatar />} />
            </ActivityTimeline>,
        );
        expect(component.find(Avatar).exists()).toBe(true);
    });
    it('should render the calendar icon by default', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker />
            </ActivityTimeline>,
        );
        expect(component.find('CalendarIcon').exists()).toBe(true);
    });
    it('should render the label passed', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker label="testing label on TimelineMarker" />
            </ActivityTimeline>,
        );
        expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
    });
    it('should render the datetime passed', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker datetime="Yesterday" />
            </ActivityTimeline>,
        );
        expect(component.find(StyledDatetime).text()).toBe('Yesterday');
    });
    it('should render the description passed', () => {
        const component = mount(
            <ActivityTimeline>
                <TimelineMarker description="testing description on TimelineMarker" />,
            </ActivityTimeline>,
        );
        expect(component.find(StyledDescription).text()).toBe(
            'testing description on TimelineMarker',
        );
    });
});
