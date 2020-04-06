import React from 'react';
import { mount, shallow } from 'enzyme';
import { Component as ButtonGroupPicker } from '../index';
import ButtonOption from '../../ButtonOption/index';
import { StyledErrorText } from '../styled';
import { Provider } from '../context';

jest.mock('../../../libs/utils/uniqueId', () => jest.fn(() => 'unique-error-id'));

describe('<ButtonGroupPicker />', () => {
    it('should render a label when label prop is passed', () => {
        const component = mount(<ButtonGroupPicker label="My label" />);
        expect(component.find('legend').length).toBe(1);
    });

    it('should render bottom help text when bottomHelpText prop is passed', () => {
        const component = mount(<ButtonGroupPicker bottomHelpText="My help text" />);
        expect(component.find('div[children="My help text"]').length).toBe(1);
    });

    it('should render required asterisk when required prop is true', () => {
        const component = mount(<ButtonGroupPicker label="My label" required />);
        expect(component.find('RequiredAsterisk').exists()).toBe(true);
    });

    it('should pass type checkbox in context when multiple is true', () => {
        const component = shallow(<ButtonGroupPicker multiple />);
        const context = component.find(Provider).prop('value');
        expect(context.type).toBe('checkbox');
    });

    it('should pass type radio in context when multiple is false', () => {
        const component = shallow(<ButtonGroupPicker />);
        const context = component.find(Provider).prop('value');
        expect(context.type).toBe('radio');
    });

    it('should render an error text when error prop is passed', () => {
        const component = mount(<ButtonGroupPicker error="error" />);
        expect(component.find(StyledErrorText).exists()).toBe(true);
    });

    it('should set the error message id as id for the error text', () => {
        const component = mount(<ButtonGroupPicker error="error" />);
        const errorElement = component.find(StyledErrorText).first();
        expect(errorElement.prop('id')).toBe('unique-error-id');
    });

    it('should pass the error message id to context', () => {
        const component = shallow(<ButtonGroupPicker error="error" />);
        const context = component.find(Provider).prop('value');
        expect(context.ariaDescribedBy).toBe('unique-error-id');
    });

    it('should fire onchange with the right value when multiple is false and option is checked', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <ButtonGroupPicker value="option1" onChange={onChangeFn}>
                <ButtonOption label="Option 1" name="option1" />
                <ButtonOption label="Option 2" name="option2" />
            </ButtonGroupPicker>,
        );
        component
            .find('input')
            .at(1)
            .simulate('change', { target: { checked: true, value: 'option2' } });
        expect(onChangeFn).toHaveBeenCalledWith('option2');
    });

    it('should fire onchange with an array of values including the value checked when multiple is true', () => {
        const onChangeFn = jest.fn();
        const value = ['option1'];
        const component = mount(
            <ButtonGroupPicker value={value} onChange={onChangeFn} multiple>
                <ButtonOption label="Option 1" name="option1" />
                <ButtonOption label="Option 2" name="option2" />
            </ButtonGroupPicker>,
        );
        component
            .find('input')
            .at(1)
            .simulate('change', { target: { checked: true, value: 'option2' } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option2']);
    });

    it('should fire onchange with an array containing the value checked when multiple is true and nothing is selected', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <ButtonGroupPicker onChange={onChangeFn} multiple>
                <ButtonOption label="Option 1" name="option1" />
                <ButtonOption label="Option 2" name="option2" />
            </ButtonGroupPicker>,
        );
        component
            .find('input')
            .at(1)
            .simulate('change', { target: { checked: true, value: 'option2' } });
        expect(onChangeFn).toHaveBeenCalledWith(['option2']);
    });

    it('should fire onchange with an array excluding the unchecked value when multiple is true and option is unchecked', () => {
        const onChangeFn = jest.fn();
        const value = ['option1', 'option2'];
        const component = mount(
            <ButtonGroupPicker value={value} onChange={onChangeFn} multiple>
                <ButtonOption label="Option 1" name="option1" />
                <ButtonOption label="Option 2" name="option2" />
            </ButtonGroupPicker>,
        );
        component
            .find('input')
            .at(1)
            .simulate('change', { target: { checked: false, value: 'option2' } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1']);
    });
});
