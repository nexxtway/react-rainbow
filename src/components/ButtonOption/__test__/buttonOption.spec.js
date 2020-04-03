import React from 'react';
import { mount } from 'enzyme';
import { Component as ButtonGroupPicker } from '../../ButtonGroupPicker/index';
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
        expect(onClickFn).toHaveBeenCalledTimes(1);
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
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        const contextName = component.instance().getContext().name;
        const inputName = component.find('input').prop('name');
        expect(contextName).toBe(inputName);
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
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        const contextAriaDescribedBy = component.instance().getContext().ariaDescribedBy;
        const inputAriaDescribedBy = component.find('input').prop('aria-describedby');
        expect(contextAriaDescribedBy).toBe(inputAriaDescribedBy);
    });

    it('should set the type passed through context to the type prop of the input element', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        const contextType = component.instance().getContext().type;
        const inputType = component.find('input').prop('type');
        expect(contextType).toBe(inputType);
    });

    it('should set the input selected prop equal to the value returned by function isOptionSelected', () => {
        const component = mount(
            <ButtonGroupPicker>
                <ButtonOption label="Option 1" />
            </ButtonGroupPicker>,
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
});
