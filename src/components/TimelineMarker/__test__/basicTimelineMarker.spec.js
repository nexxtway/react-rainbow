import React from 'react';
import { mount } from 'enzyme';
import BasicTimelineMarker from '../basicMarker';
import Card from '../../Card';
import Avatar from '../../Avatar';
import StyledLabel from '../styled/label';
import StyledDatetime from '../styled/datetime';
import StyledDescription from '../styled/description';

describe('<BasicTimelineMarker/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <BasicTimelineMarker>
                <Card title="TimelineMarker--children" />
            </BasicTimelineMarker>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should render the icon passed', () => {
        const component = mount(<BasicTimelineMarker icon={<Avatar />} />);
        expect(component.find(Avatar).exists()).toBe(true);
    });
    it('should render the calendar icon by default', () => {
        const component = mount(<BasicTimelineMarker />);
        expect(component.find('CalendarIcon').exists()).toBe(true);
    });
    it('should render the label passed', () => {
        const component = mount(<BasicTimelineMarker label="testing label on TimelineMarker" />);
        expect(component.find(StyledLabel).text()).toBe('testing label on TimelineMarker');
    });
    it('should render the datetime passed', () => {
        const component = mount(<BasicTimelineMarker datetime="Yesterday" />);
        expect(component.find(StyledDatetime).text()).toBe('Yesterday');
    });
    it('should render the description passed', () => {
        const component = mount(
            <BasicTimelineMarker description="testing description on TimelineMarker" />,
        );
        expect(component.find(StyledDescription).text()).toBe(
            'testing description on TimelineMarker',
        );
    });
});
