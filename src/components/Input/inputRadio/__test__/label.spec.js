import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<InputRadioLabel/>', () => {
    it('should set the inputId passed as the htmlFor prop in the label element', () => {
        const component = mount(
            <Label label="Input Label" inputId="input-213" />,
        );
        expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', () => {
        const component = mount(
            <Label label="Input Label" id="label-123" />,
        );
        expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should set the required prop passed in the RequiredAsterisk component', () => {
        const component = mount(
            <Label label="Input Label" required />,
        );
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should add the right class names when disabled is passed', () => {
        const component = mount(
            <Label label="Input Label" disabled />,
        );
        expect(component.find('.rainbow-input-radio_label.rainbow-input-radio_label--disabled').exists()).toBe(true);
    });
});
