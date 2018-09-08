import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<TextareaLabel/>', () => {
    it('should not render the label when is not passed', () => {
        const component = mount(
            <Label />,
        );
        expect(component.find('label').exists()).toBe(false);
    });
    it('should render the label when it is passed', () => {
        const component = mount(
            <Label label="Label text" />,
        );
        const label = component.find('label');
        expect(label.exists()).toBe(true);
        expect(label.text()).toBe('Label text');
    });
    it('should set the textareaId passed as the htmlFor prop in the label element', () => {
        const component = mount(
            <Label label="Textarea Label" textareaId="textarea-213" />,
        );
        expect(component.find('label').prop('htmlFor')).toBe('textarea-213');
    });
    it('should set the id passed as the id prop in the label element', () => {
        const component = mount(
            <Label label="Textarea Label" id="label-123" />,
        );
        expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should set the required prop passed in the RequiredAsterisk component', () => {
        const component = mount(
            <Label label="Textarea Label" required />,
        );
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should have the right class names when a custom class name is passed', () => {
        const component = mount(
            <Label label="Textarea Label" className="my-custom-class-name" />,
        );
        expect(component.find('label.rainbow-textarea-label.my-custom-class-name').exists()).toBe(true);
    });
});
