import React from 'react';
import { mount } from 'enzyme';
import Day from '../day';

describe('Day', () => {
    it('should render the right day', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const component = mount(<Day date={date} firstDayMonth={firstDayMonth} />);
        expect(component.find('button').text()).toBe('24');
    });
    it('should call onChange with the right date when click the button', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Day date={date} firstDayMonth={firstDayMonth} onChange={onChangeMockFn} />,
        );
        component.find('button').simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(new Date('04/24/2019'));
    });
    it('should render the right day when is adjacent', () => {
        const date = new Date('03/29/2019');
        const firstDayMonth = new Date('04/01/2019');
        const component = mount(<Day date={date} firstDayMonth={firstDayMonth} />);
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(component.find('td').text()).toBe('29');
    });
    it('should render the right day when is maxDate is less than date', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const maxDate = new Date('04/23/2019');
        const component = mount(
            <Day date={date} firstDayMonth={firstDayMonth} maxDate={maxDate} />,
        );
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(component.find('td').text()).toBe('24');
    });
    it('should render the right day when is minDate is greater than date', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const minDate = new Date('04/25/2019');
        const component = mount(
            <Day date={date} firstDayMonth={firstDayMonth} minDate={minDate} />,
        );
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(component.find('td').text()).toBe('24');
    });
});
