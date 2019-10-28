import React from 'react';
import { mount } from 'enzyme';
import Calendar, { Component } from '../';

describe('Calendar', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach(value => {
            const component = mount(<Calendar value={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render the right month', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Calendar value={value} />);
        expect(component.find('h3[data-id="month"]').text()).toBe('April');
    });
    it('should render the prev month', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Calendar value={value} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        prevMonthButton.simulate('click');
        expect(component.find('h3[data-id="month"]').text()).toBe('March');
    });
    it('should render the next month', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Calendar value={value} />);
        const nextMonthButton = component.find('ButtonIcon').at(1);
        nextMonthButton.simulate('click');
        expect(component.find('h3[data-id="month"]').text()).toBe('May');
    });
    it('should set to disable the prev month button when minDate is greater than prev month date', () => {
        const value = new Date('04/24/2019');
        const minDate = new Date('04/01/2019');
        const component = mount(<Calendar value={value} minDate={minDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should set to disable the next month button when maxDate is less than next month date', () => {
        const value = new Date('04/24/2019');
        const maxDate = new Date('04/30/2019');
        const component = mount(<Calendar value={value} maxDate={maxDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(1);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should render the right month when value is updated', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Calendar value={value} />);
        component.setProps({
            value: new Date('10/24/2019'),
        });
        expect(component.find('h3[data-id="month"]').text()).toBe('October');
    });
    it('should change the year', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Calendar value={value} />);
        const select = component.find('Select');
        expect(select.prop('value')).toBe(2019);
        component.find('select').simulate('change', {
            target: { value: 2022 },
        });
        expect(component.find('Select').prop('value')).toBe(2022);
    });
    it('should set the right attributes in table element', () => {
        const value = new Date('04/24/2019');
        const component = mount(<Component value={value} />);
        const monthLabelId = component.instance().monthLabelId;
        expect(component.find('table').props()).toEqual(
            expect.objectContaining({
                'aria-labelledby': monthLabelId,
                role: 'grid',
            }),
        );
    });
});
