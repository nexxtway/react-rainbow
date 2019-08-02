import React from 'react';
import { mount } from 'enzyme';
import VisualPickerOption from '../index';

describe('<VisualPickerOption/>', () => {
    it('should set type radio to the input element', () => {
        const component = mount(<VisualPickerOption name="option1" />);
        expect(component.find('input').prop('type')).toBe('radio');
    });
    it('should set type checkbox to the input element', () => {
        const component = mount(<VisualPickerOption name="option1" multiple />);
        expect(component.find('input').prop('type')).toBe('checkbox');
    });
    it('should set correct name to the input element', () => {
        const groupName = 'group-1';
        const component = mount(<VisualPickerOption name="option1" groupName={groupName} />);
        expect(component.find('input').prop('name')).toBe(groupName);
    });
    it('should mark the input element as checked', () => {
        const value1 = 'option1';
        const value2 = ['option1'];
        const component1 = mount(<VisualPickerOption name="option1" value={value1} />);
        const component2 = mount(<VisualPickerOption name="option1" multiple value={value2} />);
        expect(component1.find('input').prop('checked')).toBe(true);
        expect(component2.find('input').prop('checked')).toBe(true);
    });
});
