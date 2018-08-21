import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Label from './../label';

describe('<InputLabel/>', () => {
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
    it('should have the right class names when a custom class name is passed', () => {
        const component = renderer.create(
            <Label label="Input Label" className="my-custom-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
});
