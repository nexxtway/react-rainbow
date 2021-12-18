import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../../ButtonIcon';
import CalendarHeader from '../calendarHeader';

const mockFn = jest.fn();
jest.mock('../hooks/useHeaderArrowNav', () =>
    jest.fn(() => ({
        updateFocusedItem: mockFn,
    })),
);

describe('CalendarHeader', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });
    it('should call updateFocusedItem with correct value when click on year select element', () => {
        const component = mount(<CalendarHeader />);
        component
            .find('select')
            .at(0)
            .simulate('click');
        expect(mockFn).toHaveBeenCalledWith(2);
    });
    it('should call updateFocusedItem with correct value when click on prev month button element', () => {
        const component = mount(<CalendarHeader />);
        component
            .find(ButtonIcon)
            .at(0)
            .simulate('click');
        expect(mockFn).toHaveBeenCalledWith(0);
    });
    it('should call updateFocusedItem with correct value when click on next month button element', () => {
        const component = mount(<CalendarHeader />);
        component
            .find(ButtonIcon)
            .at(1)
            .simulate('click');
        expect(mockFn).toHaveBeenCalledWith(1);
    });
    it('should call updateFocusedItem with correct value when year select element is focused', () => {
        const component = mount(<CalendarHeader />);
        component
            .find('select')
            .at(0)
            .simulate('focus');
        expect(mockFn).toHaveBeenCalledWith(2);
    });
    it('should call updateFocusedItem with correct value prev month button element is focused', () => {
        const component = mount(<CalendarHeader />);
        component
            .find(ButtonIcon)
            .at(0)
            .simulate('focus');
        expect(mockFn).toHaveBeenCalledWith(0);
    });
    it('should call updateFocusedItem with correct value next month button element is focused', () => {
        const component = mount(<CalendarHeader />);
        component
            .find(ButtonIcon)
            .at(1)
            .simulate('focus');
        expect(mockFn).toHaveBeenCalledWith(1);
    });
});
