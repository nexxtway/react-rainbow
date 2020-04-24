import React from 'react';
import { mount } from 'enzyme';
import WeekDay from '../weekDay';
import { useUniqueIdentifier } from '../../../libs/hooks';

jest.mock('../../../libs/hooks/useUniqueIdentifier', () => jest.fn(() => 'week-day'));

describe('<WeekDay />', () => {
    it('should have checked as true when isChecked is true', () => {
        const component = mount(<WeekDay isChecked />);
        expect(component.find('input').prop('checked')).toBe(true);
    });
    it('should have checked as false when isChecked is not set', () => {
        const component = mount(<WeekDay />);
        expect(component.find('input').prop('checked')).toBe(false);
    });
    it('should have disabled as true when disabled is true', () => {
        const component = mount(<WeekDay disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should have checked as false when disabled is not set', () => {
        const component = mount(<WeekDay />);
        expect(component.find('input').prop('disabled')).toBe(false);
    });
    it('should have readOnly as true when readOnly is true', () => {
        const component = mount(<WeekDay readOnly />);
        expect(component.find('input').prop('readOnly')).toBe(true);
    });
    it('should have readonly as false when readOnly is not set', () => {
        const component = mount(<WeekDay />);
        expect(component.find('input').prop('readOnly')).toBe(false);
    });
    it('should call useUniqueIdentifier to generate input ID with the right value', () => {
        useUniqueIdentifier.mockReset();
        mount(<WeekDay />);
        expect(useUniqueIdentifier).toHaveBeenCalledTimes(1);
        expect(useUniqueIdentifier).toHaveBeenCalledWith('week-day');
    });
});
