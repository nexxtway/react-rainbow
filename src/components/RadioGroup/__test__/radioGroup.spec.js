import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from '../index';

describe('<RadioGroup />', () => {
    it('should have the right class names when an error is passed', () => {
        const component = mount(
            <RadioGroup error="input error" />,
        );
        expect(component.find('fieldset').prop('className')).toBe('rainbow-radio-group_container rainbow-radio-group--error');
    });
    it('should have the right class names when a custom class is passed', () => {
        const component = mount(
            <RadioGroup className="my-custom-class" />,
        );
        expect(component.find('fieldset').prop('className')).toBe('rainbow-radio-group_container my-custom-class');
    });
});
