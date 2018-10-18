import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<InputBaseLabel/>', () => {
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
    it('should add the right class names when readOnly is passed', () => {
        const component = mount(
            <Label label="Input Label" readOnly />,
        );
        expect(component.find('.rainbow-input_label.rainbow-input_label-read-only').exists()).toBe(true);
    });
});
