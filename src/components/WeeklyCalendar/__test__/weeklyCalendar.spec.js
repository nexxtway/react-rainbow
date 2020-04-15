import React from 'react';
import { mount } from 'enzyme';
import WeeklyCalendar from '../';

describe('WeeklyCalendar', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach(value => {
            const component = mount(<WeeklyCalendar currentWeek={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render the right week', () => {
        const value = new Date('04/05/2020');
        const component = mount(<WeeklyCalendar currentWeek={value} />);
        expect(component.find('h3[data-id="week"]').text()).toBe('Apr 5 - 11, 2020');
    });
    it('should set to disable the prev week button when minDate is greater than prev week date', () => {
        const value = new Date('04/10/2020');
        const minDate = new Date('04/06/2020');
        const component = mount(<WeeklyCalendar currentWeek={value} minDate={minDate} />);
        const prevWeekButton = component.find('ButtonIcon').at(0);
        expect(prevWeekButton.prop('disabled')).toBe(true);
    });
    it('should set to disable the next week button when maxDate is less than next week date', () => {
        const value = new Date('04/08/2020');
        const maxDate = new Date('04/11/2020');
        const component = mount(<WeeklyCalendar currentWeek={value} maxDate={maxDate} />);
        const prevWeekButton = component.find('ButtonIcon').at(1);
        expect(prevWeekButton.prop('disabled')).toBe(true);
    });
    it('should render the right week when value is updated', async done => {
        expect.assertions(1);
        const value = new Date('04/05/2020');
        const component = mount(<WeeklyCalendar currentWeek={value} />);
        component.setProps({
            currentWeek: new Date('04/28/2020'),
        });
        setTimeout(() => {
            expect(component.find('h3[data-id="week"]').text()).toBe('Apr 26 - May 2, 2020');
            done();
        }, 300);
    });
    it('should fire onWeekChange when the prev week button is clicked', () => {
        const week = new Date('04/12/2020');
        const prevWeek = { week: new Date('04/05/2020  00:00:00:000') };
        const onWeekChangeMockFn = jest.fn();
        const component = mount(
            <WeeklyCalendar currentWeek={week} onWeekChange={onWeekChangeMockFn} />,
        );
        const prevWeekButton = component.find('ButtonIcon').at(0);
        prevWeekButton.simulate('click');
        expect(onWeekChangeMockFn).toHaveBeenCalledWith(prevWeek);
    });
    it('should fire onWeekChange with right params when the next week button is clicked', () => {
        const week = new Date('04/14/2020');
        const nextWeek = { week: new Date('04/19/2020  00:00:00:000') };
        const onWeekChangeMockFn = jest.fn();
        const component = mount(
            <WeeklyCalendar currentWeek={week} onWeekChange={onWeekChangeMockFn} />,
        );
        const nextWeekButton = component.find('ButtonIcon').at(1);
        nextWeekButton.simulate('click');
        expect(onWeekChangeMockFn).toHaveBeenCalledWith(nextWeek);
    });
    it('should fire onWeekChange when the year is changed', () => {
        const currentWeek = new Date('04/5/2019');
        const newWeek = { week: new Date('03/31/2022 00:00:00:000') };
        const onWeekChangeMockFn = jest.fn();
        const component = mount(
            <WeeklyCalendar currentWeek={currentWeek} onWeekChange={onWeekChangeMockFn} />,
        );
        const select = component.find('Select');
        expect(select.prop('value')).toBe(2019);
        component.find('select').simulate('change', {
            target: { value: 2022 },
        });

        expect(onWeekChangeMockFn).toHaveBeenCalledWith(newWeek);
    });
});
