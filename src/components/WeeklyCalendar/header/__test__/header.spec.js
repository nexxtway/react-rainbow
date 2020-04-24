import React from 'react';
import { mount } from 'enzyme';
import Header from '..';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

describe('<Header />', () => {
    it('should render the days of the week', () => {
        const week = new Date(2020, 3, 5);
        const wrapper = mount(<Header week={week} />);
        const daysWrapper = wrapper.find('Days');
        weekDays.forEach((weekDay, index) => {
            const day = daysWrapper.childAt(index);
            expect(day.find('p').text()).toBe(weekDay);
            expect(day.find('h1').text()).toBe(`${5 + index}`);
        });
    });

    it('should render today', () => {
        const week = new Date(2020, 3, 5);
        const today = new Date(2020, 3, 6);
        const wrapper = mount(<Header week={week} today={today} />);
        const todayWrapper = wrapper.find({ isToday: true });
        expect(todayWrapper.find('p').text()).toBe('Mon');
        expect(todayWrapper.find('h1').text()).toBe('6');
    });
});
