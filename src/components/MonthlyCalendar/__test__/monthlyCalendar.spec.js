import React from 'react';
import { mount } from 'enzyme';
import MonthlyCalendar from '..';

describe('MonthlyCalendar', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach(value => {
            const component = mount(<MonthlyCalendar currentMonth={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render the right month', () => {
        const value = new Date('04/24/2019');
        const component = mount(<MonthlyCalendar currentMonth={value} />);
        expect(component.find('h3[data-id="month"]').text()).toBe('April');
    });
    it('should set to disable the prev month button when minDate is greater than prev month date', () => {
        const value = new Date('04/24/2019');
        const minDate = new Date('04/01/2019');
        const component = mount(<MonthlyCalendar currentMonth={value} minDate={minDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should set to disable the next month button when maxDate is less than next month date', () => {
        const value = new Date('04/24/2019');
        const maxDate = new Date('04/30/2019');
        const component = mount(<MonthlyCalendar currentMonth={value} maxDate={maxDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(1);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should render the right month when value is updated', async done => {
        expect.assertions(1);
        const value = new Date('04/24/2019');
        const component = mount(<MonthlyCalendar currentMonth={value} />);
        component.setProps({
            currentMonth: new Date('10/24/2019'),
        });
        setTimeout(() => {
            expect(component.find('h3[data-id="month"]').text()).toBe('October');
            done();
        }, 300);
    });
    it('should fire onMonthChange when the prev month button is clicked', () => {
        const month = new Date('04/24/2019');
        const prevMonth = new Date('03/01/2019 00:00:00:000');
        const onMonthChangeMockFn = jest.fn();
        const component = mount(
            <MonthlyCalendar currentMonth={month} onMonthChange={onMonthChangeMockFn} />,
        );
        const prevMonthButton = component.find('ButtonIcon').at(0);
        prevMonthButton.simulate('click');
        expect(onMonthChangeMockFn).toHaveBeenCalledWith({ month: prevMonth });
    });
    it('should fire onMonthChange with right params when the next month button is clicked', () => {
        const month = new Date('04/24/2019');
        const nextMonth = new Date('05/01/2019 00:00:00:000');
        const onMonthChangeMockFn = jest.fn();
        const component = mount(
            <MonthlyCalendar currentMonth={month} onMonthChange={onMonthChangeMockFn} />,
        );
        const nextMonthButton = component.find('ButtonIcon').at(1);
        nextMonthButton.simulate('click');
        expect(onMonthChangeMockFn).toHaveBeenCalledWith({ month: nextMonth });
    });
    it('should fire onMonthChange when the year is changed', () => {
        const currentMonth = new Date('04/24/2019');
        const newMonth = new Date('04/01/2022 00:00:00:000');
        const onMonthChangeMockFn = jest.fn();
        const component = mount(
            <MonthlyCalendar currentMonth={currentMonth} onMonthChange={onMonthChangeMockFn} />,
        );
        const select = component.find('Select');
        expect(select.prop('value')).toBe(2019);
        component.find('select').simulate('change', {
            target: { value: 2022 },
        });

        expect(onMonthChangeMockFn).toHaveBeenCalledWith({ month: newMonth });
    });
    it('should call dateComponent on every day of the month', () => {
        const currentMonth = new Date('04/24/2019');
        const dateComponentMock = jest.fn(() => {});
        mount(<MonthlyCalendar currentMonth={currentMonth} dateComponent={dateComponentMock} />);
        expect(dateComponentMock).toHaveBeenCalledTimes(30);
    });
});
