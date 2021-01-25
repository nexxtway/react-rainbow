import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../../ActivityTimeline';
import AccordionTimelineMarker from '../accordionMarker';
import Avatar from '../../Avatar';
import ButtonIcon from '../../ButtonIcon';
import Card from '../../Card';
import Spinner from '../../Spinner';
import ExpandCollapseButton from '../expandCollapseButton';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';

describe('<AccordionTimelineMarker/>', () => {
    it('should not render the children passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker>
                    <Card title="TimelineMarker--children" />
                </AccordionTimelineMarker>
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(false);
    });
    it('should not render the children passed when expanded', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker>
                    <Card title="TimelineMarker--children" />
                </AccordionTimelineMarker>
            </ActivityTimeline>,
        );
        component
            .find(ButtonIcon)
            .at(0)
            .simulate('click');
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should render the icon passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker icon={<Avatar />} />
            </ActivityTimeline>,
        );
        expect(component.find(Avatar).exists()).toBe(true);
    });
    it('should render the calendar icon by default', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker />
            </ActivityTimeline>,
        );
        expect(component.find('CalendarIcon').exists()).toBe(true);
    });
    it('should render the label passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker label="testing label on TimelineMarker" />
            </ActivityTimeline>,
        );
        expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
    });
    it('should render the datetime passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker datetime="Yesterday" />
            </ActivityTimeline>,
        );
        expect(component.find(StyledDatetime).text()).toBe('Yesterday');
    });
    it('should render the description passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker description="testing description on TimelineMarker" />,
            </ActivityTimeline>,
        );
        expect(component.find(StyledDescription).text()).toBe(
            'testing description on TimelineMarker',
        );
    });
    it('should render an expand button when containing ActivityTimeline variant is accordion', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker />
            </ActivityTimeline>,
        );
        expect(component.find(ExpandCollapseButton).exists()).toBe(true);
    });
    it('should render a loading spinner when containing ActivityTimeline variant is accordion and isLoading prop is passed', () => {
        const component = mount(
            <ActivityTimeline variant="accordion">
                <AccordionTimelineMarker isLoading />
            </ActivityTimeline>,
        );
        expect(component.find(Spinner).exists()).toBe(true);
    });
});
