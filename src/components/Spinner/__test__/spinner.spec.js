import React from 'react';
import { mount } from 'enzyme';
import Spinner from './../index';

describe('<Spinner/>', () => {
    it('should not render the spinner when isVisible is false', () => {
        const component = mount(
            <Spinner isVisible={false} />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not render the spinner when isVisible is true', () => {
        const component = mount(
            <Spinner isVisible />,
        );
        expect(component.children().length).toBe(1);
    });
    it('should have the right class names when ehiter the variant and size are not passed', () => {
        const component = mount(
            <Spinner />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--medium').exists()).toBe(true);
    });
    it('should have the right class names when a custom class name is passed, variant is brand and size is large', () => {
        const component = mount(
            <Spinner variant="brand" size="large" className="custom-container-classname" />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--brand.rainbow-spinner--large.custom-container-classname').exists()).toBe(true);
    });
    it('should have the right class names when variant is inverse and size is medium', () => {
        const component = mount(
            <Spinner variant="inverse" size="medium" />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--inverse.rainbow-spinner--medium').exists()).toBe(true);
    });
    it('should have the right class names when size is small', () => {
        const component = mount(
            <Spinner size="small" />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--small').exists()).toBe(true);
    });
    it('should have the right class names when size is x-small', () => {
        const component = mount(
            <Spinner size="x-small" />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--x-small').exists()).toBe(true);
    });
    it('should have the right class names when size is xx-small', () => {
        const component = mount(
            <Spinner size="xx-small" />,
        );
        expect(component.find('div.rainbow-spinner.rainbow-spinner--xx-small').exists()).toBe(true);
    });
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(
            <Spinner assistiveText="for screen readers" />,
        );
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
});
