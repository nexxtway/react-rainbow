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
        [0, 1, 2, 3, 4, 5, 6].forEach(index => {
            expect(
                component
                    .find(WeekDay)
                    .at(index)
                    .key(),
            ).toBe(`week-day-${index}`);
        });
    });
});
