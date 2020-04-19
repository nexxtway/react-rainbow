import React from 'react';
import { mount } from 'enzyme';
import Event from '../event';
import StyledEventTitle from '../styled/eventTitle';
import StyledEventDates from '../styled/eventDates';
import StyledEvent from '../styled/event';

const startDate = new Date();
startDate.setHours(8, 0, 0, 0);
const endDate = new Date();
endDate.setHours(8, 30, 0, 0);
const event = {
    id: 1,
    title: 'Yuri V. Munayev',
    startDate,
    endDate,
};

describe('<Event />', () => {
    it('should render the right event data', () => {
        const wrapper = mount(<Event {...event} />);
        expect(wrapper.find(StyledEventTitle).text()).toBe(event.title);
        expect(wrapper.find(StyledEventDates).text()).toBe('8:00 - 8:30 AM');
    });
    it('should render on top 480px and height 25px when the startDate is 8:00 AM and endDate 8:30 AM', () => {
        const wrapper = mount(<Event {...event} />);
        const style = wrapper.find(StyledEvent).prop('style');
        expect(style.top).toBe('480px');
        expect(style.height).toBe('30px');
    });
    it('should call onEventClick with the right event when click the button', () => {
        const onEventClickMockFn = jest.fn();
        const wrapper = mount(<Event {...event} onEventClick={onEventClickMockFn} />);
        wrapper.find(StyledEvent).simulate('click');
        expect(onEventClickMockFn).toHaveBeenCalledWith(event);
    });
});
