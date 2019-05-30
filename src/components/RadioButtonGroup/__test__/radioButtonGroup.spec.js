import React from 'react';
import { mount } from 'enzyme';
import RadioButtonGroup from '../index';

describe('<RadioButtonGroup />', () => {
    it('should have the right class names when an error is passed', () => {
        const component = mount(<RadioButtonGroup error="input error" />);
        expect(component.find('fieldset').prop('className')).toBe(
            'rainbow-radio-button-group_container rainbow-radio-button-group--error',
        );
    });
    it('should have the right class names when a custom class is passed', () => {
        const component = mount(<RadioButtonGroup className="my-custom-class" />);
        expect(component.find('fieldset').prop('className')).toBe(
            'rainbow-radio-button-group_container my-custom-class',
        );
    });
});
