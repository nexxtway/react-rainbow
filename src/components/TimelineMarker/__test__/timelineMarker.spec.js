import React from 'react';
import { mount } from 'enzyme';
import TimelineMarker from '../index';
import Card from '../../Card';
import Avatar from '../../Avatar';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';

describe('<TimelineMarker/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <TimelineMarker>
                <Card title="TimelineMarker--children" />
            </TimelineMarker>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should render the icon passed', () => {
        const component = mount(<TimelineMarker icon={<Avatar />} />);
        expect(component.find(Avatar).exists()).toBe(true);
    });
    it('should render the calendar icon by default', () => {
        const component = mount(<TimelineMarker />);
        expect(component.find('CalendarIcon').exists()).toBe(true);
    });
    it('should render the label passed', () => {
        const component = mount(<TimelineMarker label="testing label on TimelineMarker" />);
        expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
    });
    it('should render the datetime passed', () => {
        const component = mount(<TimelineMarker datetime="Yesterday" />);
        expect(component.find(StyledDatetime).text()).toBe('Yesterday');
    });
    it('should render the description passed', () => {
        const component = mount(
            <TimelineMarker description="testing description on TimelineMarker" />,
        );
        expect(component.find(StyledDescription).text()).toBe(
            'testing description on TimelineMarker',
        );
    });
});
