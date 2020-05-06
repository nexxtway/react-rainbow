import React from 'react';
import { mount } from 'enzyme';
import Hours from '../hours';
import StyledClock from '../styled/clock';
import StyledTitleHour from '../styled/titleHour';

jest.mock('../hooks/useTimer', () =>
    jest
        .fn()
        .mockReturnValue(new Date())
        .mockReturnValueOnce(new Date().setHours(3, 10, 0, 0))
        .mockReturnValueOnce(new Date().setHours(3, 16, 0, 0))
        .mockReturnValueOnce(new Date().setHours(3, 0, 0, 0))
        .mockReturnValueOnce(new Date().setHours(8, 0, 0, 0)),
);

describe('<Hours />', () => {
    it('should hidden 3 AM when clock is 3:10 AM', () => {
        const wrapper = mount(<Hours />);
        expect(
            wrapper
                .find('ListHours')
                .find({ visible: false })
                .find(StyledTitleHour)
                .text(),
        ).toBe('3 AM');
    });
    it('should render all visible hours  when clock is 3:15 AM', () => {
        const wrapper = mount(<Hours />);
        wrapper.find(StyledTitleHour).forEach(item => {
            expect(item.prop('visible')).toBe(true);
        });
    });
    it('should render clock 3:00 AM when the clock is 3:00 AM', () => {
        const wrapper = mount(<Hours />);
        expect(wrapper.find(StyledClock).text()).toBe('3:00 AM');
    });
    it('should render on top 312px when the clock is 8:00 AM', () => {
        const wrapper = mount(<Hours />);
        expect(wrapper.find(StyledClock).prop('style').top).toBe('312px');
    });
    it('should call setToday when today is differrent to day of clock', async done => {
        const today = new Date();
        today.setDate(today.getDate() - 1);
        const setTodayMockMockFn = jest.fn(() => {});
        mount(<Hours today={today} setToday={setTodayMockMockFn} />);
        setTimeout(() => {
            expect(setTodayMockMockFn).toHaveBeenCalled();
            done();
        }, 300);
    });
    it('should render the hours of the day', () => {
        const wrapper = mount(<Hours />);
        const listHoursWrapper = wrapper.find('ListHours').children();
        listHoursWrapper.forEach((item, index) => {
            const ampm = index < 12 ? 'AM' : 'PM';
            let hour = index;
            if (index === 0) {
                hour = 12;
            }
            if (index > 12) {
                hour = index - 12;
            }
            expect(item.find(StyledTitleHour).text()).toBe(`${hour} ${ampm}`);
        });
    });
});
