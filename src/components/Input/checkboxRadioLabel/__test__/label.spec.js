import React from 'react';
import { mount } from 'enzyme';
import Label from '../';
import StyledLabelText from '../labelText';
import HiddenElement from '../../../Structural/hiddenElement';

describe('<CheckboxRadioLabel/>', () => {
    describe('without hideLabel', () => {
        it('should set the inputId passed as the htmlFor prop in the label element', () => {
            const component = mount(<Label label="Input Label" inputId="input-213" />);
            expect(component.find('label').prop('htmlFor')).toBe('input-213');
        });
        it('should set the id passed as the id prop in the label element', () => {
            const component = mount(<Label label="Input Label" id="label-123" />);
            expect(component.find('label').prop('id')).toBe('label-123');
        });
        it('should render the label passed', () => {
            const component = mount(<Label label="Input Label" />);
            expect(component.find('label').text()).toBe('Input Label');
        });
        it('should render the StyledLabelText component', () => {
            const component = mount(<Label label="Input Label" />);
            expect(component.find(StyledLabelText).exists()).toBe(true);
            expect(component.find(HiddenElement).exists()).toBe(false);
        });
    });
    describe('with hideLabel', () => {
        it('should set the inputId passed as the htmlFor prop in the label element', () => {
            const component = mount(<Label hideLabel label="Input Label" inputId="input-213" />);
            expect(component.find('label').prop('htmlFor')).toBe('input-213');
        });
        it('should set the id passed as the id prop in the label element', () => {
            const component = mount(<Label hideLabel label="Input Label" id="label-123" />);
            expect(component.find('label').prop('id')).toBe('label-123');
        });
        it('should render the label passed', () => {
            const component = mount(<Label label="Input Label" hideLabel />);
            expect(component.find('label').text()).toBe('Input Label');
        });
        it('should render the HiddenElement component', () => {
            const component = mount(<Label label="Input Label" hideLabel />);
            expect(component.find(HiddenElement).exists()).toBe(true);
            expect(component.find(StyledLabelText).exists()).toBe(false);
        });
    });
});
