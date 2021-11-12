import React from 'react';
import { mount } from 'enzyme';
import ColorPickerInput from '..';
import ColorPicker from '../../ColorPicker';
import Input from '../../Input';

describe('<ColorPickerInput />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                },
            ];
        });
    });

    it('should render an input with type color', () => {
        const component = mount(<ColorPickerInput />);
        expect(component.find('input').prop('type')).toBe('color');
    });

    it('should set the value passed to the input', () => {
        const component = mount(<ColorPickerInput value="#000" />);
        expect(component.find('input').prop('value')).toBe('#000');
    });

    it('should show a color picker', () => {
        const component = mount(<ColorPickerInput />);
        component.find('input').simulate('click');
        expect(component.find(ColorPicker).exists()).toBe(true);
    });

    it('should call onChange callback', () => {
        const changeFn = jest.fn();
        const component = mount(<ColorPickerInput onChange={changeFn} />);
        component.find('input').simulate('click');
        component.find(ColorPicker).prop('onChange')({ hex: '#000' });
        expect(changeFn).toHaveBeenCalledWith('#000');
    });

    it('should call onChange callback', () => {
        const clickFn = jest.fn();
        const component = mount(<ColorPickerInput onClick={clickFn} />);
        component.find('input').simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });

    it('should pass the input props to the input', () => {
        const component = mount(
            <ColorPickerInput label="Test label" name="test" bottomHelpText="Help text" />,
        );
        expect(component.find(Input).prop('label')).toBe('Test label');
        expect(component.find(Input).prop('name')).toBe('test');
        expect(component.find(Input).prop('bottomHelpText')).toBe('Help text');
    });
});
