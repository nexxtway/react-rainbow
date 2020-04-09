import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<InputCheckboxLabel/>', () => {
    it('should set the inputId passed as the htmlFor prop in the label element', () => {
        const component = mount(<Label label="Input Label" inputId="input-213" />);
        expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
});
