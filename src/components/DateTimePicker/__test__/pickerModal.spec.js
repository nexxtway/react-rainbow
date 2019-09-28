import React from 'react';
import { mount } from 'enzyme';
import DateTimePickerModal from '../pickerModal';
// import extractDate from '../helpers/extractDate';

const value = new Date('06/01/2019 20:48:34');
jest.mock('../helpers/extractDate', () => jest.fn(() => '10/24/2019'));
const todayAt12AM = new Date('10/24/2019 12:00 AM');

describe('<DateTimePickerModal/>', () => {
    it('should set Modal isOpen prop to true', () => {
        const component = mount(<DateTimePickerModal isOpen formatStyle="medium" />);
        expect(component.find('Modal').props().isOpen).toBe(true);
    });
    it('should pass right value to Calendar component', () => {
        const component = mount(<DateTimePickerModal isOpen value={value} />);
        expect(component.find('Calendar').props().value).toBe(value);
    });
    it('should pass the right time to TimeSelect component', () => {
        const component = mount(<DateTimePickerModal isOpen value={value} />);
        expect(component.find('TimeSelect').props().value).toBe('08:48 PM');
    });
    it('should set 12:00 AM to TimeSelect when value is null and date is changed', () => {
        const component = mount(<DateTimePickerModal isOpen />);
        component
            .find('Calendar')
            .find('button[className="rainbow-calendar_day-button"]')
            .at(5)
            .simulate('click');
        expect(component.find('TimeSelect').props().value).toBe('12:00 AM');
    });
    it('should fire OnChange when Ok button is clicked', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(<DateTimePickerModal isOpen onChange={onChangeMockFn} />);
        component
            .find('Calendar')
            .find('button[className="rainbow-calendar_day-button"]')
            .at(5)
            .simulate('click');
        component
            .find('TimeSelect')
            .find('Button')
            .at(1)
            .simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(todayAt12AM);
    });
});
