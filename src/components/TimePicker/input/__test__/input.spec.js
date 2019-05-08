import React from 'react';
import { mount } from 'enzyme';
import Input from './../';

const icon = <svg />;

describe('<Input/>', () => {
    it('should set an id in the input element', () => {
        const component = mount(<Input />);
        expect(component.find('input').prop('id')).toMatch(/input/);
    });
    it('should set the type passed in the input element', () => {
        const component = mount(<Input type="color" />);
        expect(component.find('input').prop('type')).toBe('color');
    });
    it('should set the value passed in the input element', () => {
        const component = mount(<Input value="Input value" />);
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should set the placeholder passed in the input element', () => {
        const component = mount(<Input placeholder="Placeholder Text" />);
        expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
    });
    it('should fire an event when the user change the input', () => {
        const onChangeFn = jest.fn();
        const component = mount(<Input onChange={onChangeFn} />);
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the tabIndex passed in the input element', () => {
        const component = mount(<Input tabIndex={0} />);
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', () => {
        const component = mount(<Input disabled />);
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should set the readonly passed in the input element', () => {
        const component = mount(<Input readOnly />);
        expect(component.find('input').prop('readOnly')).toBe(true);
    });
    it('should set required in the input element if it is passed', () => {
        const component = mount(<Input required />);
        expect(component.find('input').prop('required')).toBe(true);
    });
    it('should set the maxLength passed in the Input element', () => {
        const component = mount(<Input maxLength={0} />);
        expect(component.find('input').prop('maxLength')).toBe(0);
    });
    it('should set the minLength passed in the Input element', () => {
        const component = mount(<Input minLength={0} />);
        expect(component.find('input').prop('minLength')).toBe(0);
    });
    it('should set the pattern passed in the Input element', () => {
        const component = mount(<Input pattern="Input Pattern" />);
        expect(component.find('input').prop('pattern')).toBe('Input Pattern');
    });
    it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', () => {
        const component = mount(<Input bottomHelpText="Help text" />);
        expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
        expect(component.find('input').prop('aria-labelledby')).toMatch(/inline-text-label/);
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(<Input error="error message" />);
        expect(component.find('.rainbow-time-picker_input-error').prop('id')).toMatch(
            /error-message/,
        );
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<Input label="custom label" required />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
        });
    });
    it('should have the right class name in the container element', () => {
        const component = mount(<Input />);
        expect(
            component.find('div[className="rainbow-time-picker_input-container"]').exists(),
        ).toBe(true);
    });
    it('should have the right class names when icon is passed', () => {
        const component = mount(<Input icon={icon} />);
        expect(
            component
                .find(
                    'div[className="rainbow-time-picker_input-icon-container rainbow-time-picker_input-icon--left"]',
                )
                .exists(),
        ).toBe(true);
    });
    it('should have the right class names when icon is passed and iconPosition is right', () => {
        const component = mount(<Input icon={icon} iconPosition="right" />);
        expect(
            component
                .find(
                    'div[className="rainbow-time-picker_input-icon-container rainbow-time-picker_input-icon--right"]',
                )
                .exists(),
        ).toBe(true);
    });
    it('should have the right class names when error is passed', () => {
        const component = mount(<Input error="Error text" />);
        expect(
            component
                .find(
                    'div[className="rainbow-time-picker_input-container rainbow-time-picker_input--error"]',
                )
                .exists(),
        ).toBe(true);
    });
    it('should have the right class names when isBare', () => {
        const component = mount(<Input isBare />);
        expect(component.find('input').prop('className')).toBe(
            'rainbow-time-picker_input rainbow-time-picker_input--bare',
        );
    });
    it('should have the right class names when isCentered', () => {
        const component = mount(<Input isCentered />);
        expect(component.find('input').prop('className')).toBe(
            'rainbow-time-picker_input rainbow-time-picker_input--counter',
        );
    });
});
