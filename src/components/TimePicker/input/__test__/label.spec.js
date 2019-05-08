import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<InputLabel/>', () => {
    it('should set the inputId passed as the htmlFor prop in the label element', () => {
        const component = mount(<Label label="Input Label" inputId="input-213" />);
        expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', () => {
        const component = mount(<Label label="Input Label" id="label-123" />);
        expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should set the required prop passed in the RequiredAsterisk component', () => {
        const component = mount(<Label label="Input Label" required />);
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should add the right class names when readOnly is passed', () => {
        const component = mount(<Label label="Input Label" readOnly />);
        expect(
            component
                .find('.rainbow-time-picker_input-label.rainbow-time-picker_input-label--readonly')
                .exists(),
        ).toBe(true);
    });
    it('should add the right class names when hideLabel is passed', () => {
        const component = mount(<Label label="Input Label" hideLabel />);
        expect(
            component
                .find('.rainbow-time-picker_input-label.rainbow-time-picker_input-label--hide')
                .exists(),
        ).toBe(true);
    });
});
