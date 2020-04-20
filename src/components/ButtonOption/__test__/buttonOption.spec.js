import React from 'react';
import { mount } from 'enzyme';
import { Component as ButtonGroupPicker } from '../../ButtonGroupPicker/index';
import { ButtonGroupPickerContext } from '../../ButtonGroupPicker/context';
import ButtonOption from '../index';

jest.mock('../helpers/isOptionSelected', () => jest.fn(() => true));

describe('<ButtonOption />', () => {
    it('should set disabled prop of input to true when disabled prop is true', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" disabled />
            </ButtonGroupPicker>,
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });

    it('should set the label passed as label for the input', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        expect(component.find('label').text()).toBe('Option 1');
    });

    it('should fire onclick callback when clicked', () => {
        const onClickFn = jest.fn();
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" onClick={onClickFn} />
            </ButtonGroupPicker>,
        );
        component.find('label').simulate('click');
        expect(onClickFn).toHaveBeenCalledWith({ isSelected: true });
    });

    it('should pass a generated id to the input element and set the same id to the htmFor of the label element', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        const htmlFor = component.find('label').prop('htmlFor');
        const inputId = component.find('input').prop('id');
        expect(htmlFor).toBe(inputId);
    });

    it('should set the name passed through context to the name prop of the input element', () => {
        const component = mount(
            <ButtonGroupPickerContext.Provider value={{ name: 'group-name' }}>
                <ButtonOption label="Option 1" />
            </ButtonGroupPickerContext.Provider>,
        );
        const inputName = component.find('input').prop('name');
        expect(inputName).toBe('group-name');
    });

    it('should set the prop name passed to the value prop of the input element', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" name="option1" />
            </ButtonGroupPicker>,
        );
        const value = component.find('input').prop('value');
        expect(value).toBe('option1');
    });

    it('should set the ariaDescribedBy passed through context to the aria-describedby prop of the input element', () => {
        const component = mount(
            <ButtonGroupPickerContext.Provider value={{ ariaDescribedBy: 'aria-describedby' }}>
                <ButtonOption label="Option 1" />
            </ButtonGroupPickerContext.Provider>,
        );
        const inputAriaDescribedBy = component.find('input').prop('aria-describedby');
        expect(inputAriaDescribedBy).toBe('aria-describedby');
    });

    it('should set the type passed through context to the type prop of the input element', () => {
        const component = mount(
            <ButtonGroupPickerContext.Provider value={{ type: 'checkbox' }}>
                <ButtonOption label="Option 1" />
            </ButtonGroupPickerContext.Provider>,
        );
        const inputType = component.find('input').prop('type');
        expect(inputType).toBe('checkbox');
    });

    it('should pass the right checked value to the input', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
});
