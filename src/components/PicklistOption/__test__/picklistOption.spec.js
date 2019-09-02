import React from 'react';
import { mount, shallow } from 'enzyme';
import { Option as PicklistOption } from '../index';

describe('<PicklistOption />', () => {
    it('should have the right classnames when active', () => {
        const component = mount(<PicklistOption label="option 1" name="option1" />);
        expect(component.find('li').prop('className')).toBe('rainbow-picklist-option');
        component.setProps({
            activeOptionName: 'option1',
        });
        expect(component.find('li').prop('className')).toBe(
            'rainbow-picklist-option rainbow-picklist-option_active',
        );
    });
    it('should have the right classnames when selected', () => {
        const component = mount(<PicklistOption label="option 1" name="option1" />);
        expect(component.find('li').prop('className')).toBe('rainbow-picklist-option');
        component.setProps({
            currentValueName: 'option1',
        });
        expect(component.find('li').prop('className')).toBe(
            'rainbow-picklist-option rainbow-picklist-option_selected',
        );
    });
    it('should render a option header when variant is header', () => {
        const component = mount(<PicklistOption label="Header 1" variant="header" />);
        expect(component.find('li').prop('className')).toBe('rainbow-picklist-option_header');
        expect(component.find('li > span.rainbow-picklist-option_header-label').exists()).toBe(
            true,
        );
    });
    it('should render a regular option when variant is default', () => {
        const component = mount(<PicklistOption label="option 1" name="option1" />);
        expect(component.find('li').prop('className')).toBe('rainbow-picklist-option');
    });
    it('should not register when is disabled', () => {
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        mount(<PicklistOption disabled />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should not register when is variant header', () => {
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        mount(<PicklistOption variant="header" />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should not register when is name passed is not a string', () => {
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        mount(<PicklistOption name={{}} currentValueName="option1" />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should not register when is is selected', () => {
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        mount(<PicklistOption name="option1" currentValueName="option1" />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should register when mount', () => {
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        mount(<PicklistOption name="option1" />);
        expect(optionRegisterFn).toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should unregister when selected', () => {
        const optionUnregisterFn = jest.spyOn(PicklistOption.prototype, 'unregister');
        const component = mount(<PicklistOption label="option 1" name="option1" />);
        component.setProps({ currentValueName: 'option1' });
        expect(optionUnregisterFn).toHaveBeenCalled();
        optionUnregisterFn.mockClear();
    });
    it('should register when deselected', () => {
        const component = mount(
            <PicklistOption label="Option 1" name="option1" currentValueName="option1" />,
        );
        const optionRegisterFn = jest.spyOn(PicklistOption.prototype, 'register');
        component.setProps({ currentValueName: undefined });
        expect(optionRegisterFn).toHaveBeenCalled();
        optionRegisterFn.mockClear();
    });
    it('should unregister when unmount', () => {
        const optionUnregisterFn = jest.spyOn(PicklistOption.prototype, 'unregister');
        const component = mount(<PicklistOption label="option 1" name="option1" />);
        component.unmount();
        expect(optionUnregisterFn).toHaveBeenCalled();
        optionUnregisterFn.mockClear();
    });
    it('should fire an event with the right data when click the option', () => {
        const clickFn = jest.fn();
        const data = {
            name: 'option1',
            label: 'option 1',
        };
        const component = shallow(
            <PicklistOption label="option 1" name="option1" privateOnClick={clickFn} />,
        );
        component.find('li').simulate('mousedown');
        expect(clickFn).toHaveBeenCalledWith(undefined, data);
    });
    it('should not fire an event when click the option but is disabled', () => {
        const clickFn = jest.fn();
        const component = mount(
            <PicklistOption disabled label="option 1" name="option1" privateOnClick={clickFn} />,
        );
        component.find('li').simulate('mousedown');
        expect(clickFn).not.toHaveBeenCalled();
    });
    it('should fire an event with the right data when hover the option', () => {
        const hoverFn = jest.fn();
        const component = shallow(
            <PicklistOption label="option 1" name="option1" privateOnHover={hoverFn} />,
        );
        component.find('li').simulate('mouseEnter');
        expect(hoverFn).toHaveBeenCalledWith(undefined, 'option1');
    });
    it('should not fire an event when hover the option but is disabled', () => {
        const hoverFn = jest.fn();
        const component = mount(
            <PicklistOption disabled label="option 1" name="option1" privateOnHover={hoverFn} />,
        );
        component.find('li').simulate('mouseEnter');
        expect(hoverFn).not.toHaveBeenCalled();
    });
});
