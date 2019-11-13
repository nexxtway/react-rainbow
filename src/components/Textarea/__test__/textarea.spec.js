import React from 'react';
import { mount } from 'enzyme';
import Textarea from './../index';

describe('<Textarea/>', () => {
    it('should set an id in the textarea element', () => {
        const component = mount(<Textarea />);
        expect(component.find('textarea').prop('id')).toMatch(/textarea/);
    });
    it('should set the value passed in the textarea element', () => {
        const component = mount(<Textarea value="textarea value" />);
        expect(component.find('textarea').prop('value')).toBe('textarea value');
    });
    it('should set the placeholder passed in the textarea element', () => {
        const component = mount(<Textarea placeholder="Placeholder Text" />);
        expect(component.find('textarea').prop('placeholder')).toBe('Placeholder Text');
    });
    it('should fire an event when the user change the textarea', () => {
        const onChangeFn = jest.fn();
        const component = mount(<Textarea onChange={onChangeFn} />);
        component.find('textarea').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the disabled passed in the textarea element', () => {
        const component = mount(<Textarea disabled />);
        expect(component.find('textarea').prop('disabled')).toBe(true);
    });
    it('should set the readonly passed in the textarea element', () => {
        const component = mount(<Textarea readOnly />);
        expect(component.find('textarea').prop('readOnly')).toBe(true);
    });
    it('should set required in the textarea element if it is passed', () => {
        const component = mount(<Textarea required />);
        expect(component.find('textarea').prop('required')).toBe(true);
    });
    it('should set the maxLength passed in the textarea element', () => {
        const component = mount(<Textarea maxLength={0} />);
        expect(component.find('textarea').prop('maxLength')).toBe(0);
    });
    it('should set the minLength passed in the textarea element', () => {
        const component = mount(<Textarea minLength={0} />);
        expect(component.find('textarea').prop('minLength')).toBe(0);
    });
    it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the textarea when a bottomHelpText is passed', () => {
        const component = mount(<Textarea bottomHelpText="Help text" />);
        expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
        expect(component.find('textarea').prop('aria-labelledby')).toMatch(/inline-text-label/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<Textarea label="custom label" required />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
        });
    });
});
