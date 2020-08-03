import React from 'react';
import { mount, shallow } from 'enzyme';
import { OptionItem as Option } from '../index';
import StyledHeader from '../styled/header';
import StyledItem from '../styled/item';
import CheckmarkIcon from '../checkmark';

describe('<Option />', () => {
    let optionRegisterFn;
    let optionUnregisterFn;
    let hoverFn;
    let clickFn;

    beforeEach(() => {
        jest.useFakeTimers();
        optionRegisterFn = jest.spyOn(Option.prototype, 'register');
        optionUnregisterFn = jest.spyOn(Option.prototype, 'unregister');
        hoverFn = jest.fn();
        clickFn = jest.fn();
    });
    afterEach(() => {
        optionRegisterFn.mockClear();
        optionUnregisterFn.mockClear();
        hoverFn.mockClear();
        clickFn.mockClear();
    });

    it('should render a option header when variant is header', () => {
        const component = mount(<Option label="Header 1" variant="header" />);
        expect(component.find(StyledHeader).exists()).toBe(true);
    });
    it('should render a regular option when variant is default', () => {
        const component = mount(<Option label="option 1" name="option1" />);
        expect(component.find(StyledItem).exists()).toBe(true);
    });
    it('should render a regular option when type name is string or number', () => {
        const names = ['option 1', 1];
        names.forEach(name => {
            const component = mount(<Option label="option 1" name={name} />);
            expect(component.find(StyledItem).exists()).toBe(true);
        });
    });
    it('should return null when type name is not string or number', () => {
        const names = [{}, [], undefined, null, true, new Date()];
        names.forEach(name => {
            const component = mount(<Option label="option 1" name={name} />);
            expect(component).toEqual({});
        });
    });
    it('should not register when is disabled', () => {
        mount(<Option disabled />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
    });
    it('should not register when is variant header', () => {
        mount(<Option variant="header" />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
    });
    it('should not register when is name passed is not a string', () => {
        mount(<Option name={{}} currentValueName="option1" />);
        expect(optionRegisterFn).not.toHaveBeenCalled();
    });
    it('should register when mount', () => {
        mount(<Option name="option1" />);
        expect(optionRegisterFn).toHaveBeenCalled();
    });
    it('should register when deselected', () => {
        const component = mount(
            <Option label="Option 1" name="option1" currentValueName="option1" />,
        );
        component.setProps({ currentValueName: undefined });
        expect(optionRegisterFn).toHaveBeenCalled();
    });
    it('should unregister when unmount', () => {
        const component = mount(<Option label="option 1" name="option1" />);
        component.unmount();
        expect(optionUnregisterFn).toHaveBeenCalled();
    });
    it('should fire an event with the right data when click the option', async () => {
        const data = {
            name: 'option1',
            label: 'option 1',
        };
        const component = mount(
            <Option label="option 1" name="option1" privateOnClick={clickFn} />,
        );
        jest.clearAllTimers();
        component.find('li').simulate('mousedown');
        jest.runAllTimers();
        expect(clickFn).toHaveBeenCalledWith(expect.any(Object), data);
    });
    it('should not fire an event when click the option but is disabled', () => {
        const component = mount(
            <Option disabled label="option 1" name="option1" privateOnClick={clickFn} />,
        );
        component.find('li').simulate('mousedown');
        expect(clickFn).not.toHaveBeenCalled();
    });
    it('should fire an event with the right data when hover the option', () => {
        const component = shallow(
            <Option label="option 1" name="option1" privateOnHover={hoverFn} />,
        );
        component.find('li').simulate('mouseEnter');
        expect(hoverFn).toHaveBeenCalledWith(undefined, 'option1');
    });
    it('should not fire an event when hover the option but is disabled', () => {
        const component = mount(
            <Option disabled label="option 1" name="option1" privateOnHover={hoverFn} />,
        );
        component.find('li').simulate('mouseEnter');
        expect(hoverFn).not.toHaveBeenCalled();
    });
    it('should render a checkmark icon when selected', () => {
        const component = mount(<Option name="option1" currentValues={['option1']} />);
        expect(component.find(CheckmarkIcon).exists()).toBe(true);
    });
    it('should call privateUnregisterChild with the right parameters on unmount', () => {
        const privateUnregisterChildMockFn = jest.fn();
        const component = mount(
            <Option
                name="option1"
                currentValueName="option1"
                privateUnregisterChild={privateUnregisterChildMockFn}
            />,
        );
        component.unmount();
        expect(privateUnregisterChildMockFn).toHaveBeenCalledTimes(1);
        expect(privateUnregisterChildMockFn.mock.calls[0][0]).not.toBeFalsy();
    });
});
