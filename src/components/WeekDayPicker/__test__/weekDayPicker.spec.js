import React from 'react';
import { mount } from 'enzyme';
import { useUniqueIdentifier } from '../../../libs/hooks';
import WeekDayPicker from '../';
import StyledTextError from '../../Input/styled/errorText';

jest.mock('../../../libs/hooks/useUniqueIdentifier', () => jest.fn(() => 'week-day'));

describe('<WeekDayPicker />', () => {
    it('should render a label when label prop is passed', () => {
        const component = mount(<WeekDayPicker label="My label" />);
        expect(component.find('legend').length).toBe(1);
    });
    it('should render bottom help text when bottomHelpText prop is passed', () => {
        const component = mount(<WeekDayPicker bottomHelpText="My help text" />);
        expect(component.find('div[children="My help text"]').length).toBe(1);
    });
    it('should render required asterisk when required prop is true', () => {
        const component = mount(<WeekDayPicker label="My label" required />);
        expect(component.find('RequiredAsterisk').exists()).toBe(true);
    });
    it('should have input type as checkbox when multiple is true', () => {
        const component = mount(<WeekDayPicker multiple />);
        expect(
            component
                .find('input')
                .at(0)
                .prop('type'),
        ).toBe('checkbox');
    });
    it('should have input type as radio when multiple is false', () => {
        const component = mount(<WeekDayPicker />);
        expect(
            component
                .find('input')
                .at(0)
                .prop('type'),
        ).toBe('radio');
    });
    it('should render an error text when error prop is passed', () => {
        const component = mount(<WeekDayPicker error="error" />);
        expect(component.find(StyledTextError).exists()).toBe(true);
    });
    it('should have the opposite days disabled when a list of availableDates is sent', () => {
        const component = mount(<WeekDayPicker availableDates={['sunday', 'monday']} />);
        expect(
            component
                .find('input')
                .at(5)
                .prop('disabled'),
        ).toBe(true);
    });
    it('should set checked status for default input values', () => {
        const component = mount(<WeekDayPicker value={['sunday', 'monday']} multiple />);
        expect(
            component
                .find('input')
                .at(0)
                .prop('checked'),
        ).toBe(true);
        expect(
            component
                .find('input')
                .at(1)
                .prop('checked'),
        ).toBe(true);
    });
    it('should have readonly prop as true when readOnly param is passed', () => {
        const component = mount(<WeekDayPicker readOnly />);
        expect(
            component
                .find('input')
                .at(0)
                .prop('readOnly'),
        ).toBe(true);
    });
    it('should change checked properly status for single day selection', () => {
        const component = mount(<WeekDayPicker value={'friday'} />);
        component.setProps({ value: 'monday' });
        expect(
            component
                .find('input')
                .at(5)
                .prop('checked'),
        ).toBe(false);
        expect(
            component
                .find('input')
                .at(1)
                .prop('checked'),
        ).toBe(true);
    });
    it('should change checked status properly for multiple selection', () => {
        const component = mount(<WeekDayPicker value={['saturday']} multiple />);
        component.setProps({ value: ['sunday', 'monday'] });
        expect(
            component
                .find('input')
                .at(0)
                .prop('checked'),
        ).toBe(true);
        expect(
            component
                .find('input')
                .at(1)
                .prop('checked'),
        ).toBe(true);
        expect(
            component
                .find('input')
                .at(6)
                .prop('checked'),
        ).toBe(false);
    });
    it('should call set useUniqueIdentifier for the days and the days wrapper element', () => {
        useUniqueIdentifier.mockReset();
        mount(<WeekDayPicker />);
        expect(useUniqueIdentifier).toHaveBeenCalledTimes(8);
    });
    it('should not run onChange when checkbox change is triggered and readOnly is true', () => {
        const onChangeFn = jest.fn();
        const component = mount(<WeekDayPicker onChange={onChangeFn} readOnly />);
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true, value: 'sunday' } });
        expect(onChangeFn).not.toHaveBeenCalled();
    });
    it('should not run onChange when input change is triggered and disabled is true', () => {
        const onChangeFn = jest.fn();
        const component = mount(<WeekDayPicker onChange={onChangeFn} disabled />);
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true, value: 'sunday' } });
        expect(onChangeFn).not.toHaveBeenCalled();
    });
    it('should run onChange with the right value when multiple is not set', () => {
        const onChangeFn = jest.fn();
        const component = mount(<WeekDayPicker value={'monday'} onChange={onChangeFn} />);
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true, value: 'sunday' } });
        expect(onChangeFn).toHaveBeenCalledWith('sunday');
    });
    it('should run onChange with the right sorted values when multiple is true', () => {
        const onChangeFn = jest.fn();
        const value = ['friday', 'monday'];
        const component = mount(<WeekDayPicker value={value} multiple onChange={onChangeFn} />);
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true, value: 'sunday' } });
        expect(onChangeFn).toHaveBeenCalledWith(['sunday', 'monday', 'friday']);
    });
});
