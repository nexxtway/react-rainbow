import React from 'react';
import { mount } from 'enzyme';
import Day from '../day';
import StyledDayLabel from '../styled/dayLabel';
import StyledDay from '../styled/day';
import StyledDayAdjacent from '../styled/dayAdjacent';
import StyledDayContent from '../styled/dayContent';
import { Provider } from '../context';

describe('Day', () => {
    it('should render the right day', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const component = mount(
            <Provider value={{ dateComponent: undefined }}>
                <Day date={date} firstDayMonth={firstDayMonth} />
            </Provider>,
        );
        expect(component.find(StyledDayLabel).text()).toBe('24');
    });
    it('should call onChange with the right date when click the button', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Provider value={{ dateComponent: undefined }}>
                <Day date={date} firstDayMonth={firstDayMonth} onSelect={onSelectMockFn} />,
            </Provider>,
        );
        component.find(StyledDay).simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith({ date });
    });
    it('should render the right day when is adjacent', () => {
        const date = new Date('03/29/2019');
        const firstDayMonth = new Date('04/01/2019');
        const component = mount(
            <Provider value={{ dateComponent: undefined }}>
                <Day date={date} firstDayMonth={firstDayMonth} />
            </Provider>,
        );
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(
            component
                .find('td')
                .find(StyledDayAdjacent)
                .text(),
        ).toBe('29');
    });
    it('should render the right day when is maxDate is less than date', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const maxDate = new Date('04/23/2019');
        const component = mount(
            <Provider value={{ dateComponent: undefined }}>
                <Day date={date} firstDayMonth={firstDayMonth} maxDate={maxDate} />,
            </Provider>,
        );
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(
            component
                .find('td')
                .find(StyledDayAdjacent)
                .text(),
        ).toBe('24');
    });
    it('should render the right day when is minDate is greater than date', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const minDate = new Date('04/25/2019');
        const component = mount(
            <Provider value={{ dateComponent: undefined }}>
                <Day date={date} firstDayMonth={firstDayMonth} minDate={minDate} />,
            </Provider>,
        );
        expect(component.find('td').prop('aria-selected')).toBe('false');
        expect(
            component
                .find('td')
                .find(StyledDayAdjacent)
                .text(),
        ).toBe('24');
    });
    it('should call dateComponent with date as param', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const dateComponentMock = jest.fn(() => {});
        mount(
            <Provider value={{ dateComponent: dateComponentMock }}>
                <Day date={date} firstDayMonth={firstDayMonth} />
            </Provider>,
        );
        expect(dateComponentMock).toHaveBeenCalledWith(date);
    });
    it('should render the result of dateComponent', () => {
        const date = new Date('04/24/2019');
        const firstDayMonth = new Date('04/01/2019');
        const component = mount(
            <Provider value={{ dateComponent: () => <div>date render func</div> }}>
                <Day date={date} firstDayMonth={firstDayMonth} />
            </Provider>,
        );
        expect(component.find(StyledDayContent).text()).toBe('date render func');
    });
});
