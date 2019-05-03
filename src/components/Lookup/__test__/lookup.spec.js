import React from 'react';
import { mount } from 'enzyme';
import Lookup from './../';

describe('<Lookup />', () => {
    it('should set an id in the input element', () => {
        const component = mount(
            <Lookup />,
        );
        expect(component.find('input').prop('id')).toMatch(/lookup-input/);
    });
    it('should set type "search" in the input element', () => {
        const component = mount(
            <Lookup />,
        );
        expect(component.find('input').prop('type')).toBe('search');
    });
    it('should set the placeholder passed in the input element', () => {
        const component = mount(
            <Lookup placeholder="Placeholder Text" />,
        );
        expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
    });
    it('should set the tabIndex passed in the input element', () => {
        const component = mount(
            <Lookup tabIndex={0} />,
        );
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(
            <Lookup disabled />,
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should set the readonly passed in the input element', () => {
        const component = mount(
            <Lookup readOnly />,
        );
        expect(component.find('input').prop('readOnly')).toBe(true);
    });
    it('should set required in the input element if it is passed', () => {
        const component = mount(
            <Lookup required />,
        );
        expect(component.find('input').prop('required')).toBe(true);
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(
            <Lookup error="error message" />,
        );
        expect(component.find('.rainbow-lookup_input-error').prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(
            <Lookup label="custom label" required />,
        );
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
        });
    });
});
