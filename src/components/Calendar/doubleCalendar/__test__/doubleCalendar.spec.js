import React from 'react';
import { mount } from 'enzyme';
import DoubleCalendar from '../';

describe('DoubleCalendar', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach(value => {
            const component = mount(<DoubleCalendar value={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render the right months', () => {
        const value = new Date('04/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        expect(
            component
                .find('h3[data-id="month"]')
                .at(0)
                .text(),
        ).toBe('April');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(1)
                .text(),
        ).toBe('May');
    });
    it('should render right months when click prev month button', () => {
        const value = new Date('04/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        prevMonthButton.simulate('click');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(0)
                .text(),
        ).toBe('March');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(1)
                .text(),
        ).toBe('April');
    });
    it('should render right months when click next month button', () => {
        const value = new Date('04/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        const prevMonthButton = component.find('ButtonIcon').at(1);
        prevMonthButton.simulate('click');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(0)
                .text(),
        ).toBe('May');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(1)
                .text(),
        ).toBe('June');
    });
    it('should set to disable the prevMonthButton when minDate is greater than prev month date', () => {
        const value = new Date('04/24/2019');
        const minDate = new Date('04/01/2019');
        const component = mount(<DoubleCalendar value={value} minDate={minDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(0);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should set to disable the nextMonthButton when maxDate is less than next month date', () => {
        const value = new Date('04/24/2019');
        const maxDate = new Date('04/30/2019');
        const component = mount(<DoubleCalendar value={value} maxDate={maxDate} />);
        const prevMonthButton = component.find('ButtonIcon').at(1);
        expect(prevMonthButton.prop('disabled')).toBe(true);
    });
    it('should render the right month when value is updated', () => {
        const value = new Date('04/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        component.setProps({
            value: new Date('10/24/2019'),
        });
        expect(
            component
                .find('h3[data-id="month"]')
                .at(0)
                .text(),
        ).toBe('October');
        expect(
            component
                .find('h3[data-id="month"]')
                .at(1)
                .text(),
        ).toBe('November');
    });
    it('should fire onChange with a date as parameter', () => {
        const value = new Date('04/24/2019');
        const mockChangeFn = jest.fn();
        const component = mount(<DoubleCalendar value={value} onChange={mockChangeFn} />);
        component
            .find('table')
            .find('button')
            .at(7)
            .simulate('click');
        expect(mockChangeFn).toHaveBeenCalledWith(new Date('04/08/2019'));
    });
    it('should change right month year when left month year changed', () => {
        const value = new Date('12/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        component
            .find('select')
            .at(0)
            .simulate('change', {
                target: { value: 2020 },
            });
        expect(
            component
                .find('select')
                .at(0)
                .prop('value'),
        ).toBe(2020);
        expect(
            component
                .find('select')
                .at(1)
                .prop('value'),
        ).toBe(2021);
    });
    it('should change left month year when right month year changed', () => {
        const value = new Date('12/24/2019');
        const component = mount(<DoubleCalendar value={value} />);
        component
            .find('select')
            .at(1)
            .simulate('change', {
                target: { value: 2023 },
            });
        expect(
            component
                .find('select')
                .at(0)
                .prop('value'),
        ).toBe(2022);
        expect(
            component
                .find('select')
                .at(1)
                .prop('value'),
        ).toBe(2023);
    });
});
