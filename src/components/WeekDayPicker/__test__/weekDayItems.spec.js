import React from 'react';
import { mount } from 'enzyme';
import WeekDayItems from '../weekDayItems';
import WeekDay from '../weekDay';

describe('<WeekDayItems />', () => {
    it('should render all the weekDay elements', () => {
        const component = mount(<WeekDayItems />);
        expect(component.find(WeekDay).length).toBe(7);
    });
    it('should have keys assignation using week-day and input index', () => {
        const component = mount(<WeekDayItems />);
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        days.forEach((day, index) => {
            expect(
                component
                    .find(WeekDay)
                    .at(index)
                    .key(),
            ).toBe(day);
        });
    });
});
