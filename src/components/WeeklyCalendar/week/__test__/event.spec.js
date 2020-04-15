import React from 'react';
import { mount } from 'enzyme';
import Event from '../event';
import StyledEventTitle from '../styled/eventTitle';
import StyledEventDates from '../styled/eventDates';
import StyledEvent from '../styled/event';

const event = {
    title: 'Yuri V. Munayev',
    startDate: new Date().setHours(8, 0, 0, 0),
    endDate: new Date().setHours(8, 30, 0, 0),
};

describe('<Event />', () => {
    it('should render the right event data', () => {
        const wrapper = mount(<Event event={event} />);
        expect(wrapper.find(StyledEventTitle).text()).toBe(event.title);
        expect(wrapper.find(StyledEventDates).text()).toBe('8:00 AM - 8:30 AM');
    });
    it('should render on top 400px and height 25px when the startDate is 8:00 AM and endDate 8:30 AM', () => {
        const wrapper = mount(<Event event={event} />);
        const style = wrapper.find(StyledEvent).prop('style');
        expect(style.top).toBe('400px');
        expect(style.height).toBe('25px');
    });
    it('should call onEventClick with the right event when click the button', () => {
        const onEventClickMockFn = jest.fn();
        const wrapper = mount(<Event event={event} onEventClick={onEventClickMockFn} />);
        wrapper.find(StyledEvent).simulate('click');
        expect(onEventClickMockFn).toHaveBeenCalledWith(event);
    });

    it('should don t render the dates when the startDate is 8:00 AM and endDate 8:15 AM', () => {
        event.endDate = new Date(event.endDate).setHours(8, 15, 0, 0);
        const wrapper = mount(<Event event={event} />);
        expect(wrapper.find(StyledEventDates).exists()).toBe(false);
    });
});
