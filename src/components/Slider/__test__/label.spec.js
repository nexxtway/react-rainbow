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
    it('should add the right class names', () => {
        const component = mount(
            <Label label="Slider Label" />,
        );
        expect(component.find('.rainbow-slider_label').exists()).toBe(true);
    });
    it('should add the right class names when hideLabel is passed', () => {
        const component = mount(
            <Label label="Slider Label" hideLabel />,
        );
        expect(component.find('.rainbow-slider_label.rainbow-slider_label--hide-label').exists()).toBe(true);
    });
});
