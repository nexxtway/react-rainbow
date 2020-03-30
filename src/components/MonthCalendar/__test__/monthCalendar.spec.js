import React from 'react';
import { mount } from 'enzyme';
import MonthCalendar from '../';

describe('MonthCalendar', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach(value => {
            const component = mount(<MonthCalendar currentMonth={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render the right month', () => {
        const value = new Date('04/24/2019');
        const component = mount(<MonthCalendar currentMonth={value} />);
        expect(component.find('h3[data-id="month"]').text()).toBe('April');
    });
    it('should set to disable the prev month button when minDate is greater than prev month date', () => {
        const value = new Date('04/24/2019');
        const minDate = new Date('04/01/2019');
        const component = mount(<MonthCalendar currentMonth={value} minDate={minDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should set to disable the next month button when maxDate is less than next month date', () => {
        const value = new Date('04/24/2019');
        const maxDate = new Date('04/30/2019');
        const component = mount(<MonthCalendar currentMonth={value} maxDate={maxDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(1);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should render the right month when value is updated', async done => {
        expect.assertions(1);
        const value = new Date('04/24/2019');
        const component = mount(<MonthCalendar currentMonth={value} />);
        component.setProps({
            currentMonth: new Date('10/24/2019'),
        });
        setTimeout(() => {
            expect(component.find('h3[data-id="month"]').text()).toBe('October');
            done();
        }, 300);
    });
    it('should fire onMonthChanged when the prev month button is clicked', () => {
        const month = new Date('04/24/2019');
        const prevMonth = new Date('03/01/2019 00:00:00:000');
        const onMonthChangedMockFn = jest.fn();
        const component = mount(
            <MonthCalendar currentMonth={month} onMonthChanged={onMonthChangedMockFn} />,
        );
        const prevMonthButton = component.find('ButtonIcon').at(0);
        prevMonthButton.simulate('click');
        expect(onMonthChangedMockFn).toHaveBeenCalledWith(prevMonth);
    });
    it('should fire onMonthChanged with right params when the next month button is clicked', () => {
        const month = new Date('04/24/2019');
        const nextMonth = new Date('05/01/2019 00:00:00:000');
        const onMonthChangedMockFn = jest.fn();
        const component = mount(
            <MonthCalendar currentMonth={month} onMonthChanged={onMonthChangedMockFn} />,
        );
        const nextMonthButton = component.find('ButtonIcon').at(1);
        nextMonthButton.simulate('click');
        expect(onMonthChangedMockFn).toHaveBeenCalledWith(nextMonth);
    });
    it('should fire onMonthChanged when the year is changed', () => {
        const currentMonth = new Date('04/24/2019');
        const newMonth = new Date('04/01/2022 00:00:00:000');
        const onMonthChangedMockFn = jest.fn();
        const component = mount(
            <MonthCalendar currentMonth={currentMonth} onMonthChanged={onMonthChangedMockFn} />,
        );
        const select = component.find('Select');
        expect(select.prop('value')).toBe(2019);
        component.find('select').simulate('change', {
            target: { value: 2022 },
        });

        expect(onMonthChangedMockFn).toHaveBeenCalledWith(newMonth);
    });
    it('should call dateComponent on every day of the month', () => {
        const currentMonth = new Date('04/24/2019');
        const dateComponentMock = jest.fn(() => {});
        mount(<MonthCalendar currentMonth={currentMonth} dateComponent={dateComponentMock} />);
        expect(dateComponentMock).toHaveBeenCalledTimes(30);
    });
});
