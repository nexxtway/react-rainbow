import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<SliderLabel/>', () => {
    it('should set the sliderId passed as the htmlFor prop in the label element', () => {
        const component = mount(
            <Label label="Input Label" sliderId="slider-id-213" />,
        );
        expect(component.find('label').prop('htmlFor')).toBe('slider-id-213');
    });
});
