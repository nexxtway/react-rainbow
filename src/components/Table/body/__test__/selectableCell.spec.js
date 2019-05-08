import React from 'react';
import { mount } from 'enzyme';
import SelectableCell from '../selectableCell';
import { LEFT_KEY, RIGHT_KEY } from '../../../../libs/constants';

describe('<SelectableCell />', () => {
    it('should render a td element with role "gridcell"', () => {
        const component = mount(<SelectableCell />);
        const td = component.find('td');
        expect(td.prop('role')).toBe('gridcell');
    });
    it('should set the right name prop to Input component', () => {
        const component = mount(<SelectableCell tableId="table-23" />);
        expect(component.find('Input').prop('name')).toBe('table-23-options');
    });
    it('should set the type prop in Input component to checkbox by default', () => {
        const component = mount(<SelectableCell />);
        expect(component.find('Input').prop('type')).toBe('checkbox');
    });
    it('should set the type prop in Input component to radio when inputType passed is "radio"', () => {
        const component = mount(<SelectableCell inputType="radio" />);
        expect(component.find('Input').prop('type')).toBe('radio');
    });
    it('should set the checked prop in Input component to true when isSelected is passed', () => {
        const component = mount(<SelectableCell isSelected />);
        expect(component.find('Input').prop('checked')).toBe(true);
    });
    it('should set the disabled prop in Input component to true when isDisabled is passed', () => {
        const component = mount(<SelectableCell isDisabled />);
        expect(component.find('Input').prop('disabled')).toBe(true);
    });
    it('should event.preventDefault when the input container is clicked with shift key pressed', () => {
        const component = mount(<SelectableCell />);
        const inputContainer = component.find('div[role="presentation"]');
        const preventDefaultMockFn = jest.fn();
        inputContainer.simulate('mouseDown', {
            preventDefault: preventDefaultMockFn,
            shiftKey: true,
        });
        expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not call event.preventDefault when the input container is clicked without shift key pressed', () => {
        const component = mount(<SelectableCell />);
        const inputContainer = component.find('div[role="presentation"]');
        const preventDefaultMockFn = jest.fn();
        inputContainer.simulate('mouseDown', {
            preventDefault: preventDefaultMockFn,
            shiftKey: false,
        });
        expect(preventDefaultMockFn).not.toHaveBeenCalled();
    });
    it('should not call any event when inputType is "radio" and isSelected is passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="radio"
                isSelected
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onDeselectRowMockFn).not.toHaveBeenCalled();
        expect(onSelectRowMockFn).not.toHaveBeenCalled();
    });
    it('should call the right event when inputType is "radio" and isSelected is not passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="radio"
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onDeselectRowMockFn).not.toHaveBeenCalled();
        expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
    });
    it('should call the right event when shiftKey is not pressed, inputType is "checkbox" and isSelected is not passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="checkbox"
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click', {
            shiftKey: false,
        });
        expect(onDeselectRowMockFn).not.toHaveBeenCalled();
        expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
    });
    it('should call the right event when shiftKey is not pressed, inputType is "checkbox" and isSelected is passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="checkbox"
                isSelected
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click', {
            shiftKey: false,
        });
        expect(onSelectRowMockFn).not.toHaveBeenCalled();
        expect(onDeselectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
    });
    it('should call the right event when shiftKey is pressed, inputType is "checkbox" and isSelected is not passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="checkbox"
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click', {
            shiftKey: true,
        });
        expect(onDeselectRowMockFn).not.toHaveBeenCalled();
        expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), true);
    });
    it('should call the right event when shiftKey is pressed, inputType is "checkbox" and isSelected is passed', () => {
        const onDeselectRowMockFn = jest.fn();
        const onSelectRowMockFn = jest.fn();
        const component = mount(
            <SelectableCell
                inputType="checkbox"
                isSelected
                onDeselectRow={onDeselectRowMockFn}
                onSelectRow={onSelectRowMockFn}
            />,
        );
        component.find('input').simulate('click', {
            shiftKey: true,
        });
        expect(onSelectRowMockFn).not.toHaveBeenCalled();
        expect(onDeselectRowMockFn).toHaveBeenCalledWith(expect.any(Object), true);
    });
    it('should call event.preventDefault when press left key in input type radio', () => {
        const component = mount(<SelectableCell inputType="radio" />);
        const preventDefaultMockFn = jest.fn();
        component.find('input').simulate('keyDown', {
            keyCode: LEFT_KEY,
            preventDefault: preventDefaultMockFn,
        });
        expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
    });
    it('should call event.preventDefault when press right key in input type radio', () => {
        const component = mount(<SelectableCell inputType="radio" />);
        const preventDefaultMockFn = jest.fn();
        component.find('input').simulate('keyDown', {
            keyCode: RIGHT_KEY,
            preventDefault: preventDefaultMockFn,
        });
        expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not call event.preventDefault when press left key in input type checkbox', () => {
        const component = mount(<SelectableCell inputType="checkbox" />);
        const preventDefaultMockFn = jest.fn();
        component.find('input').simulate('keyDown', {
            keyCode: LEFT_KEY,
            preventDefault: preventDefaultMockFn,
        });
        expect(preventDefaultMockFn).not.toHaveBeenCalled();
    });
    it('should not call event.preventDefault when press right key in input type checkbox', () => {
        const component = mount(<SelectableCell inputType="checkbox" />);
        const preventDefaultMockFn = jest.fn();
        component.find('input').simulate('keyDown', {
            keyCode: RIGHT_KEY,
            preventDefault: preventDefaultMockFn,
        });
        expect(preventDefaultMockFn).not.toHaveBeenCalled();
    });
});
